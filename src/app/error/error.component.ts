import {CommonService} from "../common/common.service";
import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {TranslationService} from "../service/translation.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private commonService: CommonService,
              private translate: TranslateService,
              private translationService: TranslationService) { }

  ngOnInit() {
    // we hide the page until we get the header and footer or an error
    this.commonService.scrollToTop();

    this.translationService.getPageTranslations('Error').subscribe((data: any[]) => {
      this.translate.setTranslation(this.translationService.language.code, data, true);
    });

    setTimeout(() => {  // set timeout to avoid an expression changed error
      this.commonService.pageData.alignCenter = false;
    }, 0);
  }

  logout() {
    this.commonService.logout();
  }
}
