import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import {I18nService} from './i18n.service';
import {Partner} from "../models/partner.model";
import {Photo} from "../models/photo.model";
import {PartnerServiceDetail} from "../models/partner-service-detail.model";


@Injectable()
export class PartnerService {

  public static headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  baseUrl = environment.sosoService;

  constructor(private http: HttpClient,
              private i18Service: I18nService) {
  }

  getPartnerById(id: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('soso_partner_token'));

    const httpOptions = {
      headers: headers
    };
    return this.http.get<Partner>(this.baseUrl + 'partner/partners/' + id, httpOptions);
  }

  getPartnerPhotosByPartnerId(partnerId: number) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('soso_partner_token'));
    const httpOptions = {
      headers: headers
    };
    return this.http.get<Photo[]>(this.baseUrl + 'partner/partnerPhotos/' + partnerId, httpOptions);
  }


  getPartnerServiceDetails(partnerId: number) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('soso_partner_token'));
    const httpOptions = {
      headers: headers
    };
    return this.http.get<PartnerServiceDetail[]>(this.baseUrl + 'partner/getservicedetailsforpartner/' + partnerId, httpOptions);
  }


  // 1 requests, 2 accepted, 3 done, 4 declined
  getReservationsForPartner(partnerId: number, status: number) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('soso_partner_token'));
    headers = headers.append('Content-Type', 'application/json');
    const httpOptions = {headers: headers};
    return this.http.get<Request[]>(this.baseUrl + 'partner/reservationsforpartner/' + partnerId + '/' + status, httpOptions);
  }

  getServiceDetialsByPartnerId(partnerId: number, serviceId: number) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('soso_partner_token'));
    headers = headers.append('Content-Type', 'application/json');
    const httpOptions = {headers: headers};
    return this.http.get<PartnerServiceDetail>(this.baseUrl + 'partner/getservicedetails/partner/' + partnerId + '/service/' + serviceId,
                                                    httpOptions);
  }

  saveReservation(request: Request): Observable<number> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept-Language', this.i18Service.selectedLang);
    const httpOptions = {headers: headers};
    return this.http.post<number>(this.baseUrl + 'partner/addReserve', request, httpOptions);
  }

  getPartnersByServiceIdAndSearchTerm(serviceId: number, term: string): Observable<Partner[]> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept-Language', this.i18Service.selectedLang);
    const httpOptions = {headers: headers};
    return this.http.get<Partner[]>(this.baseUrl + 'partner/filteredpartners/' + serviceId + '/' + term, httpOptions);

  }


}
