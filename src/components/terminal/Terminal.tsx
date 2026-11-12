"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { aboutLines, contactLines, helpLines, skillLines } from "./commands";

type Line = { type: "command" | "output"; text: string };
type PendingAction = "about" | "skills" | "contact" | "project" | null;

const initialLines: Line[] = [
  { type: "output", text: "Welcome to NAVEEN.DEV" },
  { type: "output", text: "Interactive portfolio terminal [v1.0.0]" },
  { type: "output", text: "Type 'help' to explore my portfolio." },
];

export default function Terminal() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>(initialLines);
  const [pending, setPending] = useState<PendingAction>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [resumeAvailable, setResumeAvailable] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const output = outputRef.current;
    if (output) output.scrollTop = output.scrollHeight;
  }, [lines, pending]);

  function addOutput(items: string[]) {
    setLines((current) => [
      ...current,
      ...items.map((text) => ({ type: "output" as const, text })),
    ]);
  }

  function chooseProject(value: string) {
    const normalized = value.trim().toLowerCase();
    const project = projects.find((item) =>
      item.number === normalized.padStart(2, "0") ||
      item.title.toLowerCase() === normalized ||
      item.slug === normalized
    );
    if (!project) {
      addOutput(["I couldn't find that project. Type 1, 2, 3, or a project name."]);
      return;
    }

    setSelectedProject(project.slug);
    setPending("project");
    addOutput([
      `${project.number}. ${project.title}`,
      project.description,
      `Technologies: ${project.technologies.join(", ")}`,
      "Main features:",
      ...project.features.map((feature) => `  • ${feature}`),
      "",
      "Want to explore this project in detail?",
    ]);
  }

  function runCommand(raw: string) {
    const command = raw.trim();
    if (!command) return;

    setLines((current) => [...current, { type: "command", text: command }]);
    const value = command.toLowerCase();

    if (value === "clear") {
      setLines(initialLines);
      setPending(null);
      setSelectedProject(null);
      setResumeAvailable(false);
      return;
    }

    if (value === "help") {
      setPending(null);
      setSelectedProject(null);
      addOutput(helpLines);
      return;
    }

    if (pending === "project" && selectedProject === "choose") {
      if (value === "back") {
        setPending(null);
        setSelectedProject(null);
        addOutput(["Back to the command menu. Type help to see commands."]);
      } else {
        chooseProject(value);
      }
      return;
    }

    if (pending === "project" && selectedProject) {
      if (value === "yes" || value === "y") {
        router.push(`/projects/${selectedProject}`);
        return;
      }
      if (value === "no" || value === "n") {
        setPending(null);
        setSelectedProject(null);
        addOutput(["No problem. Type 'projects' to explore another project."]);
        return;
      }
      if (value === "back") {
        setPending(null);
        setSelectedProject(null);
        addOutput(["Back to the command menu. Type 'help' to see commands."]);
        return;
      }
      addOutput(["Please answer yes or no, or type back to choose another project."]);
      return;
    }

    if (pending) {
      if (value === "yes" || value === "y") {
        const destination = pending;
        setPending(null);
        router.push(destination === "project" && selectedProject ? `/projects/${selectedProject}` : `/${destination}`);
        return;
      }
      if (value === "no" || value === "n") {
        setPending(null);
        addOutput(["No problem. What would you like to explore next?"]);
        return;
      }
      if (value === "back") {
        setPending(null);
        addOutput(["Back to the command menu. Type 'help' to see commands."]);
        return;
      }
      addOutput(["Please answer yes or no, or type back to return to the command menu."]);
      return;
    }

    switch (value) {
      case "whoami":
        addOutput([
          "Naveen Singh",
          "Full Stack Developer",
          "Interested in creating clean, responsive, and useful web applications.",
        ]);
        break;
      case "about":
        addOutput([...aboutLines, "", "Want to know more about me?"]);
        setPending("about");
        break;
      case "skills":
        addOutput([...skillLines, "", "Want to explore my technical skills?"]);
        setPending("skills");
        break;
      case "projects":
        addOutput([
          "Selected projects:",
          ...projects.map((project) => `${project.number}. ${project.title}`),
          "",
          "Which project would you like to explore? Type its number or name.",
        ]);
        setPending(null);
        setSelectedProject(null);
        // Project selection is handled before normal commands while this flag is active.
        setPending("project");
        setSelectedProject("choose");
        break;
      case "contact":
        addOutput([...contactLines, "", "Would you like to send me a message?"]);
        setPending("contact");
        break;
      case "resume":
        fetch("/resume.pdf", { method: "HEAD" })
          .then((response) => {
            if (response.ok) {
              setResumeAvailable(true);
              addOutput(["Resume found. Use the download link below."]);
            } else {
              setResumeAvailable(false);
              addOutput(["Resume PDF not found yet.", "Add your file at public/resume.pdf and run resume again."]);
            }
          })
          .catch(() => {
            setResumeAvailable(false);
            addOutput(["Could not check for the resume PDF.", "Add your file at public/resume.pdf and run resume again."]);
          });
        break;
      default:
        addOutput([`Command not found: ${command}`, "Type help to see available commands."]);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = input;
    setInput("");
    runCommand(command);
  }

  function handleOption(value: string) {
    runCommand(value);
    inputRef.current?.focus();
  }

  const showYesNo = pending === "about" || pending === "skills" || pending === "contact" || pending === "project";
  const showProjectChoices = pending === "project" && selectedProject === "choose";

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dots"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /></div>
        <span className="terminal-title">naveen@portfolio: ~</span>
        <span className="terminal-label">INTERACTIVE TERMINAL</span>
      </div>

      <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
        <div className="terminal-output" ref={outputRef} aria-live="polite">
          {lines.map((line, index) => (
            <div key={`${index}-${line.text}`} className="terminal-line">
              {line.type === "command" ? (
                <div className="command-line">
                  <span className="terminal-user">naveen@portfolio</span>
                  <span className="terminal-path">:~$</span>
                  <span>{line.text}</span>
                </div>
              ) : <div>{line.text || "\u00A0"}</div>}
            </div>
          ))}
        </div>

        {resumeAvailable && (
          <div className="terminal-options">
            <a className="terminal-option-link" href="/resume.pdf" download>Download resume ↓</a>
          </div>
        )}

        {showProjectChoices && (
          <div className="terminal-options">
            {projects.map((project) => (
              <button key={project.slug} type="button" onClick={() => chooseProject(project.slug)}>
                {project.number} · {project.title}
              </button>
            ))}
          </div>
        )}

        {showYesNo && !showProjectChoices && (
          <div className="terminal-options">
            <button type="button" onClick={() => handleOption("yes")}>yes ↗</button>
            <button type="button" onClick={() => handleOption("no")}>no</button>
            <button type="button" onClick={() => handleOption("back")}>back</button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="terminal-input-line">
          <span className="terminal-user">naveen@portfolio</span>
          <span className="terminal-path">:~$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command"
          />
        </form>
      </div>

      <div className="terminal-footer">
        <span><i /> SYSTEM ONLINE</span>
        <span>help · about · skills · projects · contact</span>
      </div>
    </div>
  );
}
