import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ToasterService } from '../../../shared/services/toaster.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class BListComponent implements OnInit {

  data: any = [];
  loading: any = {};

  constructor(
    private api: ApiService,
    private toaster: ToasterService,

  ) { }

  ngOnInit(): void {

  }

  async getList() {
    try {
      this.loading.loadList = true;

      this.data = await this.api.getBusinesslist().toPromise();
      this.toaster.showSuccessToast('Loaded', 'Business loaded successfully')

      console.log("TCL: ListComponent -> getList -> data", this.data)
    } catch (error) {
      console.log("TCL: ListComponent -> getList -> error", error)
      this.toaster.showDangerToast('Error', 'Unable to load businesses')

    } finally {
      this.loading.loadList = false;

    }
  }
}
