import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public currentPage: number = 1;
  public pageSize: number = 5;
  public showAddData = true;

  receiveMessage(newPageCount: number) {
    this.currentPage = newPageCount;
  }

  receivePageSize(newPageSize: number) {
    this.pageSize = newPageSize;
  }

  toggleButtonClicked(showAddData: boolean) {
    this.showAddData = showAddData;
  }
}
