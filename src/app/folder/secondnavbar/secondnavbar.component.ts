import { Component } from '@angular/core';

@Component({
  selector: 'app-secondnavbar',
  standalone: true,
  imports: [],
  templateUrl: './secondnavbar.component.html',
  styleUrl: './secondnavbar.component.css'
})
export class SecondnavbarComponent {
  isResponsive: boolean = false;

  toggleMenu() {
    this.isResponsive = !this.isResponsive;
  }}
