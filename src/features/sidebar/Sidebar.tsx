import React, { useState } from "react";
import styles from "./Sidebar.module.css";

interface SectionModel {
  id: number;
  title: string;
  expanded: boolean;
}

interface HeaderProps {
  title: string;
  onClick: () => void;
}

function Header({ title, onClick }: HeaderProps) {
  return (
    <div className={styles.header} onClick={onClick}>
      {title}
    </div>
  );
}

interface SectionProps {
  section: SectionModel;
  toggleExpanded: () => void;
}

function Section({ section: { title }, toggleExpanded }: SectionProps) {
  return (
    <div>
      <Header title={title} onClick={toggleExpanded} />
    </div>
  );
}

export function Sidebar() {
  const [sections, setSections] = useState<SectionModel[]>([
    { id: 1, title: "Foo", expanded: false },
    { id: 2, title: "Bar", expanded: true },
    { id: 3, title: "Baz", expanded: false },
  ]);

  const toggleExpanded = (id: number) => {
    setSections(
      sections.map((section) => {
        if (section.id === id) {
          return { ...section, expanded: !section.expanded };
        }

        return section;
      })
    );
  };

  return (
    <div style={{ width: "250px" }}>
      {sections.map((section) => {
        const { id } = section;

        return (
          <Section
            key={id}
            section={section}
            toggleExpanded={() => toggleExpanded(id)}
          />
        );
      })}
    </div>
  );
}
