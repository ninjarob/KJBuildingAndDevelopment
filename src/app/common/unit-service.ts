import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UnitService {
  constructor(private httpClient: HttpClient) { }

  getUnitsForEnabledMember(enamemId, orgNumber) {
    return this.httpClient.get('api/v1/get-units-for-enabled-member?enamemId='+enamemId+"&orgNumber="+orgNumber).toPromise();
  }

  getTransfersForUnit(orgNumber, langId) {
    return this.httpClient.get('api/v1/get-transfers-for-unit?orgNumber='+orgNumber+"&langId="+langId).toPromise();
  }

  sendUnitTransferRequest(requestingOrgNum, changeToOrgNum, changeToUnitType, enamemId, username) {
    return this.httpClient.post('api/v1/insert-new-transfer-request?requestingOrgNum=' + requestingOrgNum
                                        + '&changeToOrgNum=' + changeToOrgNum + '&changeToUnitType=' + changeToUnitType + '&enamemId=' + enamemId + "&username=" + username, null).toPromise();
  }

  acceptTransfer(enabledMemberId, unitType, approvingUnitNumber, unitNumber, username) {
    return this.httpClient.post('api/v1/accept-transfer-request?enabledMemberId=' + enabledMemberId + '&unitType=' + unitType +
                                '&approvingUnitNumber=' + approvingUnitNumber + '&unitNumber=' + unitNumber + '&username=' + username, null).toPromise();
  }

  updateTransfer(transferId, statusId, username) {
    return this.httpClient.post('api/v1/update-transfer-request?transferRequestId=' + transferId + '&statusId=' + statusId + '&username=' + username, null).toPromise();
  }

  getTransferUnitInfo(transferId, currentOrg) {
    return this.httpClient.get('api/v1/get-transfers-unit-info?transferId='+transferId+"&currentOrg="+currentOrg).toPromise();
  }

  getTransferHistory(enamemId: number) {
    return this.httpClient.get('api/v1/transfer-history?enamemId=' + enamemId).toPromise();
  }
}
