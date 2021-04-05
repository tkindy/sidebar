import React, { useState } from "react";
import styles from "./Sidebar.module.css";

interface SectionModel {
  id: number;
  title: string;
  expanded: boolean;
}

interface BodyProps {
  expanded: boolean;
}

function Body({ expanded }: BodyProps) {
  if (!expanded) {
    return null;
  }

  return (
    <div className={styles.body}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit
      convallis magna, a convallis ipsum cursus et. Suspendisse blandit ante
      nulla, eu lacinia ligula egestas nec. Nam justo elit, congue ac dui ac,
      gravida cursus urna. Praesent eu ex sagittis, maximus lacus ac, ultrices
      nisl. Praesent lacinia lectus sed bibendum egestas. Vestibulum luctus
      vestibulum pretium. Aliquam faucibus accumsan neque vel auctor. Aliquam
      faucibus nisl in turpis porta, at molestie felis pharetra. Suspendisse at
      faucibus nisi. Nunc ut imperdiet ex. Donec purus massa, aliquam sit amet
      sagittis vitae, ullamcorper sit amet elit. Sed sem libero, vulputate
      viverra neque dapibus, ultrices bibendum nulla. Nullam faucibus eu nulla
      blandit commodo.
    </div>
  );
}

interface HeaderProps {
  title: string;
  expanded: boolean;
  onClick: () => void;
}

function Header({ title, expanded, onClick }: HeaderProps) {
  const symbol = expanded ? "-" : "+";

  return (
    <div className={styles.header} onClick={onClick}>
      {symbol} {title}
    </div>
  );
}

interface SectionProps {
  section: SectionModel;
  toggleExpanded: () => void;
}

function Section({
  section: { title, expanded },
  toggleExpanded,
}: SectionProps) {
  return (
    <div className={styles.section}>
      <Header title={title} expanded={expanded} onClick={toggleExpanded} />
      <Body expanded={expanded} />
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
    <div className={styles.sidebar}>
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
