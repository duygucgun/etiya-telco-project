import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  apiControllerUrl: string = `${environment.apiUrl}/services`
  constructor(private httpClient: HttpClient) { }

  getList():Observable<Service[]>{
  
    return this.httpClient.get<Service[]>(this.apiControllerUrl)
  }

  getById(id:number):Observable<Service>{
    return this.httpClient.get<Service>(`${this.apiControllerUrl}/${id}`)
  }

  add(Service:Service): Observable<Service>{
    return this.httpClient.post<Service>(this.apiControllerUrl,Service);
  }

  delete(id:number):Observable<Service>{
    return this.httpClient.delete<Service>(`${this.apiControllerUrl}/${id}`)
  }

  update(Service:Service):Observable<Service>{
    return this.httpClient.put<Service>(`${this.apiControllerUrl}/${Service.id}`,Service)
  }
}
