import {CommonService} from "../common/common.service";
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.scrollToTop();

    setTimeout(() => {  // set timeout to avoid an expression changed error
      this.commonService.pageData.alignCenter = false;
    }, 0);
  }

  logout() {
    this.commonService.logout();
  }
}
