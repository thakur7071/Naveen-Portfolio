import type { ReactNode } from "react";
import SiteNavbar from "./SiteNavbar";

export default function InteriorPage({
  eyebrow,
  title,
  children,
  hideHeading = false,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  hideHeading?: boolean;
}) {
  return (
    <main className="interior-page">
      <SiteNavbar />
      <div className="interior-content">
        {!hideHeading && (
          <>
            <p className="interior-eyebrow">{eyebrow}</p>
            <h1 className="interior-title">{title}</h1>
          </>
        )}
        {children}
      </div>
      <footer className="interior-footer">© {new Date().getFullYear()} NAVEEN.DEV · BUILT WITH CURIOSITY & CODE</footer>
    </main>
  );
}
