import {AppParameterService} from "./service/app-parameter.service";
import {CommonService} from "./common/common.service";
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Constants} from "./common/constants";
import {HttpClient} from '@angular/common/http';
import {HttpErrorHandlerService} from "./service/http-error-handler.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

declare global {
  interface Window { platformConfig: any; }  // lets typeScript know about platformConfig (which comes from the churchofjesuschrist.org header)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  ngUnsubscribe = new Subject();
  pageData: any;
  blankPage: boolean = false;

  constructor(private appParameterService: AppParameterService,
              private commonService: CommonService,
              private constants: Constants,
              private httpClient: HttpClient,
              private httpErrorHandlerService: HttpErrorHandlerService) { }

  ngOnInit() {

    this.pageData = this.commonService.pageData;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getScripts(data: string) {
    const str = data.replace(/\n/g, '');
    const regex = /<script.*?<\/script>/g;
    return this.regexList(regex, str);
  }

  getScriptSrc(str: string) {
    const regex = /src=\"(.*?)\"/g;
    const list = this.regexList(regex, str);
    if (list[1]) {
      this.loadScript(list[1]);
    }
  }

  getScriptConent(str: string) {
    const regex = />(.*?)<\/script>/g;
    const list = this.regexList(regex, str);
    if (list[1]) {
      this.loadScript('', list[1]);
    }
  }

  regexList(regex: RegExp, str) {
    const list = [];
    let m;
    do {
      m = regex.exec(str);
      if (m) {
        for (let i = 0; i < m.length; i++) {
          const mElement = m[i];
          list.push(mElement);
        }
      }
    } while (m);
    return list;
  }

  loadScript(script: string, content?: string) {
    const node = document.createElement('script');
    if (script) {
      node.src = script;
    }
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';

    if (content) {
      node.innerText = content;
    }
    document.getElementById('head').appendChild(node);
  }

  initializeError() {
    this.httpErrorHandlerService.getError()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {

      });
  }
}
