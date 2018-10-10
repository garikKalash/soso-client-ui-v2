import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class I18nService {
  public supportedLanguages = [];
  public selectedLang: string;

  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(Array.of('hay', 'eng'));
    this.translateService.setDefaultLang('hay');
    if (this.supportedLanguages.length === 0) {
      // standing datad
      this.supportedLanguages = [
        { display: 'Հայերեն', value: 'hay', flagpath: 'http://flagpedia.net/data/flags/mini/am.png', label: 'Հայ' },
        { display: 'English', value: 'eng', flagpath: 'http://flagpedia.net/data/flags/mini/gb.png', label: 'Eng' },
      ];


      this.selectedLang = this.supportedLanguages[0].value;
      this.selectLang(this.selectedLang);
    }

  }

  isCurrentLang(lang: string) {
    return lang === this.translateService.currentLang;
  }

  selectLanguage() {
    this.selectLang(this.selectedLang);
  }

  selectLang(lang: string) {
    // set default;
    this.translateService.use(lang);
  }
}
