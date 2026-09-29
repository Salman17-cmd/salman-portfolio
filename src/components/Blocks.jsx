// Small building blocks shared by the home page, the resume and the experience page.
import React from "react";

export function SectionHead({ index, label, title, children }) {
  return (
    <div className="section-head" data-reveal>
      <div>
        <p className="section-kicker mono">
          <b>{index}</b> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  );
}

export function Stack({ items }) {
  return (
    <div className="stack mono">
      {items.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  );
}

export function Status({ text, live }) {
  if (!text) return null;
  return <span className={`status mono ${live ? "is-live" : ""}`}>{text}</span>;
}

export function Jobs({ experience, education = [], limit }) {
  return (
    <div className="jobs">
      {experience.map((job) => (
        <article className="job" key={job.role + job.company} data-reveal>
          <div className="job-when mono">
            <strong>{job.company}</strong>
            {job.period}
            <br />
            {job.location}
          </div>
          <div>
            <h3>{job.role}</h3>
            <p className="job-summary">{job.summary}</p>
            <ul>
              {(limit ? job.points.slice(0, limit) : job.points).map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <Stack items={job.stack} />
          </div>
        </article>
      ))}

      {education.map((ed) => (
        <article className="job job-edu" key={ed.degree} data-reveal>
          <div className="job-when mono">
            <strong>{ed.school}</strong>
            {ed.period}
          </div>
          <div>
            <h3>{ed.degree}</h3>
            <p className="job-summary">{ed.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Skills({ groups }) {
  return (
    <div className="skills">
      {groups.map((g) => (
        <div className="skill-group" key={g.title} data-reveal>
          <h3 className="mono">
            <i className={g.icon}></i> {g.title}
          </h3>
          <p>{g.skills.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
