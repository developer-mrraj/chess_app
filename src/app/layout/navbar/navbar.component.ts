import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isOpen = false;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  closeNavbar() {
    this.isOpen = false;
  }
}
