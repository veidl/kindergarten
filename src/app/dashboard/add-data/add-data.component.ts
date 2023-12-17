import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';
import { SpinnerService } from '../../shared/spinner.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss'],
})
export class AddDataComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    public storeService: StoreService,
    public backendService: BackendService,
    public spinnerService: SpinnerService
  ) {}

  public addChildForm: any;
  @Input() currentPage!: number;
  @Input() pageSize!: number;

  ngOnInit(): void {
    this.addChildForm = this.formbuilder.group({
      name: [
        '',
        [
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
      kindergardenId: ['', Validators.required],
      birthDate: [null, this.beforeTodayValidator()],
    });
  }

  private beforeTodayValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time part for today's date
      const selectedDate = new Date(control.value);

      if (control.value === null) {
        return { noDateSelected: true };
      }
      if (selectedDate >= today) {
        return { dateBeforeToday: true };
      }
      return null;
    };
  }

  onSubmit() {
    if (this.addChildForm.valid) {
      this.backendService.addChildData(
        this.addChildForm.value,
        this.currentPage,
        this.pageSize
      );
      this.addChildForm.reset();
    }
  }
}
