webpackJsonp([0],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(267);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Match; });
/*
    Object to represent a Match.
 */
var Match = (function () {
    function Match(matchDay, matchDate, localTeam, awayTeam, localScore, awayScore, league) {
        this.cMatchDay = matchDay;
        this.cMatchDate = matchDate;
        this.cLocalTeam = localTeam;
        this.cAwayTeam = awayTeam;
        this.cLocalScore = localScore;
        this.cAwayScore = awayScore;
    }
    /*
      Methods set to change the value
     */
    Match.prototype.setMatchDay = function (matchDay) {
        this.cMatchDay = matchDay;
    };
    Match.prototype.setMatchDate = function (matchDate) {
        this.cMatchDate = matchDate;
    };
    Match.prototype.setLocalTeam = function (localTeam) {
        this.cLocalTeam = localTeam;
    };
    Match.prototype.setAwayTeam = function (awayTeam) {
        this.cAwayTeam = awayTeam;
    };
    Match.prototype.setLocalScore = function (localScore) {
        this.cLocalScore = localScore;
    };
    Match.prototype.setAwayScore = function (awayScore) {
        this.cAwayScore = awayScore;
    };
    Match.prototype.setLeague = function (league) {
        this.cLeague = league;
    };
    return Match;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_scores__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_match__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__match_detail_match_detail__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    /*
    match=new Match("Jornada 1","10/01/2016","Athletic","Barça","12","1");
    match1=new Match("Jornada 1","11/01/2016","Madrid","Atletico","3","3");
    match2=new Match("Jornada 2","10/02/2016","Athletic","Madrid","6","1");
    match3=new Match("Jornada 2","11/02/2016","Atletico","Barça","2","1");
    this.arrayMatches=[this.match,this.match1,this.match2,this.match3];
    */
    function HomePage(nav, auth, scores) {
        this.nav = nav;
        this.auth = auth;
        this.scores = scores;
        this.username = '';
        /* Default*/
        this.country = 'es';
        this.year = '2016-17';
        this.matchday = "All";
        this.team = "All";
        this.arrayMatches = [];
        /*
          For the filter matchday and teams.
         */
        this.arrayMatchDays = [];
        this.arrayTeam = [];
        this.username = this.auth.getUserInfo();
        this.getScores();
    }
    HomePage.prototype.getScores = function () {
        var _this = this;
        this.arrayMatches = [];
        this.arrayTeam = ["All"];
        this.arrayMatchDays = ["All"];
        /*
          Parse the json.
         */
        this.scores.getScores(this.country, this.year).subscribe(function (data) {
            _this.foundScores = data.json()['rounds'];
        }, function (err) { return console.error(err); }, function () {
            for (var _i = 0, _a = _this.foundScores; _i < _a.length; _i++) {
                var item = _a[_i];
                var arrayObj = [];
                arrayObj = item['matches'];
                for (var _b = 0, arrayObj_1 = arrayObj; _b < arrayObj_1.length; _b++) {
                    var m = arrayObj_1[_b];
                    var match = new __WEBPACK_IMPORTED_MODULE_4__app_models_match__["a" /* Match */]("", "", "", "", "", "", "");
                    match.setMatchDay(item['name']);
                    match.setMatchDate(m['date']);
                    match.setLocalTeam(m['team1']['name']);
                    match.setAwayTeam(m['team2']['name']);
                    match.setLocalScore(m['score1']);
                    match.setAwayScore(m['score2']);
                    match.setLeague(_this.country);
                    /*
                      For the filters-> matchday and team
                     */
                    if (!_this.arrayMatchDays.find(function (item) { return item === match.cMatchDay; })) {
                        _this.arrayMatchDays.push(match.cMatchDay);
                    }
                    if (!_this.arrayTeam.find(function (item) { return item === match.cLocalTeam; })) {
                        _this.arrayTeam.push(match.cLocalTeam);
                    }
                    _this.arrayMatches.push(match);
                }
            }
            /*
               Filtering the data if matchday and team are not All
             */
            if (_this.matchday != "All") {
                _this.arrayMatches = _this.arrayMatches.filter(function (item) { return item.cMatchDay == _this.matchday; });
            }
            if (_this.team != "All") {
                _this.arrayMatches = _this.arrayMatches.filter(function (item) { return item.cLocalTeam == _this.team ||
                    item.cAwayTeam == _this.team; });
            }
        });
    };
    /*
    public filterMatchDay(element: Match, index, array) {
      console.log(this.matchday);
      return (element.cMatchDay == this.matchday);
    }
    public filterTeam(element: Match, index, array) {
      return (element.cLocalTeam == this.team);
    }
    */
    /*
      Go to the details of the match
     */
    HomePage.prototype.goToDetails = function (match) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__match_detail_match_detail__["a" /* MatchDetailPage */], { match: match });
    };
    /*
       Method for logout
     */
    HomePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/alex/Documents/Projects/footballScores/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Football Scores\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="home">\n  <div class="home-head" padding>\n    <h3>Hi {{username}}!</h3>\n    <h6>Choose the league and the year</h6>\n    <ion-list inset>\n          <ion-item>\n              <ion-label>Country</ion-label>\n              <ion-select interface="popover" [(ngModel)]="country">\n                <ion-option value="es" selected>Spain</ion-option>\n                <ion-option value="en">England</ion-option>\n                <ion-option value="de">Germany</ion-option>\n                <ion-option value="it">Italy</ion-option>\n              </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label>Year</ion-label>\n              <ion-select interface="popover" [(ngModel)]="year">\n                <ion-option value="2016-17" selected>2016-17</ion-option>\n                <ion-option value="2015-16">2015-16</ion-option>\n                <ion-option value="2014-15">2014-15</ion-option>\n                <ion-option value="2013-14">2013-14</ion-option>\n                <ion-option value="2012-13">2012-13</ion-option>\n              </ion-select>\n          </ion-item>\n      </ion-list>\n      <b><p> Filter by: </p></b>\n      <div class="filter" inset>\n        <ion-row>\n            <ion-col>\n                <b><ion-label stacked>Matchday</ion-label></b>\n                <ion-select interface="popover" [(ngModel)]="matchday" #item>\n                  <!--<ion-option [value]="All" placeholder="All" selected>All</ion-option>-->\n                  <ion-option *ngFor="let item of arrayMatchDays" [value]="item">{{item}}</ion-option>\n                </ion-select>\n            </ion-col>\n            <ion-col>\n                <b><ion-label stacked>Team</ion-label></b>\n                <ion-select interface="popover" [(ngModel)]="team" #item>\n                  <!--<ion-option [value]="All" placeholder="All" selected>All</ion-option>-->\n                  <ion-option *ngFor="let item of arrayTeam" [value]="item">{{item}}</ion-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n      </div>\n      <div>\n          <button ion-button block (click)="getScores()">Refresh</button>\n      </div>\n    </div>\n    <ion-card *ngFor="let match of arrayMatches" (click)="goToDetails(match)">\n        <ion-card-header>\n            {{ match.cMatchDay }} ({{match.cMatchDate}})\n        </ion-card-header>\n        <ion-card-content>\n            {{ match.cLocalTeam }} {{ match.cLocalScore }} vs {{ match.cAwayTeam }} {{ match.cAwayScore }} \n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/alex/Documents/Projects/footballScores/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_scores__["a" /* ScoresService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_scores__["a" /* ScoresService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(197);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoresService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
    Service for call the repository with the json
 */
var ScoresService = (function () {
    function ScoresService(http) {
        this.http = http;
    }
    ScoresService.prototype.getScores = function (country, year) {
        var results = this.http.get("https://raw.githubusercontent.com/opendatajson/football.json/master/" + year + "/" + country + ".1.json");
        return results;
    };
    return ScoresService;
}());
ScoresService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ScoresService);

//# sourceMappingURL=scores.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map