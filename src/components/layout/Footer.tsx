import { profile } from "../../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-text-muted md:flex-row">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p>Built with React, Vite &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
