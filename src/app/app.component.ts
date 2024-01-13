import { Component, OnInit } from '@angular/core';
import { BackendService } from './shared/backend.service';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private backendService: BackendService,
    private oneSignal: OneSignal
  ) {
    this.oneSignal.init({
      appId: '49d63dce-923d-44dd-aaf8-81ccb8d4e982',
    });
  }

  ngOnInit(): void {
    this.backendService.getKindergardens();
  }
}
