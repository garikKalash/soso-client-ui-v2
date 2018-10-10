import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  private readonly SOSO_CLIENT_TOKEN = 'soso_client_token';
  private readonly SOSO_CLIENT_ID = 'soso_client_id';

  private loggedIn = new BehaviorSubject<boolean>(localStorage.getItem(this.SOSO_CLIENT_TOKEN) !== null);
  private loggedPartnerId = new BehaviorSubject<number>(+localStorage.getItem(this.SOSO_CLIENT_ID));
  constructor() {

  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get getLoggedPartnerId() {
      return this.loggedPartnerId.asObservable();
  }

  checkLoggedInUser() {
    if (localStorage.getItem(this.SOSO_CLIENT_TOKEN) !== null && localStorage.getItem(this.SOSO_CLIENT_ID) !== null) {
    } else {
       this.logout();
    }
  }

  login(partnerId: string, token: string) {
    localStorage.setItem(this.SOSO_CLIENT_TOKEN, token);
    localStorage.setItem(this.SOSO_CLIENT_ID, partnerId);
    this.loggedIn.next(true);
    this.loggedPartnerId.next(+partnerId);
  }

  logout() {
    localStorage.removeItem(this.SOSO_CLIENT_TOKEN);
    localStorage.removeItem(this.SOSO_CLIENT_ID);
    this.loggedIn.next(false)
    this.loggedPartnerId.next(-1);
  }
}
