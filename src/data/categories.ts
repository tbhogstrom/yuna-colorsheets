export interface Category {
  id: string;
  title: string;
  description: string;
}

export const categories: Record<string, Category> = {
  'star-wars-christmas': {
    id: 'star-wars-christmas',
    title: 'Star Wars Christmas Coloring Pages',
    description: 'Festive Star Wars themed coloring pages perfect for the holiday season'
  },
  other: {
    id: 'other',
    title: 'Other Coloring Pages',
    description: 'A variety of beautiful coloring pages for all ages and interests'
  }
};