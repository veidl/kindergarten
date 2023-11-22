import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public title: string = 'Kindergarden-App';
  public imagePath: string = './../assets/images/kindergarden.jpg';

  constructor() {}
}
