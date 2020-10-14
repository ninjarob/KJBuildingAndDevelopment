import { Injectable } from '@angular/core';
//import { UserService } from '../user/user.service';

@Injectable()
export class SecurityService {

  constructor(/*private userService: UserService*/) { }

  isAdmin() {
    return true;//this.userService.getActiveRole() === 'SiteAdministrator';
  }

  isSupport() {
    return true;//this.userService.getActiveRole() === 'CHQSupport';
  }

  hasAuthority(permission: string) {
    // let permissions = this.userService.getPermissions();
    // if (permissions) {
    //   for (let i = 0; i < permissions.length; i += 1) {
    //     if (permission === permissions[i]) {
    //       return true;
    //     }
    //   }
    // }
    // return false;
    return true;
  }

  hasAnyAuthority(list: string[]) {
    // let permissions = this.userService.getPermissions();
    // return permissions && (!list || permissions.filter(x => list.indexOf(x) >= 0).length > 0);
    return true;
  }

  getUsername() {
    return "";
    //return this.userService.getUsername();
  }
}
