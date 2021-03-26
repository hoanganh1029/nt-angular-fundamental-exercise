import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { Order } from 'src/models/order';
import { OrderDetail } from 'src/models/orderDetail';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private BASE_API:string = 'http://localhost:4010';
  constructor(
    private http: HttpClient,
  ) { }
  
  getAll():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.BASE_API}/orders` )
          .pipe(
            tap(_ => this.log('Fetched orders success.')),
            catchError(this.handleError<Order[]>('getOrders',[]))
          ); 
  }

  getById(id: number): Observable<Order>{
    return this.http.get<Order>(`${this.BASE_API}/orders/${id}`);
  }

  update(order: Order): Observable<Object>{
    return this.http.put(`${this.BASE_API}/orders/${order.id}`, order);
  }

  delete(id:number):Observable<Object>{
    return this.http.delete(`${this.BASE_API}/orders/${id}`);
  }

  private handleError<T> (operation = 'operation', result?: T)
  {
    return (error:any): Observable<T> => {
      //Send the error to remote logging infrastructure
      console.error(error);
      //better job of transforming error fo user compution
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message:string)
  {
    //this.messageService.add(`HeroService: ${message}`);
    console.log(message);
  }
}
