import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import { PageEvent } from '@angular/material/paginator';
import { SpinnerService } from '../../shared/spinner.service';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit, AfterViewInit {
  constructor(
    public storeService: StoreService,
    private backendService: BackendService,
    public spinnerService: SpinnerService
  ) {}

  @ViewChild(MatSort) sort!: MatSort;
  @Input() pageSize!: number;
  @Input() currentPage!: number;
  @Output() selectPageEvent = new EventEmitter<number>();
  @Output() selectPageSizeEvent = new EventEmitter<number>();
  public displayedColumns: string[] = [
    'name',
    'kindergarden',
    'address',
    'age',
    'birthdate',
    'registerDate',
    'unregister',
  ];
  private sortState: string | undefined;
  private sortDirection: string | undefined;
  selectedKindergartenId: number | undefined;

  ngOnInit(): void {
    this.loadKindergartens();
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe((sortState: Sort) => {
      this.sortState = sortState.active;
      this.sortDirection = sortState.direction;
      this.loadKindergartens();
    });
  }

  filterByKindergarten() {
    this.loadKindergartens();
  }

  getAge(birthDate: string) {
    let today = new Date();
    let birthDateTimestamp = new Date(birthDate);
    let age = today.getFullYear() - birthDateTimestamp.getFullYear();
    let m = today.getMonth() - birthDateTimestamp.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateTimestamp.getDate())) {
      age--;
    }
    return age;
  }

  selectPageV2(event: PageEvent) {
    let currentPage = event.pageIndex + 1;
    let pageSize = event.pageSize;
    this.selectPageEvent.emit(currentPage);
    this.selectPageSizeEvent.emit(pageSize);
    this.loadKindergartens();
  }

  public cancelRegistration(childId: string) {
    this.backendService.deleteChildData(
      childId,
      this.currentPage,
      this.pageSize
    );
  }

  private loadKindergartens() {
    let sortString: string | undefined;
    if (this.sortState && this.sortDirection) {
      sortString = `${this.sortState},${this.sortDirection}`;
    }

    this.backendService.getChildren(
      this.currentPage,
      this.pageSize,
      sortString,
      this.selectedKindergartenId
    );
  }
}
