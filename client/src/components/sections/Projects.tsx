import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Project = {
  name: string;
  description: string;
  image: string;
  link?: string;
};

// TODO: replace with your real projects
const projects: Project[] = [
  {
    name: "Matjr",
    description:
      "AI-powered e-commerce demo storefront, built to show what a modern shop site can look like, including an AI review summarizer, with more features planned. Custom features can be added on request.",
    image:
      "https://github.com/HasanAlasker/AI-Review-Summarizer/blob/main/public/2.png?raw=true",
    link: "https://matjr.alasker.dev",
  },
  {
    name: "Servio — Car Maintenance Tracker.",
    description:
      "Servio is a cross-platform mobile application that helps drivers stay on top of vehicle maintenance, insurance renewals, and license deadlines — all in one place.",
    image:
      "https://github.com/HasanAlasker/Servio-Car-Service-Tracker/raw/main/Client/Servio/assets/preview1.png",
    link: "https://servio.expo.app/",
  },
];

// Whole card is the link when one exists, so there is no nested interactive element
function CardWrapper({
  link,
  name,
  children,
}: {
  link?: string;
  name: string;
  children: ReactNode;
}) {
  if (!link) return <div className="group block">{children}</div>;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`${name} (opens in a new tab)`}
      className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl py-20 lg:py-28">
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        Selected work
      </h2>

      {projects.length === 0 ? (
        <p className="mt-8 text-muted-foreground">
          Projects are on the way. Check back soon.
        </p>
      ) : (
        <ul className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.name}>
              <CardWrapper link={project.link} name={project.name}>
                <div className="aspect-16/10 overflow-hidden rounded-lg border bg-muted">
                  <img
                    src={project.image}
                    alt={`${project.name} website screenshot`}
                    loading="lazy"
                    className="size-full object-cover object-top"
                  />
                </div>

                <div className="mt-4 flex items-center gap-1.5">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  {project.link && (
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 text-muted-foreground transition-colors group-hover:text-foreground"
                    />
                  )}
                </div>
                <p className="mt-1 max-w-prose text-pretty text-muted-foreground">
                  {project.description}
                </p>
              </CardWrapper>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
