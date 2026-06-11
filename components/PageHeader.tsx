import FloatingOrbs from "./FloatingOrbs";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
}: PageHeaderProps) {
  return (
    <div className="mesh-hero grain relative z-[1] overflow-hidden pt-36 pb-24 text-white md:pt-40 md:pb-28">
      <FloatingOrbs />
      <div className="container-main relative z-10 text-center">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-gradient-animated">
                {highlight}
              </span>
            </>
          )}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
