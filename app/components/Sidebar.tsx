"use client";

import { useEffect, useState } from "react";

const sections = [
  {
    id: "what-youll-build",
    label: "What you'll build",
  },
  {
    id: "before-we-start",
    label: "Before we start",
  },
  {
    id: "1-get-the-go-application",
    label: "1. Get the Go application",
  },
  {
    id: "2-start-postgresql",
    label: "2. Start PostgreSQL",
  },
  {
    id: "3-build-the-go-application",
    label: "3. Build the Go application",
  },
  {
    id: "4-record-api-traffic-with-keploy",
    label: "4. Record API traffic",
  },
  {
    id: "5-generate-test-cases-with-real-api-calls",
    label: "5. Generate test cases",
  },
  {
    id: "6-verify-the-generated-tests",
    label: "6. Verify generated tests",
  },
  {
    id: "7-replay-the-recorded-tests",
    label: "7. Replay the recorded tests",
  },
  {
    id: "what-youve-accomplished",
    label: "What you've accomplished",
  },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("what-youll-build");

  useEffect(() => {
    const handleScroll = () => {
      const offset = 140;

      let currentSection = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (element) {
          const top = element.getBoundingClientRect().top;

          if (top <= offset) {
            currentSection = section.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    const headerOffset = 90;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);

    setActiveSection(id);
  };

  return (
    <aside className="hidden w-72 shrink-0 lg:block">
      <div className="sticky top-24">
        <div className="border-l border-neutral-200 pl-6">
          <div className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
            On this page
          </div>

          <nav aria-label="Table of contents">
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(event) =>
                        scrollToSection(event, section.id)
                      }
                      className={`block rounded-lg px-3 py-2.5 text-sm leading-5 transition-all duration-200 ${
                        isActive
                          ? "bg-orange-50 font-semibold text-orange-600"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-orange-600"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}