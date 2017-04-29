import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

/**
 * Generated class for the MatchDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-match-detail',
  templateUrl: 'match-detail.html',
})
export class MatchDetailPage {
	public match;

  constructor(public navCtrl: NavController,private auth: AuthService, public navParams: NavParams) {
  	this.match = navParams.get('match');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

}
