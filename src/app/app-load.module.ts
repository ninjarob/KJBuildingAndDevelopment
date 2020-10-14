import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppLoadService } from './app-load.service';

export function initUser(appLoadService: AppLoadService) {
    return () => appLoadService.initializeUser();
}

export function initLanguages(appLoadService: AppLoadService) {
    return () => appLoadService.initializeLanguages();
}

@NgModule({
    imports: [HttpClientModule],
    providers: [
        AppLoadService,
        { provide: APP_INITIALIZER, useFactory: initUser, deps: [AppLoadService], multi: true },
        { provide: APP_INITIALIZER, useFactory: initLanguages, deps: [AppLoadService], multi: true },
    ]
})

export class AppLoadModule { }
