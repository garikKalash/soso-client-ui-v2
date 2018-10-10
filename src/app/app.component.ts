import {Component, OnInit} from '@angular/core';
import {I18nService} from "./service/i18n.service";
import {BehaviorSubject, Observable} from "rxjs";
import {AuthenticationService} from "./service/authentication.service";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Service} from "./models/service.model";
import {CommonDataService} from "./service/common-data.service";
import {DataBridgeService} from "./service/data-bridge.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoggedIn$: Observable<boolean>;

  serviceAutoCompleteControl = new FormControl();
  selectedService: Service;
  filteredServices: Observable<Service[]>;
  services: Service[] = [];

  constructor(public authService: AuthenticationService,
              private dataBridgeService: DataBridgeService,
              public i18nService: I18nService,
              private commonDataService:  CommonDataService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.commonDataService.getGeneralServices().subscribe(value => {
      this.services = value;
      this.resolveServicesNames();
    });
    this.i18nService.translateService.onLangChange.subscribe(() => {
      this.resolveServicesNames();
      this.serviceAutoCompleteControl.reset();
    });
    this.filteredServices = this.serviceAutoCompleteControl.valueChanges.pipe(
      map(value => this._filterService(value))
    );
  }

  private resolveServicesNames(){
    this.services.forEach(value => {
       value.translatedName = this.i18nService.isCurrentLang('hay') ? value.hay : value.eng;
    });
  }

  private _filterService(value: Service): Service[] {
    return this.services.filter(service => service.id === value.id);
  }

  displayFn(service?: Service): string | undefined {
    if(this.dataBridgeService !== undefined){
        this.dataBridgeService.changeSelectedService(this.selectedService);
    }
    return service ? service.translatedName : undefined;
  }

  isCurrentLang(lang: string) {
    return this.i18nService.isCurrentLang(lang);
  }

  selectLanguage() {
    this.i18nService.selectLanguage();
  }


}
