import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://petstore3.swagger.io/api/v3';

@Injectable({
  providedIn: 'root'
})
export class SwaggerPetstoreOpenAPI301Service {
  constructor(private http: HttpClient) { }

  public getPetFindByStatus(): Observable<any> {
    const params = new HttpParams()
      .append('status', 'available');
    const options = {
      params
    };
    return this.http.get(`${API_ENDPOINT}/pet/findByStatus`, options);
  }
}
