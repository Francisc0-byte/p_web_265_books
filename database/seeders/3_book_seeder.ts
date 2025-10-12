import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Book from '#models/book'
export default class BookSeeder extends BaseSeeder {
  public async run() {
    await Book.createMany([
      {
        title: 'Le Petit Prince',
        numberOfPages: 96,
        pdfLink: 'https://example.com/le-petit-prince.pdf',
        abstract: 'Un conte poétique et philosophique...',
        editor: 'Éditions Gallimard',
        editionYear: 1943,
        imagePath: '/images/le-petit-prince.jpg',
        categoryId:1,
        writerId:1,
        userId:1

      },
      {
        title: '1984',
        numberOfPages: 328,
        pdfLink: 'https://example.com/1984.pdf',
        abstract: 'Un roman dystopique sur la surveillance et le totalitarisme...',
        editor: 'Secker & Warburg',
        editionYear: 1949,
        imagePath: '/images/1984.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Les Misérables',
        numberOfPages: 1463,
        pdfLink: 'https://example.com/les-miserables.pdf',
        abstract: 'Une fresque sociale de Victor Hugo...',
        editor: 'A. Lacroix, Verboeckhoven & Cie',
        editionYear: 1862,
        imagePath: '/images/les-miserables.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Le Comte de Monte-Cristo',
        numberOfPages: 1248,
        pdfLink: 'https://example.com/monte-cristo.pdf',
        abstract: 'Roman d’aventure et de vengeance...',
        editor: 'Penguin Classics',
        editionYear: 1844,
        imagePath: '/images/monte-cristo.jpg',
        categoryId:1,
        writerId:1,
        userId:1

      },
      {
        title: 'Cyrano de Bergerac',
        numberOfPages: 120,
        pdfLink: 'https://example.com/cyrano.pdf',
        abstract: 'Une pièce de théâtre célèbre...',
        editor: 'Éditions de la Pléiade',
        editionYear: 1897,
        imagePath: '/images/cyrano.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Madame Bovary',
        numberOfPages: 432,
        pdfLink: 'https://example.com/madame-bovary.pdf',
        abstract: 'Roman réaliste sur la vie et les désillusions...',
        editor: 'Michel Lévy Frères',
        editionYear: 1856,
        imagePath: '/images/madame-bovary.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Les Fleurs du mal',
        numberOfPages: 180,
        pdfLink: 'https://example.com/fleurs-du-mal.pdf',
        abstract: 'Poèmes de Charles Baudelaire...',
        editor: 'Poulet-Malassis et de Broise',
        editionYear: 1857,
        imagePath: '/images/fleurs-du-mal.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Germinal',
        numberOfPages: 592,
        pdfLink: 'https://example.com/germinal.pdf',
        abstract: 'Roman naturaliste d’Émile Zola...',
        editor: 'Charpentier',
        editionYear: 1885,
        imagePath: '/images/germinal.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'La Peste',
        numberOfPages: 308,
        pdfLink: 'https://example.com/la-peste.pdf',
        abstract: 'Roman philosophique d’Albert Camus...',
        editor: 'Gallimard',
        editionYear: 1947,
        imagePath: '/images/la-peste.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Candide',
        numberOfPages: 140,
        pdfLink: 'https://example.com/candide.pdf',
        abstract: 'Conte philosophique de Voltaire...',
        editor: 'Éditions Garnier',
        editionYear: 1759,
        imagePath: '/images/candide.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Les Trois Mousquetaires',
        numberOfPages: 700,
        pdfLink: 'https://example.com/mousquetaires.pdf',
        abstract: 'Roman d’aventures d’Alexandre Dumas...',
        editor: 'Perrin',
        editionYear: 1844,
        imagePath: '/images/mousquetaires.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Le Rouge et le Noir',
        numberOfPages: 576,
        pdfLink: 'https://example.com/rouge-noir.pdf',
        abstract: 'Roman psychologique de Stendhal...',
        editor: 'A. Levavasseur',
        editionYear: 1830,
        imagePath: '/images/rouge-noir.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Notre-Dame de Paris',
        numberOfPages: 940,
        pdfLink: 'https://example.com/notre-dame.pdf',
        abstract: 'Roman historique de Victor Hugo...',
        editor: 'Gosselin',
        editionYear: 1831,
        imagePath: '/images/notre-dame.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'La Chartreuse de Parme',
        numberOfPages: 432,
        pdfLink: 'https://example.com/chartreuse.pdf',
        abstract: 'Roman de Stendhal sur l’Italie...',
        editor: 'Le Normant',
        editionYear: 1839,
        imagePath: '/images/chartreuse.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Le Père Goriot',
        numberOfPages: 352,
        pdfLink: 'https://example.com/pere-goriot.pdf',
        abstract: 'Roman réaliste de Balzac...',
        editor: 'Werdet',
        editionYear: 1835,
        imagePath: '/images/pere-goriot.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Bel-Ami',
        numberOfPages: 400,
        pdfLink: 'https://example.com/bel-ami.pdf',
        abstract: 'Roman de Maupassant sur la société parisienne...',
        editor: 'Paul Ollendorff',
        editionYear: 1885,
        imagePath: '/images/bel-ami.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Les Misérables (abrégé)',
        numberOfPages: 500,
        pdfLink: 'https://example.com/les-miserables-abrige.pdf',
        abstract: 'Version abrégée du chef-d’œuvre de Victor Hugo...',
        editor: 'Hachette',
        editionYear: 2020,
        imagePath: '/images/les-miserables-abrige.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'La Condition Humaine',
        numberOfPages: 350,
        pdfLink: 'https://example.com/condition-humaine.pdf',
        abstract: 'Roman de Malraux sur la révolution chinoise...',
        editor: 'Gallimard',
        editionYear: 1933,
        imagePath: '/images/condition-humaine.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Voyage au centre de la Terre',
        numberOfPages: 183,
        pdfLink: 'https://example.com/voyage-terre.pdf',
        abstract: 'Roman d’aventures de Jules Verne...',
        editor: 'Pierre-Jules Hetzel',
        editionYear: 1864,
        imagePath: '/images/voyage-terre.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
      {
        title: 'Le Horla',
        numberOfPages: 70,
        pdfLink: 'https://example.com/horla.pdf',
        abstract: 'Nouvelle fantastique de Maupassant...',
        editor: 'Gil Blas',
        editionYear: 1887,
        imagePath: '/images/horla.jpg',
        categoryId:1,
        writerId:1,
        userId:1
      },
    ])
  }
}
