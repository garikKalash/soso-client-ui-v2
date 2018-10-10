import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Service} from "../models/service.model";

@Injectable()
export class DataBridgeService {
  selectedServiceBehaviorSubj$: BehaviorSubject<Service> = new BehaviorSubject<Service>(null);

  selectedService(){
    return this.selectedServiceBehaviorSubj$.asObservable();
  }

  changeSelectedService(value: Service) {
   this.selectedServiceBehaviorSubj$.next(value);
  }


}
