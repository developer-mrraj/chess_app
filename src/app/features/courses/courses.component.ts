import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  intro = {
    title: 'Our Courses',
    subtitle: 'Master the game with our comprehensive, professional chess curriculum.',
    benefitsTitle: 'What Our Course Will Help Your Child With:'
  };

  benefits = [
    { 
      icon: 'bi bi-chess-king', 
      title: 'Strategic Thinking', 
      color: 'primary', 
      gradientBg: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' 
    },
    { 
      icon: 'bi bi-chess-queen', 
      title: 'IQ & Memory Improvement', 
      color: 'secondary', 
      gradientBg: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)' 
    },
    { 
      icon: 'bi bi-chess-knight', 
      title: 'Problem-Solving Skills', 
      color: 'accent', 
      gradientBg: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' 
    },
    { 
      icon: 'bi bi-chess-bishop', 
      title: 'Controlling the Game', 
      color: 'highlight', 
      gradientBg: 'linear-gradient(135deg, #fff0f0 0%, #ffcccc 100%)' 
    },
    { 
      icon: 'bi bi-chess-rook', 
      title: 'Playing Against Time', 
      color: 'primary', 
      gradientBg: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)' 
    },
    { 
      icon: 'bi bi-chess-pawn', 
      title: 'Champion Game Analysis', 
      color: 'secondary', 
      gradientBg: 'linear-gradient(135deg, #fffde7 0%, #fff9c4 100%)' 
    },
  ];


  courses = [
    {
      title: 'Beginner Fundamentals',
      highlights: [
        'Basic & Advanced Moves',
        'Start, Middle & End Game',
        'Chess Notations & Timers',
        'Understanding Positional Play'
      ],
      gradientBg: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
      color: 'primary',
      cta: 'Enroll Now'
    },
    {
      title: 'Tactical & Strategic Play',
      highlights: [
        '3000+ Chess Puzzles',
        'Special Tactical Moves (En passant, Fork, Pin, Double attack)',
        'Skills of Attack, Defense & Sacrifice',
        'Mind Game Strategies'
      ],
      gradientBg: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
      color: 'secondary',
      cta: 'Enroll Now'
    },
    {
      title: 'Openings & Game Formats',
      highlights: [
        'Popular Openings (Sicilian, Ruy Lopez, Dutch, etc.)',
        'Blitz, Rapid & Long Token Games',
        'Games with System & Chess Apps',
        'Tournament Participation'
      ],
      gradientBg: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
      color: 'accent',
      cta: 'Enroll Now'
    },
  ];
}
