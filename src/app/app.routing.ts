import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ClientHomePageComponent} from "./component/client-home-page.component/client-home-page.component";
import {PartnersBySelectedServiceComponent} from "./component/list-of-selected-service.component/partners-by-selected-service.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ClientHomePageComponent,
  },
  {
    path: 'partners/:serviceid',
    component: PartnersBySelectedServiceComponent
  },

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
