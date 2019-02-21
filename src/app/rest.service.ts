import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8000/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class RestService {

   constructor(private http: HttpClient) { }
   private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getClinics(): Observable<any> {
    return this.http.get(endpoint + 'clinics ').pipe(
      map(this.extractData));
  }

  getClinic(id): Observable<any> {
    return this.http.get(endpoint + 'clinics/' + id).pipe(
      map(this.extractData));
  }

  addRequest (addrequests): Observable<any> {
    console.log(addrequests);
    return this.http.post<any>(endpoint + 'requestapi', JSON.stringify(addrequests), httpOptions).pipe(
      tap((addrequests) => console.log(`addrequests w/ id=${addrequests.id}`)),
      catchError(this.handleError<any>('addRequest'))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
