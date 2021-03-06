import { Component } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { ConfigService } from './configuration.service';

@Component({
  selector: 'app-select-all-template',
  templateUrl: './select-all-template.component.html',
  styleUrls: ['./select-all-template.component.css'],
  providers: [ConfigService],
})
export class SelectAllTemplateComponent {

  columns = [
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
    { key: 'company', title: 'Company' },
    { key: 'phone', title: 'Phone' },
    { key: 'address.street', title: 'Street' },
  ];
  data: any[] = [];
  allSelected = false;
  configuration;

  constructor() {
    this.configuration = ConfigService.config;
    this.data = data.splice(1, 5);
  }

  tableEventEmitted(event: any) {
    if (event.event === 'onSelectAll') {
      this.data.forEach((row: any) => row.selected = event.value);
    }
  }

  rowSelected() {
    this.allSelected = this.data.every((row) => !!row.selected);
  }

}
