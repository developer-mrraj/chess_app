import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  intro = {
    title: 'Why Choose Us?',
    subtitle: "Discover the unique advantages that make our program the best choice for your child's chess journey."
  };

  advantages = [
    {
      icon: 'bi bi-person-workspace',
      iconColor: 'primary',
      gradientBg: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
      title: 'Expert Instruction',
      description: 'Your child will learn from a union of the best minds in chess, including experienced professionals and certified coaches who are passionate about teaching.'
    },
    {
      icon: 'bi bi-laptop',
      iconColor: 'secondary',
      gradientBg: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
      title: 'Cutting-Edge AI Technology',
      description: 'We use advanced AI and bot technology to create a modern, interactive, and personalized learning experience that is both fun and effective.'
    },
    {
      icon: 'bi bi-trophy-fill',
      iconColor: 'accent',
      gradientBg: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
      title: 'Tournament Preparation',
      description: 'We provide full guidance for FIDE, AICF, and State-level registration, preparing students to compete in local and national tournaments with confidence.'
    },
    {
      icon: 'bi bi-heart-fill',
      iconColor: 'highlight',
      gradientBg: 'linear-gradient(135deg, #fff0f0 0%, #ffcccc 100%)',
      title: 'Holistic Growth',
      description: 'Beyond chess, our course helps kids develop crucial life skills like strategic thinking, discipline, and patience, essential for academic and personal success.'
    },
    {
      icon: 'bi bi-award-fill',
      iconColor: 'primary',
      gradientBg: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
      title: 'Valid Certification',
      description: 'Upon successful completion, students receive a valid course completion certificate, a testament to their dedication and a stepping stone for future opportunities.'
    },
    {
      icon: 'bi bi-puzzle-fill',
      iconColor: 'secondary',
      gradientBg: 'linear-gradient(135deg, #fffde7 0%, #fff9c4 100%)',
      title: 'Fun & Engaging Environment',
      description: 'Our classes are designed to be fun and interactive, keeping kids motivated and excited about learning chess. Limited admissions ensure personalized attention.'
    }
  ];
}
