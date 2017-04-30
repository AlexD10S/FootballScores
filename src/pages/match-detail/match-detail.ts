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
  /*
    This array manually is only for logos, the array of the team: arrayTeams
     and the name of the logo in the same position: arrayLogos.
    Array with all the teams ->
          0-28 for Spanish teams.
          29-55 for English teams.
          56-80 for German teams.
          80-107 for Italian teams.
   */
  arrayTeams: string[] = ["Barcelona","Espanyol","R. Madrid","Atlético","Sevilla","Valencia","Málaga",
                          "Athletic","Granada","Celta","R. Sociedad","Deportivo","Eibar","Betis","Sporting",
                          "Las Palmas","Osasuna","Villarreal CF","Alavés","Club Deportivo Leganés",
                          "Getafe","Rayo","Levante","Elche CF","UD Almería","Córdoba","Valladolid","Mallorca",
                          "Zaragoza","Chelsea","Arsenal","Tottenham Hotspur","West Ham United","Crystal Palace",
                          "Manchester United","Manchester City","Everton","Liverpool","West Bromwich Albion",
                          "Newcastle United","Stoke City","Sunderland","Aston Villa","Southampton",
                          "Leicester City","Bournemouth","Norwich","Watford","Swansea","Burnley","Hull City",
                          "Queens Park Rangers","Fulham","Cardiff City","Reading","Wigan Athletic",
                          "FC Bayern München","Borussia Dortmund","Bayer 04 Leverkusen","Schalke 04",
                          "Eintracht Frankfurt","Hamburger SV","Borussia M'gladbach","VfL Wolfsburg",
                          "1. FSV Mainz 05","Werder Bremen","1899 Hoffenheim","FC Augsburg","Hertha BSC",
                          "1. FC Köln","FC Ingolstadt 04","SV Darmstadt 98","SC Freiburg","RB Leipzig",
                          "Hannover 96","VfB Stuttgart","SC Paderborn 07","Eintr. Braunschweig",
                          "1. FC Nürnberg","Fortuna Düsseldorf","Greuther Fürth","Milan","Inter",
                          "Lazio","Roma","Genoa","Sampdoria","Juventus","Torino","Napoli","Atalanta",
                          "Chievo","Fiorentina","Udinese","Sassuolo","Palermo","Empoli","Bologna",
                          "Cagliari","Crotone","Pescara","Carpi","Frosinone","Verona","Parma","Cesena",
                          "Catania","Livorno"];
  arrayLogos: string[] = ["barcelona","espanyol","madrid","atletico","sevilla","valencia","malaga","athletic",
                          "granada","celta","sociedad","deportivo","eibar","betis","sporting","palmas",
                          "osasuna","villareal","alaves","leganes","getafe","rayo","levante","elche",
                          "almeria","cordoba","valladolid","mallorca","zaragoza","chelsea","arsenal",
                          "tottenham","westham","crystal","manunited","mancity","everton","liverpool",
                          "westb","newcastle","stoke","sunderland","aston","southampton","leicester",
                          "bournemouth","norwich","watford","swansea","burnley","hull","qpr","fulham",
                          "cardiff","reading","wigan","bayer","dortmund","leverkusen","schalke",
                          "frankfurt","hamburg","moench","wolfsburg","mainz","bremen","hoffein",
                          "augsburg","herta","koln","ingolstadt","darmstadt","freiburg","leipzig",
                          "hannover","stuttgart","padeborn","braun","nuremberg","dussel","furth",
                          "milan","inter","lazio","roma","genoa","sampdoria","juventus","torino",
                          "napoli","atalanta","chievo","fiorentina","udinese","sassuolo","palermo",
                          "empoli","bologna","cagliari","crotone","pescara","carpi","frosinone",
                          "verona","parma","cesena","catania","livorno"];

  constructor(public navCtrl: NavController,private auth: AuthService, public navParams: NavParams) {
  	this.match = navParams.get('match');
    this.getRoute(this.match);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
 }
 /*
    getRoute get the routes for all the logos of the match:
    league, localteam and awayteam
  */
 public getRoute(match: Match){  
    var route:string;
    // This variable is for improve the search in the array of teams
    var num: number;
    /*
      If the league is es/en/de/it change the logo and the url for the team's logo
     */
    if(match.cLeague=="es"){
      route="assets/logos/liga/liga_";
      this.routeCountry="assets/logos/liga.png";
      num=0;
    }
    else if(match.cLeague=="en"){
      route="assets/logos/premier/";
      this.routeCountry="assets/logos/premier.png";
      num=28;
    }
    else if(match.cLeague=="de"){
      route="assets/logos/bundesliga/";
      this.routeCountry="assets/logos/bundesliga.png";
      num=55;
    }
    else if(match.cLeague=="it"){
      route="assets/logos/seriea/";
      this.routeCountry="assets/logos/serie.png";
      num=80;
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
    /*
       If there are a problem and don't find the logo-> put the logo of my team
     */
    if(noLogoLocal==0){
      this.routeLocal = "../../assets/logos/liga_athletic.png";
    }
    if(noLogoAway==0){
      this.routeAway = "../../assets/logos/liga_athletic.png";
    }
  }
}
