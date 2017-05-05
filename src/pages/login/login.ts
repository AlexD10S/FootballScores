import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  registerCredentials = { email: '', password: '' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { }
  /*
    The method createAccount go to the registerPage
   */
  public createAccount() {
    this.nav.push('RegisterPage');
  }
  /*
    Check if the login is correct with provider auth-service and go to HOmePage if is correct
   */
  public login() {
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.nav.setRoot('HomePage');
      } else {
        this.showError("Access Denied, "+
                        "Please write the correct data "+
                        "user:Alex " +
                        "pass:123");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
 
 /*
   Create an alert with a error.
  */
  showError(text) {
 
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
