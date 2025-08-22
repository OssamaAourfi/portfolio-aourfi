import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'HR Management App',
      description:
        'Complete HR management system with leave module, roles, etc.',
      image: '/assets/projects/rh-management.png',
      technologies: ['Symfony', 'Angular'],
      link: 'https://github.com/OssamaAourfi/gestion_rh_frontend',
    },
    {
      id: 2,
      title: 'Todo App',
      description: 'Simple Todo app with CRUD and JWT authentication.',
      image: '/assets/projects/todo-app.png',
      technologies: ['Symfony', 'Angular'],
      link: 'https://github.com/OssamaAourfi/TodoList',
    },
    {
      id: 3,
      title: 'Home Design Website',
      description:
        'Exceptional interior design services for your home built with Angular & Tailwind.',
      image: '/assets/projects/az-design.png',
      technologies: ['Html', 'CSS', 'JS'],
      link: 'https://github.com/OssamaAourfi/az-design',
    },
  ];

  techs: string[] = ['All', 'Symfony', 'Angular'];
  filter: string = 'All';

  get filteredProjects(): Project[] {
    if (this.filter === 'All') {
      return this.projects;
    }
    return this.projects.filter((p) => p.technologies.includes(this.filter));
  }

  setFilter(tech: string) {
    this.filter = tech;
  }
}

