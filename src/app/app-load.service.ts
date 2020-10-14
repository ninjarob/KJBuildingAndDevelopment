import {AppParameterService} from './service/app-parameter.service';
import {Injectable} from '@angular/core';
import {TranslationService} from './service/translation.service';
//import {UserService} from './user/user.service';

@Injectable()
export class AppLoadService {

  constructor(private appParameterService: AppParameterService,
              private translationService: TranslationService/*,
              private userService: UserService*/) { }

  initializeUser() {
    //return this.userService.getUser();
  }

  initializeLanguages() {
    //return this.translationService.getSupportedLanguages();
  }
}
