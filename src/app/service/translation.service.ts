import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Title} from "@angular/platform-browser";
import {TranslateService} from '@ngx-translate/core';
import * as moment from 'moment';

@Injectable()
export class TranslationService {

  public language = {
    code: 'eng',
    id: 1
  };
  public calendarLocale;
  public englishCal = {
    firstDayOfWeek: 0,
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
    monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
    monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  };
  public frenchCal = {
    firstDayOfWeek: 1,
    dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
    dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
    dayNamesMin: ['D','L','M','M','J','V','S'],
    monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    monthNamesShort: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
  };
  public portugueseCal = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
    dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun', 'Jul','Ago','Set','Out','Nov','Dez']
  };
  public spanishCal = {
    firstDayOfWeek: 1,
    dayNames: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
    dayNamesShort: ['dom','lun','mar','mié','jue','vie','sáb'],
    dayNamesMin: ['D','L','M','X','J','V','S'],
    monthNames: ['enero','febrero','marzo','abril','mayo','junio', 'julio','agosto','septiembre','octubre','noviembre','diciembre'],
    monthNamesShort: ['ene','feb','mar','abr','may','jun', 'jul','ago','sep','oct','nov','dic']
  };

  private languages: any;

  constructor(private httpClient: HttpClient,
              private titleService: Title,
              private translate: TranslateService) { }

  setDefaultLanguage() {
    this.translate.setDefaultLang('eng');  // language to use as a fallback
  }

  setLanguage(langCode: string, langId: number) {
    this.language.code = langCode;
    this.language.id = langId;
    this.translate.use(langCode);

    // set the locale for translated date/time entry and display
    switch (langCode) {
      case "spa":
        this.calendarLocale = this.spanishCal;
        moment.locale("es");
        break;
      case "por":
        this.calendarLocale = this.portugueseCal;
        moment.locale("pt");
        break;
      case "fra":
        this.calendarLocale = this.frenchCal;
        moment.locale("fr");
        break;
      default:
        this.calendarLocale = this.englishCal;
        moment.locale("en");
        break;
    }
  }

  setGeneralTranslations(translations: any) {
    this.translate.setTranslation(this.language.code, translations);

    // set the browser page title
    this.translate.get('MsnyOnlineRcmdSystem').subscribe((translation) => {
      this.titleService.setTitle(translation);
    });
  }

  getTranslation(stringKey: string) {
    return this.httpClient.get('api/v1/translation/' + stringKey + '/' + this.language.code);
  }

  getPageTranslations(page: string) {
    return this.httpClient.get('api/v1/translations/page/' + page + '/' + this.language.code);
  }

  getCandidateTranslations(enamemId: number, langId: number) {
    return this.httpClient.get('api/v1/candidate-translations?enamemId=' + enamemId + '&langId=' + langId);
  }

  getLanguages() {
    return this.languages;
  }

  getSupportedLanguages() {
    return this.httpClient.get('api/v1/supported-langs').toPromise().then((data: any[]) => {
      this.languages = data;
      return Promise.resolve(this.languages);
    });
  }

  // dates need to be passed as strings (with English month abbreviations) in order to ignore
  // the time zone so that they aren't off by a day sometimes, depending on the user's time zone
  formatDateInEnglish(dateToFormat: Date) {
    moment.locale("en");
    const formattedDate = moment(dateToFormat).format('DD MMM YYYY');

    // if not English, set the locale back to the user's language
    switch (this.language.code) {
      case "spa":
        moment.locale("es");
        break;
      case "por":
        moment.locale("pt");
        break;
      case "fra":
        moment.locale("fr");
        break;
    }

    return formattedDate;
  }
}
