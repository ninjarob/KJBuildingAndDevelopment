import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {ModalDirective} from "ngx-bootstrap/modal";
import {CommonService} from "../common/common.service";

@Component({
  templateUrl: './common-modal.component.html',
  selector: 'common-modal',
  styleUrls: ['./common-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommonModalComponent implements OnInit {

  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() title:string;
  private blueprintMap : any;
  constructor(private commonService: CommonService) {}

  ngOnInit() {

  }

  show(job){
    this.blueprintMap = job.files.M;
    this.childModal.show();
  }

  hide(){
    this.childModal.hide();
  }

  getBluePrint(blueprintFile) {
    this.commonService.getBluePrint(blueprintFile);
  }
}
