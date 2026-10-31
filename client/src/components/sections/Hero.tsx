import { Fingerprint } from "lucide-react";
import FadedGrid from "../general/FadedGrid";
import Mock from "../landing/Mock";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <FadedGrid />

      <div className="mx-auto flex min-h-[90svh] max-w-6xl flex-col md:pr-4">
        {/* Main */}
        <div className="grid flex-1 items-center gap-14 py-10 lg:grid-cols-2 lg:gap-10 lg:py-0">
          {/* Copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge
              variant="outline"
              className="gap-1.5 border-green-600 bg-background text-sm text-green-500"
            >
              <Fingerprint className="size-3.5 motion-safe:animate-pulse" />
              Build a digital identity
            </Badge>

            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your brand, built into a website
            </h1>

            <p className="mt-5 max-w-prose text-pretty text-base text-muted-foreground sm:text-lg">
              We design and build custom websites for small businesses. One
              small team takes you from first sketch to launch, and you see the
              work at every step.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href="#contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Book free call
                </Button>
              </a>

              <a href="#projects">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Our work
                </Button>
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              15 minutes, no commitment.
            </p>
          </div>

          {/* Visual: a site being built */}
          <Mock />
        </div>
      </div>
    </section>
  );
}
