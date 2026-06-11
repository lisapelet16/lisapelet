import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");

let child;
let shuttingDown = false;

function shutdown() {
  if (shuttingDown) return;
  shuttingDown = true;

  if (!child?.pid) {
    process.exit(0);
    return;
  }

  if (process.platform === "win32") {
    spawn("taskkill", ["/pid", String(child.pid), "/f", "/t"], {
      stdio: "ignore",
    }).on("exit", () => process.exit(0));
    return;
  }

  child.kill("SIGTERM");
  setTimeout(() => {
    try {
      child.kill("SIGKILL");
    } catch {
      // Süreç zaten kapandı.
    }
    process.exit(0);
  }, 3000).unref();
}

child = spawn(process.execPath, [nextBin, "dev"], {
  cwd: root,
  stdio: "inherit",
  env: process.env,
  windowsHide: false,
});

child.on("exit", (code) => {
  if (!shuttingDown) {
    process.exit(code ?? 0);
  }
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
