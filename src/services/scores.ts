import {Injectable} from '@angular/core';  
import {Http} from '@angular/http';
/**
	Service for call the repository with the json
 */
@Injectable()
export class ScoresService {  
    constructor(private http: Http) {
    }

    getScores(country,year) {
    		let results = this.http.get
    			(`https://raw.githubusercontent.com/opendatajson/football.json/master/${year}/${country}.1.json`);
        return results;
    }
    
}