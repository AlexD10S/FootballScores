import {Injectable} from '@angular/core';  
import {Http} from '@angular/http';

@Injectable()
export class GitHubService {  
    constructor(private http: Http) {
    }

    getRepos(gitUserName) {
        let repos = this.http.get(`https://api.github.com/users/${gitUserName}/repos`);
        return repos;
    }
}