import type { ReactNode } from 'react';
import GlossaryTerm from '../components/GlossaryTerm';
import { GLOSSARY } from '../data/glossary';

interface Match {
  start: number;
  end: number;
  text: string;
  definition: string;
}

export function withGlossary(text: string): ReactNode {
  const matches: Match[] = [];

  for (const { match, definition } of GLOSSARY) {
    const re = new RegExp(match.source, match.flags.includes('g') ? match.flags : match.flags + 'g');
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      const start = m.index;
      const end = start + m[0].length;
      const overlaps = matches.some((existing) => start < existing.end && end > existing.start);
      if (!overlaps) {
        matches.push({ start, end, text: m[0], definition });
      }
    }
  }

  if (matches.length === 0) return text;

  matches.sort((a, b) => a.start - b.start);

  const nodes: ReactNode[] = [];
  let cursor = 0;
  matches.forEach((m, i) => {
    if (m.start > cursor) nodes.push(text.slice(cursor, m.start));
    nodes.push(<GlossaryTerm key={i} term={m.text} definition={m.definition} />);
    cursor = m.end;
  });
  if (cursor < text.length) nodes.push(text.slice(cursor));

  return nodes;
}
