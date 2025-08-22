import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  poste: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  experiences: Experience[] = [
    {
      poste: 'Stage Full Stack Developer',
      company: 'Proxisoft',
      startDate: 'Jan 2025',
      endDate: 'Mars 2025',
      description:
        'Developed web applications using Symfony and Angular, including project management and HR modules.',
    },
    {
      poste: 'Stage Full Stack Developer',
      company: 'TradeLine Solutions',
      startDate: 'Jun 2024',
      endDate: 'Seprembre 2024',
      description: 'Developed web applications using  ReactJs, including project Seller Car. ',
    },
  ];
}
