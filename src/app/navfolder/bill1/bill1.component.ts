import { Component } from '@angular/core';
import { BurgerComponent } from '../../folder/burger/burger.component';

@Component({
  selector: 'app-bill1',
  standalone: true,
  imports: [BurgerComponent],
  templateUrl: './bill1.component.html',
  styleUrl: './bill1.component.css'
})
export class Bill1Component {
  billAmount = '';
}
