import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { HomeComponent } from "./features/home/home.component";
import { AboutUsComponent } from "./features/about-us/about-us.component";
import { CoursesComponent } from "./features/courses/courses.component";
import { FeaturesComponent } from "./features/features/features.component";
import { TestimonialsComponent } from "./features/testimonials/testimonials.component";
import { QuestionanswerComponent } from "./features/questionanswer/questionanswer.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { QuoteSliderComponent } from "./features/quote-slider/quote-slider.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, AboutUsComponent, CoursesComponent, FeaturesComponent, TestimonialsComponent, QuestionanswerComponent, FooterComponent, QuoteSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chess_app';
}
