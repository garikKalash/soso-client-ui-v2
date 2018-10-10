import {Component, OnInit} from "@angular/core";
import {CommonDataService} from "../../service/common-data.service";
import {Service} from "../../models/service.model";
import {DataBridgeService} from "../../service/data-bridge.service";
import {I18nService} from "../../service/i18n.service";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  templateUrl: './client-home-page.component.html',
  selector: 'app-client-home-page',
  styleUrls: ['client-home-page.component.css']
})
export class ClientHomePageComponent implements OnInit {
  services: Service[] = [];
  constructor(private route: Router,
              private commonDataService: CommonDataService,
              private dataBridgeService: DataBridgeService,
              private i18nService: I18nService) {

  }

  ngOnInit(): void {
    this.commonDataService.getGeneralServices().subscribe(value => {
      this.services = value;
      this.resolveServicesNames();
    });

    this.i18nService.translateService.onLangChange.subscribe(() => {
      this.resolveServicesNames();
    });
  }

  private resolveServicesNames(){
    this.services.forEach(value => {
      value.translatedName = this.i18nService.isCurrentLang('hay') ? value.hay : value.eng;
    });
  }

  servicePhoto(serviceId: number): string {
    return environment.sosoService + 'commonData/servicephoto/' + serviceId;
  }

  seePartners(serviceId: number) {
    this.route.navigate(['/partners/' + serviceId]);
  }

}
