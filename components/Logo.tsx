import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** `light` = beyaz logo (koyu arka plan), `dark` = siyah logo (açık arka plan) */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: {
    width: 160,
    height: 64,
    className: "h-10 w-auto sm:h-11",
  },
  md: {
    width: 260,
    height: 104,
    className: "h-[4.5rem] w-auto sm:h-20 md:h-24",
  },
  lg: {
    width: 300,
    height: 120,
    className: "h-20 w-auto sm:h-24 md:h-28",
  },
};

export default function Logo({
  variant = "light",
  size = "md",
  className = "",
}: LogoProps) {
  const src =
    variant === "light" ? "/images/logo-light.webp" : "/images/logo-dark.webp";
  const { width, height, className: sizeClass } = sizes[size];

  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 transition-transform group-hover:scale-[1.02] ${className}`}
    >
      <Image
        src={src}
        alt="Lisa Pelet"
        width={width}
        height={height}
        className={`${sizeClass} object-contain`}
        priority
      />
    </Link>
  );
}
