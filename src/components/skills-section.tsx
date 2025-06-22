import type { ISkillsData } from "@/data/types";

export function SkillsSection({ title, categories }: ISkillsData) {
  return (
    <section className="mb-16">
      <h2 className="border-border text-foreground mb-8 border-b pb-4 text-3xl font-bold">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-primary mb-4 text-xl font-semibold">
              {category.title}
            </h3>
            <ul className="text-muted-foreground space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>• {skill}</li>
              ))}
            </ul>

            {category.subcategories &&
              category.subcategories.map((subcat, subcatIndex) => (
                <div key={subcatIndex}>
                  <h4 className="text-primary mt-6 mb-3 text-lg font-semibold">
                    {subcat.title}
                  </h4>
                  <ul className="text-muted-foreground space-y-2">
                    {subcat.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>• {skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
