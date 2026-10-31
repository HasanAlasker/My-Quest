import { CheckCircle2 } from "lucide-react";
import ContactForm from "../form/ContactForm";
import { useState } from "react";

export default function BookCall() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <section id="contact" className="mx-auto max-w-6xl py-20 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Book a free call
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-muted-foreground sm:text-lg">
            Tell us a bit about you and we'll get in touch to set up a time. The
            call is 15 minutes, with no commitment.
          </p>
        </div>

        {/* Form */}
        <div>
          {status === "success" ? (
            <div
              role="status"
              className="flex flex-col items-start gap-3 rounded-lg border p-6"
            >
              <CheckCircle2 className="size-6 text-green-500" aria-hidden />
              <h3 className="text-lg font-semibold">Request sent</h3>
              <p className="text-muted-foreground">
                Thanks. We'll reach out by Whatsapp or email to schedule the
                call.
              </p>
            </div>
          ) : (
            <ContactForm status={status} setStatus={setStatus} />
          )}
        </div>
      </div>
    </section>
  );
}
