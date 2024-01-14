import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  room: string; 
  
  constructor() {
    this.room = "example room"; 
  }
  currentDate: string = new Date().toDateString(); 
  availableRooms: number[] = [10, 12, 15, 14, 11, 13, 16]; 

  proceed() {
    // Add your logic for the proceed action here
  }
}
