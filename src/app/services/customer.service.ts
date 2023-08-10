import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from '../interface/customer';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://6466e9a7ba7110b663ab51f2.mockapi.io/api/v1/pack1';

  constructor(private http: HttpClient) {}

  getCustomerData(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching customer data:', error);
        return throwError('An error occurred while fetching customer data.');
      })
    );
  }
}
