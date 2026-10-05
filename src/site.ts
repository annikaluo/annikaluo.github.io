export const site = {
  name: 'Annika Luo',
  description:
    'Portfolio of Annika Luo, a fashion designer working at the intersection of fashion, sustainability and business.',
  email: 'luoannikary@gmail.com',
  linkedin: 'https://www.linkedin.com/in/annikaluo/',
  instagram: 'https://www.instagram.com/annika.luo/',
};

// The three threads of the index. Order here is the order of the tab stops.
export const categories = [
  { id: 'fashion', letter: 'A', label: 'Fashion' },
  { id: 'fine-arts', letter: 'B', label: 'Fine Arts' },
  { id: 'sustainability', letter: 'C', label: 'Sustainability' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export const levelOf = (id: CategoryId) => categories.findIndex((c) => c.id === id);
