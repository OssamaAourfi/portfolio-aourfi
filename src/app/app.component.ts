import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./sections/contact/contact.component";
import { ResumeComponent } from "./sections/resume/resume.component";
import { FooterComponent } from "./sections/footer/footer.component";
import { SkillsComponent } from "./sections/skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, AboutComponent, ProjectsComponent, CommonModule, ContactComponent, ResumeComponent, FooterComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
