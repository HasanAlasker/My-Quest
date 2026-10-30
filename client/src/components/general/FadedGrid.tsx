export default function FadedGrid() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 text-foreground mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]"
      style={{
        backgroundImage:
          "linear-gradient(to right, color-mix(in srgb, currentColor 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, currentColor 8%, transparent) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}
