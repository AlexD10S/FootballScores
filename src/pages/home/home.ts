import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { ScoresService } from '../../services/scores';
import { Match } from '../../app/models/match';
import { MatchDetailPage } from '../match-detail/match-detail';  

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ScoresService]
})


export class HomePage {
  public foundScores;
  username = '';
  /* Default*/
  public country='es';
  public year='2016-17';
  public matchday="All";
  public team="All";
  arrayMatches: Match[] = [];
  /*
    For the filter matchday and teams.
   */
  arrayMatchDays: string[] = [];
  arrayTeam: string [] = [];
  /*
  match=new Match("Jornada 1","10/01/2016","Athletic","Barça","12","1");
  match1=new Match("Jornada 1","11/01/2016","Madrid","Atletico","3","3");
  match2=new Match("Jornada 2","10/02/2016","Athletic","Madrid","6","1");
  match3=new Match("Jornada 2","11/02/2016","Atletico","Barça","2","1");
  this.arrayMatches=[this.match,this.match1,this.match2,this.match3]; 
  */


  

  constructor(private nav: NavController, private auth: AuthService, private scores: ScoresService) {
    this.username = this.auth.getUserInfo();
    this.getScores();
  }

  getScores() {
        this.arrayMatches=[];
        this.arrayTeam=["All"];
        this.arrayMatchDays=["All"];
        this.scores.getScores(this.country,this.year).subscribe(
            data => {
                this.foundScores = data.json()['rounds'];   
            },
            err => console.error(err),
            () => {

                for (var item of this.foundScores){
                  var arrayObj: Object [] = [];
                  arrayObj=item['matches'];

                  for (var m of arrayObj){
                    var match=new Match("","","","","","","");
                    match.setMatchDay(item['name']);
                    match.setMatchDate(m['date']);
                    match.setLocalTeam(m['team1']['name']);
                    match.setAwayTeam(m['team2']['name']);
                    match.setLocalScore(m['score1']);
                    match.setAwayScore(m['score2']);
                    match.setLeague(this.country);
                    /*
                      For the filters
                     */
                     if(!this.arrayMatchDays.find(item => item === match.cMatchDay)){
                        this.arrayMatchDays.push(match.cMatchDay);
                     }
                     if(!this.arrayTeam.find(item => item === match.cLocalTeam)){
                        this.arrayTeam.push(match.cLocalTeam);
                     }

                    this.arrayMatches.push(match);
                  }

                }
                if(this.matchday != "All"){
                   this.arrayMatches=this.arrayMatches.filter(item => item.cMatchDay == this.matchday);
                }
                if(this.team != "All"){
                   this.arrayMatches=this.arrayMatches.filter(item => item.cLocalTeam == this.team || 
                     item.cAwayTeam == this.team);
                }
                console.log('getScores completed')
              }
        );

    }
    /*
    public filterMatchDay(element: Match, index, array) { 
      console.log(this.matchday);
      return (element.cMatchDay == this.matchday); 
    }
    public filterTeam(element: Match, index, array) { 
      return (element.cLocalTeam == this.team); 
    } 
    */
  goToDetails(match) {  
    this.nav.push(MatchDetailPage, { match: match });
  }
    

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

}
