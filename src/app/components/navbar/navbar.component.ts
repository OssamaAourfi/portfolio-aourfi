import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isOpen = false;
  isDarkMode = false;
  activeSection: string = 'home';
  hasShadow = false;
  isAnimating = false;
  menuIcon: string = '☰';
  toggleMenu() {
    if (this.isOpen) {
      this.isAnimating = true;
      this.menuIcon = '☰'; // رجع الأيقونة لمفتوحة
      setTimeout(() => {
        this.isOpen = false;
        this.isAnimating = false;
      }, 300);
    } else {
      this.isOpen = true;
      this.menuIcon = '✖'; // بدل الأيقونة لمغلقة
    }
  }
  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isOpen = false; // يغلق الموبايل menu بعد click
    }
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = [
      'home',
      'about',
      'skills',
      'projects',
      'resume',
      'contact',
    ];
    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
        }
      }
    }

    // shadow effect
    this.hasShadow = window.scrollY > 50;
  }
}
