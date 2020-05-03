import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { ToasterService } from '../../../shared/services/toaster.service';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  formAddBusiness: FormGroup
  fb: FormBuilder = new FormBuilder();
  loading: any = {};
  constructor(
    private api: ApiService,
    private toaster: ToasterService,

  ) { }

  ngOnInit(): void {
    this.initFormAddBusiness();
  }

  initFormAddBusiness(): void {
    this.formAddBusiness = this.fb.group({
      business_name: ['', Validators.required],
      business_location: ['', Validators.required],
    })
  }

  async submitFormAddBusiness() {
    if (this.formAddBusiness.invalid) {
      this.formAddBusiness.markAllAsTouched();
      return;
    }

    let body: any = {};
    body = this.formAddBusiness.value;

    try {
      this.loading.addBusiness = true;
      let resp = await this.api.addBusiness().toPromise();
      this.toaster.showSuccessToast('Added Business', 'Business added successfully')
      console.log("TCL: BListComponent -> submitFormAddBusiness -> resp", resp)
      this.initFormAddBusiness()

    } catch (error) {
      this.toaster.showDangerToast('Error', 'Business not added')
      console.error("TCL: BListComponent -> submitFormAddBusiness -> error", error)

    } finally {
      this.loading.addBusiness = false;

    }
  }
}
