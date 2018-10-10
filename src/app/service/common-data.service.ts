import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Service} from '../models/service.model';

@Injectable()
export class CommonDataService {

  baseUrl: string = environment.sosoService;

  constructor(private http: HttpClient) {
  }

  public getGeneralServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.baseUrl + 'commonData/getSosoServices/-1');
  }

  public getServicesByParent(parentId: number): Observable<Service[]> {
    return this.http.get<Service[]>(this.baseUrl + 'commonData/getSosoServices/' + parentId);
  }

  public getServiceById(serviceId: number): Observable<Service> {
    return this.http.get<Service>(this.baseUrl + 'commonData/service/' + serviceId)
  }
}
