import { execSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const ports = [3000, 3001];

function killPort(port) {
  if (process.platform !== "win32") {
    try {
      execSync(`lsof -ti:${port} | xargs kill -9 2>/dev/null`, {
        stdio: "ignore",
        shell: true,
      });
    } catch {
      // Port zaten boş.
    }
    return;
  }

  try {
    const output = execSync(`netstat -ano -p TCP | findstr :${port}`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });

    const pids = new Set();
    for (const line of output.split("\n")) {
      if (!line.includes("LISTENING")) continue;
      const match = line.trim().match(/\s+(\d+)\s*$/);
      if (match) pids.add(match[1]);
    }

    for (const pid of pids) {
      try {
        execSync(`taskkill /F /PID ${pid} /T`, { stdio: "ignore" });
        console.log(`Port ${port} (PID ${pid}) durduruldu.`);
      } catch {
        // Süreç zaten kapanmış olabilir.
      }
    }
  } catch {
    // Port kullanılmıyor.
  }
}

function removeLocks() {
  const lockPath = path.join(root, ".next", "dev", "lock");
  if (existsSync(lockPath)) {
    rmSync(lockPath, { force: true });
    console.log("Next.js kilit dosyası temizlendi.");
  }
}

for (const port of ports) {
  killPort(port);
}

removeLocks();
