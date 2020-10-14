import {AppParameterService} from "../service/app-parameter.service";
import {CommonService} from "../common/common.service";
import {Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {CommonModalComponent} from "../common-modal/common-modal.component";

@Component({
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JobsComponent implements OnInit {

  jobs: any;
  @ViewChild('childModal') childModal :CommonModalComponent;

  constructor(private appParameterService: AppParameterService,
              private commonService: CommonService) {}

  ngOnInit() {
    var params = {
      FunctionName: 'serverlessrepo-microservi-microservicehttpendpoint-19V16EMQQHY02',
      Payload:'{\n' +
          '  "httpMethod":"GET",\n' +
          '  "queryStringParameters":{\n' +
          '        "TableName":"Job"\n' +
          '  }\n' +
          '}'

    };

    this.commonService.getBluePrintsFromLambda(params).then((data: any) => {
      let lambdaResponse = JSON.parse(data.Payload.toString());
      let lambdaResponseBody = JSON.parse(lambdaResponse.body);
      this.jobs = lambdaResponseBody.Items;
    });
  }
}
