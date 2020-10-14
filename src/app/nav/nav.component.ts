import {AppParameterService} from "../service/app-parameter.service";
import {CommonService} from "../common/common.service";
import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  templateUrl: './nav.component.html',
  selector: 'nav-selector',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  @Input() activeLink: string;

  constructor(private appParameterService: AppParameterService,
              private commonService: CommonService,
              private router: Router) {}

  ngOnInit() {

  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  goToJobs() {
    this.router.navigate(['/jobs']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  getActive(link) {
    return link == this.activeLink?'active':'';
  }
}
