import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  aboutIntro = {
    title: 'About Us',
    subtitle: 'ShunyoJay AI Pvt Ltd is a pioneer in professional chess education for children.',
    philosophyTitle: 'Our Philosophy: Play, Learn, Conquer',
    philosophyDesc: `At ShunyoJay AI Pvt Ltd, we believe that chess is more than just a game—it's a powerful tool for cognitive development. 
    Our mission is to provide a fully professional and engaging learning experience that helps children not only master the game 
    but also develop essential life skills like strategic thinking, problem-solving, and patience. We take kids on a journey from basics 
    to advanced skills, building a strong foundation for future success.`,
  };

  features = [
    {
      icon: 'bi bi-robot',
      title: 'AI & Bot  Games',
      desc: 'We integrate modern AI and bot technology to provide personalized, interactive training sessions that adapt to your child\'s pace.',
      colorClass: 'primary',
      gradientBg: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)'
    },
    {
      icon: 'bi bi-person-bounding-box',
      title: 'Expert-Led Classes',
      desc: 'Our students learn from a union of the best minds in chess, with guidance from experienced professionals and expert visits.',
      colorClass: 'secondary',
      gradientBg: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)'
    },
    {
      icon: 'bi bi-trophy-fill',
      title: 'Tournament Preparation',
      desc: 'Comprehensive guidance for FIDE, AICF, and State-level tournament registration and participation.',
      colorClass: 'accent',
      gradientBg: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Guaranteed Growth',
      desc: 'Program designed to deliver valid course completion certificate and equip students with essential skills.',
      colorClass: 'highlight',
      gradientBg: 'linear-gradient(135deg, #ffe0b2 0%, #ffcc80 100%)'
    }
  ];

  team = [
    {
      name: 'Bhasham',
      role: 'Founder & Instructor',
      desc: '(Ex-Govt. Official, B.Tech)',
      icon: 'bi bi-person-fill',
      colorClass: 'primary'
    },
    {
      name: 'Raj',
      role: 'Co-Founder & Tech Head',
      desc: '(B.Tech, AI/ML Techie)',
      icon: 'bi bi-person-fill',
      colorClass: 'primary'
    }
  ];
}
