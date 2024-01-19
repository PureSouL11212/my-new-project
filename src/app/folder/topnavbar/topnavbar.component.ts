import { Component } from '@angular/core';
import { SecondnavbarComponent } from '../secondnavbar/secondnavbar.component';
import { BodyComponent } from '../body/body.component';
@Component({
  selector: 'app-topnavbar',
  standalone: true,
  imports: [SecondnavbarComponent,BodyComponent],
  templateUrl: './topnavbar.component.html',
  styleUrl: './topnavbar.component.css'
})
export class TopnavbarComponent {

}
