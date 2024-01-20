import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from "./folder/my-component/my-component.component";
import { TopnavbarComponent } from './folder/topnavbar/topnavbar.component';
import { SecondnavbarComponent } from './folder/secondnavbar/secondnavbar.component';
import { BodyComponent } from './folder/body/body.component';
import { TestbodyComponent } from './folder/testbody/testbody.component';
import { LoginpageComponent } from './folder/loginpage/loginpage.component';
import { FooterComponent } from './footer/fotter.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,TestbodyComponent,FooterComponent, MyComponentComponent ,BodyComponent,LoginpageComponent,TopnavbarComponent, SecondnavbarComponent ]
})
export class AppComponent {
  title = 'my-new-project';
}
