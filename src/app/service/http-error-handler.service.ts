import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class HttpErrorHandlerService {
  private error = new Subject<any>();

  constructor() {}

  public addError = (): void => {
    this.error.next('');
  };

  public getError = () => {
    return this.error.asObservable();
  };
}
