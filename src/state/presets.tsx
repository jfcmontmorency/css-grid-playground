import { deepClone } from '@/utils'
import { ReactNode } from 'react'
import { PlaygroundState } from './types'

type GridPreset = {
  name: string
  description?: ReactNode
  createState: () => PlaygroundState
}

function createGrids(numGrids: number, numItems: number): PlaygroundState['grids'] {
  return deepClone(
    Array(numGrids).fill({
      items: Array(numItems).fill({}),
    }),
  )
}

export const gridPresets: GridPreset[] = [
  {
    name: 'Modèle : Basique',
    description: "Ceci est la démo par défaut. Il s'agit d'une double grille avec 6 éléments.",
    createState: () => ({
      wrapperStyles: 'display: block;',
      gridStyles: `display: grid;
      padding: 0.5rem;
      background: var(--violet-1);
      border: 2px solid var(--violet-5);
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0.5rem;`,
      gridItemStyles: `background: var(--violet-2);
      border: 2px solid var(--violet-5);
      color: var(--violet-8);`,
      grids: createGrids(1, 6),
    }),
  },
  {
    name: 'Mise en page avec barre latérale',
    description: 'Mise en page typique avec une barre latérale gauche et un contenu principal.',
    createState: () => ({
      wrapperStyles: 'display: block;',
      gridStyles: `display: grid;
      gap: 0.5rem;
      padding: 0.5rem;
      grid-template-columns: minmax(120px, 25%) 1fr;
      background: var(--blue-1);
      border: 2px solid var(--blue-5);`,
      gridItemStyles: `background: var(--blue-2);
      border: 2px solid var(--blue-5);
      color: var(--blue-8);`,
      grids: createGrids(1, 2),
    }),
  },
  {
    name: 'Mise en page « Holy Grail »',
    description: `Mise en page typique avec en-tête, contenu principal et pied de page.
      Changez la hauteur du conteneur à 100vh pour cibler la hauteur de la page.`,
    createState: () => ({
      wrapperStyles: `height: 300px;
      `,
      gridStyles: `display: grid;
      gap: 0.5rem;
      padding: 0.5rem;
      height: 100%;
      grid-template-rows: auto 1fr auto;
      background: var(--indigo-1);
      border: 2px solid var(--indigo-5);
      `,
      gridItemStyles: `background: var(--indigo-2);
      border: 2px solid var(--indigo-5);
      color: var(--indigo-8);
      min-width: 120px;`,
      grids: createGrids(1, 3),
    }),
  },

  {
    name: 'Mise en page « Holy Grail » II',
    description: `Une mise en page avec en-tête, contenu principal, barre latérale, aside et pied de page.
      Cette démo montre aussi comment appliquer des styles individuels à chaque élément enfant.`,
    createState: () => ({
      wrapperStyles: `padding: 1rem;
      background: var(--pink-1);
      border: 2px solid var(--pink-5);`,
      gridStyles: `display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 5fr 2.5fr;
      grid-template-rows: 1fr 5fr 1fr;
      grid-template-areas:
      "header header header"
      "sidebar main aside"
      "sidebar footer footer";`,
      gridItemStyles: `background: var(--pink-2);
      border: 2px solid var(--pink-5);
      color: var(--pink-8);`,
      grids: [
        {
          items: [
            {
              styles: 'grid-area: header;',
              text: 'En-tête',
            },
            {
              styles: 'grid-area: sidebar;',
              text: 'Barre latérale',
            },
            {
              styles: 'grid-area: main;',
              text: 'Principal',
            },
            {
              styles: 'grid-area: aside;',
              text: 'Aside',
            },
            {
              styles: 'grid-area: footer;',
              text: 'Pied de page',
            },
          ],
        },
      ],
    }),
  },
  {
    name: 'Contenu centré',
    description: 'Le contenu est entièrement centré, à la fois horizontalement et verticalement.',
    createState: () => ({
      wrapperStyles: `display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;`,
      gridStyles: `display: grid;
      place-content: center;
      place-items: center;
      gap: 1ch;
      padding: 0.5rem;
      width: 20%;
      height: 150px;
      background: var(--green-1);
      border: 2px solid var(--green-5);`,
      gridItemStyles: `background: var(--green-2);
      border: 2px solid var(--green-5);
      color: var(--green-8);
      padding: 1rem 2rem;`,
      grids: createGrids(1, 1),
    }),
  },
  {
    name: 'Technique RAM',
    description: `Technique RAM : Repeat, Auto, Minmax. Nous utilisons aussi 'aspect-ratio' pour
    garder des proportions d'éléments cohérentes sur toutes les tailles d'écran.`,
    createState: () => ({
      wrapperStyles: `display: block;
      `,
      gridStyles: `display: grid;
      gap: 0.5rem;
      padding: 0.5rem;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      background: var(--gray-2);
      border: 2px solid var(--gray-5);
      border-radius: 0.5rem;`,
      gridItemStyles: `background: var(--gray-4);
      color: var(--gray-7);
      border-radius: 0.5rem;
      border: 2px solid var(--gray-5);
      padding: 1rem;
      aspect-ratio: 3/2;`,
      grids: createGrids(1, 10),
    }),
  },
  {
    name: 'Le calendrier',
    description: 'Une grille de 7 colonnes, comme les jours de la semaine dans un calendrier.',
    createState: () => ({
      wrapperStyles: `display: block;
      padding: 1rem;`,
      gridStyles: `display: grid;
      gap: 0.5rem;
      padding: 0.5rem;
      width: 400px;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(5, 1fr);
      background: var(--cyan-1);
      border: 2px solid var(--cyan-5);`,
      gridItemStyles: `background: var(--cyan-2);
      border: 2px solid var(--cyan-5);
      color: var(--cyan-8);
      aspect-ratio: 1;`,
      grids: createGrids(1, 35),
    }),
  },
]
