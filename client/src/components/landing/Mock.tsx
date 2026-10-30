import { Eye, KeyRound } from "lucide-react";

export default function Mock() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="overflow-hidden rounded-xl border bg-card shadow-xl">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <div className="ml-3 flex h-6 flex-1 items-center truncate rounded-md bg-muted px-3 text-xs text-muted-foreground">
            yourbrand.com
          </div>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <div className="space-y-3">
            <div className="h-3 w-24 rounded-full bg-green-500/60" />
            <div className="h-6 w-4/5 rounded bg-foreground/80" />
            <div className="h-6 w-3/5 rounded bg-foreground/80" />
            <div className="h-3 w-2/3 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="flex gap-2">
            <div className="h-9 w-28 rounded-md bg-primary" />
            <div className="h-9 w-20 rounded-md bg-secondary" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-square rounded-lg bg-muted" />
            <div className="aspect-square rounded-lg bg-muted" />
            <div className="aspect-square rounded-lg bg-muted" />
          </div>
        </div>
      </div>

      {/* Floating proof cards (hidden on small screens to avoid overflow) */}
      <div className="absolute -right-4 top-16 hidden items-center gap-3 rounded-lg border bg-background p-3 shadow-lg sm:flex">
        <span className="grid size-9 place-items-center rounded-md bg-green-500/10 text-green-500">
          <Eye className="size-4" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold">See it before launch</p>
          <p className="text-xs text-muted-foreground">private preview link</p>
        </div>
      </div>

      <div className="absolute -left-4 bottom-10 hidden items-center gap-3 rounded-lg border bg-background p-3 shadow-lg sm:flex">
        <span className="grid size-9 place-items-center rounded-md bg-green-500/10 text-green-500">
          <KeyRound className="size-4" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold">You own it</p>
          <p className="text-xs text-muted-foreground">
            code and domain are yours
          </p>
        </div>
      </div>
    </div>
  );
}
