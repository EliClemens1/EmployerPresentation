export interface Project {
    title: string
    description: string
    technologies: string[]
    github: string
    URL: string
  }
  
  export const projects: Project[] = [
    {
      title: 'Zotarian Escape',
      description:
        '2D action game built with Godot and C# featuring enemies, bosses, upgrades, and progression.',
      technologies: ['C#', 'Godot', 'Git'],
      github: 'https://github.com/EliClemens/ZotarianEscape',
      URL: "N/A",
    },
  
    {
      title: 'Artist Portfolio',
      description:
        'Vue and Firebase application for managing and displaying artwork.',
      technologies: ['Vue', 'Firebase', 'JavaScript'],
      github: 'https://github.com/EliClemens1/ArtPortfolio',
      URL: "https://artist-s-portfolio.web.app/",
    },
    {
      title: 'EmployerPresentation',
      description:
        'Vue.js web application to display my current skills and accomplishments.',
        technologies: ['HTML', 'CSS', 'Vue.js'],
        github: 'https://github.com/EliClemens1/EmployerPresentation.git',
        URL: 'N/A'
    }
  ]