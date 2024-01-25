import { Component } from '@angular/core';

@Component({
  selector: 'app-mainhomepage',
  standalone: true,
  imports: [],
  templateUrl: './mainhomepage.component.html',
  styleUrl: './mainhomepage.component.css'
})
export class MainhomepageComponent {
  images = [1, 2, 3].map((n) => `assets/slideshow/${n}.jpg`);

}
