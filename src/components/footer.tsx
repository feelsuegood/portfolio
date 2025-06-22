interface FooterProps {
  copyrightText: string;
}

export function Footer({ copyrightText }: FooterProps) {
  return (
    <footer className="border-border border-t py-8 text-center">
      <div className="bg-secondary text-secondary-foreground inline-block rounded-full px-4 py-2">
        {copyrightText}
      </div>
    </footer>
  );
}
