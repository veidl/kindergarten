import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kindergarden } from './interfaces/Kindergarden';
import { StoreService } from './store.service';
import { Child, ChildResponse } from './interfaces/Child';
import { SpinnerService } from './spinner.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(
    private http: HttpClient,
    private storeService: StoreService,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar
  ) {}

  public getKindergardens() {
    this.spinnerService.show();
    this.http
      .get<Kindergarden[]>('http://localhost:5000/kindergardens')
      .subscribe({
        next: data => {
          this.storeService.kindergardens = data;
        },
        complete: () => {
          this.spinnerService.hide();
        },
      });
  }

  public getChildren(
    page: number,
    size: number,
    sort?: string,
    kindergartenId?: number
  ) {
    this.spinnerService.show();
    let queryParams = [`_page=${page}`, `_limit=${size}`];

    if (kindergartenId) {
      queryParams.push(`kindergardenId=${kindergartenId}`);
    }

    if (sort) {
      const [sortField, sortOrder] = sort.split(',');
      if (sortField && sortOrder) {
        queryParams.push(`_sort=${sortField}`, `_order=${sortOrder}`);
      }
    }

    const queryUrl = `http://localhost:5000/childs?_expand=kindergarden&${queryParams.join(
      '&'
    )}`;

    this.http
      .get<ChildResponse[]>(queryUrl, { observe: 'response' })
      .subscribe({
        next: data => {
          this.storeService.children = data.body!;
          this.storeService.childrenTotalCount = Number(
            data.headers.get('X-Total-Count')
          );
        },
        complete: () => {
          this.spinnerService.hide();
        },
      });
  }

  public addChildData(child: Child, page: number, size: number) {
    this.spinnerService.show();
    child.registerDate = new Date().toISOString();
    this.http.post('http://localhost:5000/childs', child).subscribe({
      next: () => {
        this.snackBar.open('Kind wurde registriert.', 'OK', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });
        this.getChildren(page, size);
      },
      complete: () => {
        this.spinnerService.hide();
      },
    });
  }

  public deleteChildData(childId: string, page: number, size: number) {
    this.spinnerService.show();
    this.http.delete(`http://localhost:5000/childs/${childId}`).subscribe({
      next: () => {
        this.getChildren(page, size);
      },
      complete: () => {
        this.spinnerService.hide();
      },
    });
  }
}
