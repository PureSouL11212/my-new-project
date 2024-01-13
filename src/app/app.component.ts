import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from "./folder/my-component/my-component.component";
import { TopnavbarComponent } from './folder/topnavbar/topnavbar.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MyComponentComponent ,TopnavbarComponent ]
})
export class AppComponent {
  title = 'my-new-project';
}
