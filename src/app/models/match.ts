export class Match {
    cMatchDay: string;
    cMatchDate: string;
    cLocalTeam: string;
    cAwayTeam: string;
    cLocalScore: string;
    cAwayScore: string;

 
    constructor(matchDay: string, matchDate: string,localTeam: string,awayTeam: string,
        localScore: string, awayScore: string,){
         this.cMatchDay = matchDay;
         this.cMatchDate = matchDate;
         this.cLocalTeam = localTeam;
         this.cAwayTeam = awayTeam;
         this.cLocalScore = localScore;
         this.cAwayScore = awayScore;
    }
    setMatchDay(matchDay: string){
        this.cMatchDay = matchDay;
    }
    setMatchDate(matchDate: string){
        this.cMatchDate = matchDate;
    }
    setLocalTeam(localTeam: string){
        this.cLocalTeam=localTeam;
    }
    setAwayTeam(awayTeam: string){
        this.cAwayTeam = awayTeam;
    }
    setLocalScore(localScore: string){
        this.cLocalScore = localScore;
    }
    setAwayScore(awayScore: string){
        this.cAwayScore = awayScore;
    }
 
}