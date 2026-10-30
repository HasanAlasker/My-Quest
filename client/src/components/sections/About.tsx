import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const team = [
  {
    name: "Hasan Alasker",
    role: "Design and front-end",
    image: "https://avatars.githubusercontent.com/u/148560423",
    href: "https://github.com/HasanAlasker",
  },
  {
    name: "Jameel Handomeh",
    role: "Back-end and integrations",
    image: "https://avatars.githubusercontent.com/u/121124177",
    href: "https://github.com/handomeh03",
  },
];

const principles = [
  {
    title: "You talk to the people doing the work",
    text: "No account managers or hand-offs. Messages go straight to the designer or developer building your site.",
  },
  {
    title: "The team fits the project",
    text: "We bring in the skills your project needs and nothing extra, so you aren't paying for roles you don't use.",
  },
  {
    title: "You own what we build",
    text: "The code, the design files and the domain are yours when the project is done.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Story */}
        <div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            A small team of freelancers
          </h2>

          <div className="mt-6 space-y-4 text-pretty text-muted-foreground sm:text-lg">
            <p>
              AlaskerDev isn't a registered company. It's a group of independent
              freelancers who work together on projects so clients get design
              and development from one team.
            </p>
            <p>
              We kept it small on purpose. Fewer people means fewer
              middlemen, clearer communication and work you can ask us about
              directly.
            </p>
          </div>

          <dl className="mt-10 space-y-6">
            {principles.map((item) => (
              <div key={item.title}>
                <dt className="font-semibold">{item.title}</dt>
                <dd className="mt-1 text-sm text-muted-foreground sm:text-base">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">
            Who you'll work with
          </h3>
          <ul className="mt-4 divide-y border-y">
            {team.map((member) => (
              <li key={member.name + member.role}>
                <a
                  href={member.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 py-5 transition-colors hover:bg-muted/50 sm:px-2"
                >
                  <Avatar className="size-14">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{initials(member.name)}</AvatarFallback>
                  </Avatar>
                  <div className="leading-tight">
                    <p className="font-semibold">{member.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}