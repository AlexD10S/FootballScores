import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  currentUser: string;
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // Only check ok is Alex and 123
        //Implement with information in database
        let access = (credentials.password === "123" && credentials.email === "Alex");
        this.currentUser = credentials.email;
        observer.next(access);
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // The same as login but without nothing implemented yet
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
  /*
    Get name of user.
    It could be more info if I save more info for users(create class User and return user)
   */
  public getUserInfo() : string {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
