import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Match } from '../../app/models/match';

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
  public routeCountry;
  public routeLocal;
  public routeAway;

  arrayTeams: string[] = ["Barcelona","Espanyol","R. Madrid","Atlético","Sevilla","Valencia","Málaga",
                          "Athletic","Granada","Celta","R. Sociedad","Deportivo","Eibar","Betis","Sporting",
                          "Las Palmas","Osasuna","Villarreal CF","Alavés","Club Deportivo Leganés",
                          "Getafe","Rayo","Levante","Elche CF","UD Almería","Córdoba","Valladolid","Mallorca",
                          "Zaragoza"];
  arrayLogos: string[] = ["barcelona","espanyol","madrid","atletico","sevilla","valencia","malaga","athletic",
                          "granada","celta","sociedad","deportivo","eibar","betis","sporting","palmas",
                          "osasuna","villareal","alaves","leganes","getafe","rayo","levante","elche",
                          "almeria","cordoba","valladolid","mallorca","zaragoza"];

  constructor(public navCtrl: NavController,private auth: AuthService, public navParams: NavParams) {
  	this.match = navParams.get('match');
    this.getRoute(this.match);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
 }

 public getRoute(match: Match){  
    var route:string;
    var num: number;
    if(match.cLeague=="es"){
      route="../../assets/logos/liga_";
      this.routeCountry="../../assets/logos/liga.png";
      num=0;
    }
    else if(match.cLeague=="en"){
      route="../../assets/logos/premier_";
      num=28;
    }
    var noLogoLocal=0;
    var noLogoAway=0;
    for(var i:number=num;i<this.arrayTeams.length;i++){
       if(this.arrayTeams[i]==match.cLocalTeam){
          this.routeLocal= route + this.arrayLogos[i] + ".png";
          noLogoLocal=1;
       }
       if(this.arrayTeams[i]==match.cAwayTeam){
          this.routeAway= route + this.arrayLogos[i] + ".png";
          noLogoAway=1;
       }
    }
    if(noLogoLocal==0){
      this.routeLocal = "../../assets/logos/liga_athletic.png";
    }
    if(noLogoAway==0){
      this.routeAway = "../../assets/logos/liga_athletic.png";
    }
  }
}
