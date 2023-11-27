import { Component, OnInit } from '@angular/core';
import { BackendService } from './shared/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.getKindergardens();
  }
}
