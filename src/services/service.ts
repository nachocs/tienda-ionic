import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class Service {
  BASE_API_URL: string = 'https://dreamers.com/com/home2/cgi/json.cgi?indice=tienda/productos&empieza=';

  constructor(private http: HttpClient) {

  }

  private getHttp(url): Observable<any> {
    return this.http.get(url)
    .map((res) => this.handleMap(res))
    .catch(this.handleError);
  }

  private handleMap(res: any) {
    return res;
  }

  private handleError (error: HttpErrorResponse) {
    const errorMsg = 'Error';
    return Observable.throw(errorMsg);
  }

  getList() {
    return this.getHttp(this.BASE_API_URL);
  }

}
