import {Injectable} from "@angular/core";

@Injectable()
export class Constants {
  public ENAMEM = 'enamem';
  public LEADER = 're_leader';
  public AMA_DISPLAY_NAME = 'Area Medical Advisor';
  public YCSM_LINK = 'https://ycsm.churchofjesuschrist.org/Leader/Applicants';
  public CSM_LINK = 'https://csm.churchofjesuschrist.org/psp/csm/GLOBALHR/HRMS/c/LDS_SERVICE.C_CSM_CANDIDATES.GBL?PAGE=C_CSM_CANDIDATES';
  public PRINTFORMS_FORMS_URL = 'api/v1/printforms/forms';
  public PRINTFORMS_BLANK_URL = 'api/v1/printforms/blank';
  public PRINTFORMS_DOC_URL = 'api/v1/printforms/doc';
  // The following is for opening a page in the client which then opens the PDF using the html object element.  That doesn't
  // work for mobile, thus it's commented out.  Left here in case we can get it to work for mobile sometime.
  // public PRINTFORM_URL = '/recommendations/print';
  public LANG = {
    ENGLISH: 1,
    SPANISH: 21,
    PORTUGUESE: 76,
    FRENCH: 139
  };
  public CANDIDATE_TYPE = {
    ELDER: 'Elder',
    SISTER: 'Sister',
    COUPLE: 'Couple',
    SENIOR_SISTER: 'Senior Sister'
  };
  public OWNER_TYPE = {
    ELDER: 1,
    SISTER: 2,
    COMMON: 3
  };
  public CHECKLIST_ITEM_STATUS = {
    NOT_STARTED: 1,
    IN_PROGRESS: 2,
    COMPLETE: 3
  };
  public FORM_TYPE = {
    ELECTRONIC: 'Electronic',
    ELECTRONIC_ID: 1,
    PAPER: 'Paper',
    PAPER_ID: 2,
    LIVE_AT_HOME: 'Live at Home',
    LIVE_AT_HOME_ID: 5,
    SENIOR: 'Senior',
    SENIOR_ID: 4
  };
  public QUESTION_TYPE = {
    TEXT: 1,
    DATE: 2,
    NUMBER: 3,
    EMAIL: 4,
    AGE: 5,
    LABEL: 6,
    ENUM: 7,
    PHONE: 8,
    SSN: 9,
    YES_NO: 10,
    ZIP: 11,
    IMAGE: 12,
    ENUM_TEXT: 13,
    NAME: 14,
    SELECT: 15,
    ENUM_VERTICAL: 16,
    YES_NO_MULTIPLE: 17
  };
  public ANSWER_TYPE = {
    TEXT: 1,
    DATE: 2,
    NUMBER: 3,
    REFERENCE: 6
  };
  public LEVEL = {
    MISS: 1,
    WARD: 2,
    STAKE: 3,
    AREA: 4,
    CHQ: 5,
    MTC: 6,
    IN_FIELD: 7,
    RELEASED: 8,
    CANCELLED: 9
  };
  public PROCESS_STATUS = {
    READY_MISS: 1,
    READY_BISHOP: 2,
    READY_STK_PRES: 4,
    READY_AREA_PRES: 6,
    READY_SCREENING: 7,
    RETURNED_TO_STAKE: 21,
    RETURNED_TO_AREA: 22,
    CANCELLED: 99
  };
  getLevelFromProcstat(procstat) {
    switch (procstat) {
      case this.PROCESS_STATUS.READY_MISS: return this.LEVEL.MISS;
      case this.PROCESS_STATUS.READY_BISHOP: return this.LEVEL.WARD;
      case this.PROCESS_STATUS.READY_STK_PRES: return this.LEVEL.STAKE;
      case this.PROCESS_STATUS.READY_AREA_PRES:
        return this.LEVEL.AREA;
    }
  }

  getPrintformsAll(formType) {
    let link = "JuniorFormsAll";
    switch (formType) {
      case this.FORM_TYPE.SENIOR_ID:
        link = 'SeniorFormsAll';
        break;
      case this.FORM_TYPE.LIVE_AT_HOME_ID:
        link = 'SeniorFormsLAH';
        break;
    }
    return link;
  }

  public CANDIDATES_VIEW_TYPE = {
    WARD_FT: 100,
    WARD_SM: 110,
    WARD_YSM: 120,
    STAKE_FT: 200,
    STAKE_SM: 210,
    STAKE_YSM: 220,
    AREA_LOCAL: 300,
    AREA: 400,
    AREA_CHQ: 500,
    AREA_MEDICAL: 600
  };
  //Checklist Item Types
  public CI_TYPE = {
    DEFAULT: 0,
    DENTAL_EVAL: 1,
    INSTRUCTIONS: 2,
    LANG_EVAL: 3,
    LEADER_VERIFICATION: 4,
    PHOTO: 5,
    PRIVACY: 6,
    PRINT: 7,
    MODAL: 8,
    SUBMIT: 9,
    TRANSLATIONS: 10
  };
  isChecklistItemType(checklistItemType, types) {
    for (let type of types) {
      if (type == checklistItemType) {
        return true;
      }
    }
    return false;
  }
  public CHANGE_TO_UNIT_TYPE = {
    HOME:"HOME",
    SUB:"SUB",
    FUND:"FUND",
    CMIS:"CMIS"
  };
  public TRANSFER_STATUS = {
    PENDING: 1,
    APPROVED: 2,
    DENIED: 3,
    EXPIRED: 4,
    CANCELLED: 5,
    ARCHIVE: 6
  };
  public CHECKLIST_TYPE = {
    MAIN: 1,
    CHANGE: 2,
    ENTER: 3,
    ENTERED_NON_CANDIDATE: 4
  };
  public ROLE = {
    AMA: 'AreaMedicalAdvisor'
  };
  public PRINTFORM_TYPE = {
    PDF: 'pdf',
    DOC: 'doc',
    BLANK: 'blank'
  }
}
