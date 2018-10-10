import {Component, OnInit, Sanitizer, SecurityContext} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PartnerService} from "../../service/partner.service";
import {Partner} from "../../models/partner.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    templateUrl: './partners-by-selected-service.component.html',
    selector: 'app-list-of-selected-service',
    styleUrls: ['partners-by-selected-service.component.css']
})
export class PartnersBySelectedServiceComponent implements OnInit{

  private selecetedServiceId: number;
  loadedPartners: Partner[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private partnerService: PartnerService,
              private sanitizer: DomSanitizer) {

      this.activatedRoute.params.subscribe(params => {
        this.selecetedServiceId = params['serviceid'];
        this.partnerService.getPartnersByServiceIdAndSearchTerm(this.selecetedServiceId, '')
          .subscribe(value => {
            this.loadedPartners = value;
          })
      })
  }

  ngOnInit(): void {

  }

  safeImage(photoUrl: string) {
    if (photoUrl === undefined || photoUrl === null) {
      return this.sanitizer.sanitize(SecurityContext.URL, `http://phylo.cs.mcgill.ca/assets/img/loading.gif`);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${photoUrl}`);
  }

  getAvgFeedbackRateByPartner(partner: Partner): string {
    if (partner !== undefined && partner.feedbacks.length !== 0) {
      let sum = 0;
      partner.feedbacks.forEach(value => {
        sum += value.rate;
      });
      return (sum / partner.feedbacks.length).toFixed(2);
    }
    return 'Not rated yet :(';
  }

}
