import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
 testimonials = [
    {
      parentName: 'Sanjay Shinde',
      childName: 'Guarav (Age 8)',
      quote: "Since joining ShunyoJay, Aryan's focus has improved dramatically. He loves the classes and is always excited to show me the new strategies he's learned. The coaches are fantastic!",
      rating: 5
    },
    {
      parentName: 'Priya Deshmukh',
      childName: 'Anvi (Age 10)',
      quote: "The combination of expert coaching and AI tools is brilliant. Diya's game has reached a new level, and she's gained so much confidence. Highly recommend for any child serious about chess.",
      rating: 5
    },
    {
      parentName: 'Mohan Joshi',
      childName: 'Chinmay (Age 9)',
      quote: "We were looking for a structured chess program, and this course exceeded our expectations. The curriculum is comprehensive, and the trainers are very patient. Kabir is now preparing for his first tournament!",
      rating: 5
    }
  ];
}
