import { categories } from './categories';

export interface Colorsheet {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  thumbnailUrl: string;
  tags: string[];
  category: string;
  featured?: boolean;
}

export const colorsheets: Colorsheet[] = [
  {
    id: 'star-wars-christmas',
    title: 'Star Wars Christmas Adventure',
    description: 'Join your favorite Star Wars characters in a festive holiday adventure. Perfect for young Padawans and Jedi Masters alike!',
    pdfUrl: '/pdfs/star-wars-christmas.pdf',
    thumbnailUrl: '/thumbnails/star-wars-christmas.jpg',
    tags: ['star wars', 'christmas', 'holiday', 'movies'],
    category: 'star-wars-christmas',
    featured: true
  },
  {
    id: 'nature-mandala',
    title: 'Nature Mandala',
    description: 'A beautiful mandala design inspired by natural elements like leaves and flowers.',
    pdfUrl: '/pdfs/nature-mandala.pdf',
    thumbnailUrl: '/thumbnails/nature-mandala.jpg',
    tags: ['mandala', 'nature', 'relaxing'],
    category: 'other'
  },
  {
    id: 'ocean-life',
    title: 'Ocean Life',
    description: 'Dive into an underwater world with various sea creatures to color.',
    pdfUrl: '/pdfs/ocean-life.pdf',
    thumbnailUrl: '/thumbnails/ocean-life.jpg',
    tags: ['ocean', 'animals', 'underwater'],
    category: 'other'
  }
];