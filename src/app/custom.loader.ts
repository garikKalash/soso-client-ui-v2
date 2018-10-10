import {TranslateLoader} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {SysMessageService} from './service/sys-message.service';
import {map} from 'rxjs/operators';

export class CustomLoader implements TranslateLoader {

  constructor(private sysMessageService: SysMessageService) {

  }

  getTranslation(lang: string): Observable<any> {
      if (lang === 'eng') {
        return this.getEng();
      } else {
        return this.getHay();
      }
  }


  getHay(): Observable<any> {
  return  this.sysMessageService.getAllSysMessages().pipe(map(value => {
      const obj = {};
      value.forEach(value1 => {
        obj[value1.globkey] = value1.hay;
      });
      return obj;
    }));
  }

  getEng(): Observable<any> {
    return  this.sysMessageService.getAllSysMessages().pipe(map(value => {
      const obj = {};
      value.forEach(value1 => {
        obj[value1.globkey] = value1.eng;
      });
      return obj;
    }));
  }
}

