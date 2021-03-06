import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  createSuccess = false;
  registerCredentials = { email: '', password: '' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { }
  /*
    Method for goBack
   */
  public goBack() {
    this.nav.push('LoginPage');
  }
  /*
    Method only for show a message al press the boton.
    Change when implement the register
   */
  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Sorry", "You can't create accounts yet.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
  /*
    Pop up with the information of the register-
   */
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.push('RegisterPage');
            }
          }
        }
      ]
    });
    alert.present();
  }

}
