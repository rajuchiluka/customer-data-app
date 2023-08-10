import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../services/customer.service';
import { Customer } from '../interface/customer';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  customers: Customer[] = [];
  isLoading = true;
  isError = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchCustomerData();
  }

  fetchCustomerData(): void {
    this.customerService.getCustomerData().subscribe(
      (data) => {
        this.customers = data;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        this.isError = true;
      }
    );
  }
}
