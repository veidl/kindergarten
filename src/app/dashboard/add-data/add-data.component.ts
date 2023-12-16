import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
      name: ['', [Validators.required]],
      kindergardenId: ['', Validators.required],
      birthDate: [null, Validators.required],
    });
  }

  isFieldInvalid(field: string) {
    const formField = this.addChildForm.get(field);
    return formField.invalid && (formField.dirty || formField.touched);
  }

  onSubmit() {
    if (this.addChildForm.valid) {
      console.log(this.currentPage);
      console.log(this.pageSize);
      this.backendService.addChildData(
        this.addChildForm.value,
        this.currentPage,
        this.pageSize
      );
      this.addChildForm.reset();

      Object.keys(this.addChildForm.controls).forEach(key => {
        const control = this.addChildForm.get(key);
        control.setErrors(null);
      });
    }
  }
}
