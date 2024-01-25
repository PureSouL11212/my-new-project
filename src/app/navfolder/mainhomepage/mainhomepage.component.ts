import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mainhomepage',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './mainhomepage.component.html',
  styleUrl: './mainhomepage.component.css'
})
export class MainhomepageComponent {
  images = [1, 2, 3].map((n) => `assets/slideshow/${n}.jpg`);

}
