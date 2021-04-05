import React, { useState } from "react";
import styles from "./Sidebar.module.css";

const sections = [
  { id: 1, title: "Foo" },
  { id: 2, title: "Bar" },
  { id: 3, title: "Baz" },
];

const headerPadding = 3;
const headerHeight = 20;
const sectionBorder = 2;
const sectionFixedHeight = headerPadding * 2 + headerHeight + sectionBorder * 2;
const bodyHeight = window.innerHeight - sections.length * sectionFixedHeight;

interface SectionModel {
  id: number;
  title: string;
}

interface BodyProps {
  expanded: boolean;
}

function Body({ expanded }: BodyProps) {
  if (!expanded) {
    return null;
  }

  return (
    <div className={styles.body} style={{ height: bodyHeight }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus
      lacus, rutrum vel odio ut, congue condimentum mauris. Maecenas efficitur
      nec odio sed suscipit. Sed et dolor nec lectus sollicitudin mollis quis
      sit amet erat. Ut vestibulum ante id mattis placerat. Sed blandit arcu id
      mauris ullamcorper tempus. Sed posuere, est ut bibendum aliquet, arcu
      justo cursus elit, sit amet pulvinar ante lorem in libero. Donec
      pellentesque sapien non magna tempor laoreet. Interdum et malesuada fames
      ac ante ipsum primis in faucibus. Sed in nisl sit amet diam imperdiet
      egestas imperdiet et odio. Suspendisse lacinia urna odio, quis condimentum
      nisl fringilla non. Donec sit amet vestibulum est. Cras vulputate vel
      velit nec varius. Cras ac magna nec velit hendrerit semper eu ac ante.
      Mauris hendrerit pulvinar leo quis feugiat. Sed molestie volutpat ante
      eget pretium. In viverra tincidunt luctus. Donec leo neque, maximus vitae
      ante non, consequat iaculis nisi. Vestibulum pulvinar risus dignissim
      nulla imperdiet, in fermentum leo tempus. Sed ultrices tristique elit non
      condimentum. Cras eleifend nulla nec posuere varius. Quisque a ante magna.
      Quisque tempor posuere sodales. Nulla odio mauris, eleifend eu leo id,
      imperdiet dignissim sapien. Integer placerat risus non tortor tempor
      bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Fusce sollicitudin dapibus ante sed feugiat. Integer ornare, erat lacinia
      iaculis faucibus, ex orci varius magna, eget varius tortor nunc et purus.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus nec
      lacinia orci, eget venenatis augue. Nunc mi massa, tristique id augue
      suscipit, facilisis finibus neque. Ut cursus semper est, vel placerat nibh
      volutpat nec. Pellentesque vel pellentesque velit, in aliquet augue.
      Vestibulum pulvinar lorem tortor, interdum tincidunt turpis dignissim
      eget. Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas. Maecenas in dapibus eros, et eleifend mi. Morbi
      viverra dolor a nulla tristique vestibulum. Nunc nec lectus ipsum.
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
    <div
      className={styles.header}
      style={{ height: headerHeight, padding: headerPadding }}
      onClick={onClick}
    >
      {symbol} {title}
    </div>
  );
}

interface SectionProps {
  section: SectionModel;
  expanded: boolean;
  expand: () => void;
}

function Section({ section: { title }, expanded, expand }: SectionProps) {
  return (
    <div className={styles.section} style={{ borderWidth: sectionBorder }}>
      <Header title={title} expanded={expanded} onClick={expand} />
      <Body expanded={expanded} />
    </div>
  );
}

export function Sidebar() {
  const [expanded, setExpanded] = useState(1);

  return (
    <div className={styles.sidebar}>
      {sections.map((section) => {
        const { id } = section;

        return (
          <Section
            key={id}
            section={section}
            expanded={id === expanded}
            expand={() => setExpanded(id)}
          />
        );
      })}
    </div>
  );
}
