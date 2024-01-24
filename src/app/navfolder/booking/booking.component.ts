import { Component } from '@angular/core';
import { BodyComponent } from '../../folder/body/body.component';
import { BurgerComponent } from '../../folder/burger/burger.component';
import { FooterComponent } from '../../footer/fotter.component';
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [BodyComponent,BurgerComponent,FooterComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

}
