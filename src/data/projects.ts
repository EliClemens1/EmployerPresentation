export interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
}

export const projects: Project[] = [
  {
    title: 'Zotarian Escape',
    description:
      '2D action game built with Godot and C# featuring enemies, bosses, upgrades, and progression.',
    technologies: ['C#', 'Godot', 'Git'],
    github: 'https://github.com/EliClemens/ZotarianEscape',
  },

  {
    title: 'Artist Portfolio',
    description: 'Vue and Firebase full-stack application for managing and displaying artwork.',
    technologies: ['Vue', 'Firebase', 'JavaScript'],
    github: 'https://github.com/EliClemens1/ArtPortfolio',
  },
]
