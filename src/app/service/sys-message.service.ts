import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Message} from '../models/message.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class SysMessageService {
  baseUrl = environment.sosoService;

  constructor(private http: HttpClient) {
  }

  public getAllSysMessages(): Observable<Message[]> {
     return this.http.get<Message[]>(this.baseUrl + 'commonData/systemmessages');
  }
}
