import { getCollection, type CollectionEntry } from 'astro:content';
import { levelOf } from '../site';

export type Project = CollectionEntry<'projects'>;

/** Index order: newest year first; inside a year, by thread (A, B, C), then by month. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', (p) => !p.data.archived);
  return all.sort(
    (a, b) =>
      b.data.year - a.data.year ||
      levelOf(a.data.category) - levelOf(b.data.category) ||
      a.data.month - b.data.month,
  );
}

export function byYear(projects: Project[]) {
  const years = new Map<number, Project[]>();
  for (const p of projects) years.set(p.data.year, [...(years.get(p.data.year) ?? []), p]);
  return [...years.entries()];
}

export const range = (n: number) => Array.from({ length: n }, (_, i) => i);
