import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TranslationService} from "../service/translation.service";
import * as AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-2',
  credentials: new AWS.Credentials('', '')
});

@Injectable()
export class CommonService {

  public pageData = { alignCenter: false };

  constructor(private httpClient: HttpClient,
              private translationService: TranslationService) { }

  getEnamemInfo(enamemId: number) {
    return this.httpClient.get('api/v1/enamem-info?enamemId=' + enamemId).toPromise();
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  logout() {
    this.clearSessionStorage();

    // sign out of all Rec Entry apps
    Promise.all([fetch('/recommendations/tools/api/logout', { redirect: 'manual' })]).then(() => {
      window.location.href = '/recommendations/api/signmeout?goto=' +
                                encodeURIComponent('http://www.churchofjesuschrist.org?lang=' + this.translationService.language.code);
    });
  }

  clearSessionStorage() {
    sessionStorage.removeItem('testUserId');
    sessionStorage.removeItem('confirmMedicalHonesty');
    sessionStorage.removeItem('transferRequestReroute');
    sessionStorage.removeItem('userOwnerTypeId');
  }

  getBluePrint(blueprintFile) {
    var s3 = new AWS.S3({apiVersion: '2006-03-01'});
    var params = {Bucket: 'elasticbeanstalk-us-east-2-995799135289', Key: blueprintFile};
    s3.getObject(params, function(err, data) {
      if (err) { // an error occurred
        console.log(err, err.stack);
      }
      else {
        // @ts-ignore
        let file = new Blob([data.Body], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
        console.log(data);           // successful response
      }
    });
   }

   getBluePrintsFromLambda(params) {
     var lambda = new AWS.Lambda();
     return lambda.invoke(params).promise();
   }
}
