import type { IContactData } from "@/data/types";

export function ContactSection({ title, email }: IContactData) {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 text-center md:grid-cols-2">
        <h2 className="text-foreground mb-8 text-lg sm:text-2xl font-bold">
          {title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className="border-border bg-card flex justify-center rounded-lg border p-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✉️</span>
            <a
              href={`mailto:${email}`}
              className="text-primary text-lg sm:text-xl transition-colors hover:underline"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
