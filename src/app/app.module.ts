import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {I18nService} from "./service/i18n.service";
import {CommonDataService} from "./service/common-data.service";
import {AuthenticationService} from "./service/authentication.service";
import {DropdownModule} from "primeng/primeng";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SysMessageService} from "./service/sys-message.service";
import {CustomLoader} from "./custom.loader";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatListModule,
  MatOptionModule
} from "@angular/material";
import {DataBridgeService} from "./service/data-bridge.service";
import {routing} from "./app.routing";
import {ClientHomePageComponent} from "./component/client-home-page.component/client-home-page.component";
import {PartnersBySelectedServiceComponent} from "./component/list-of-selected-service.component/partners-by-selected-service.component";
import {PartnerService} from "./service/partner.service";

export function translateCustomLoaderFactory(messageService: SysMessageService) {
  return new CustomLoader(messageService);
}

@NgModule({
  declarations: [
    AppComponent,
    ClientHomePageComponent,
    PartnersBySelectedServiceComponent

  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateCustomLoaderFactory,
        deps: [SysMessageService]
      }
    }),
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatCardModule,
    MatButtonModule
  ],
  providers: [I18nService,
              CommonDataService,
              AuthenticationService,
              SysMessageService,
              DataBridgeService,
              PartnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
