import { Component } from '@angular/core';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-kindergarden',
  templateUrl: './kindergarden.component.html',
  styleUrls: ['./kindergarden.component.scss'],
})
export class KindergardenComponent {
  constructor(public storeService: StoreService) {}
}
