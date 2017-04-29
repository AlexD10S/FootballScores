import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchDetailPage } from './match-detail';

@NgModule({
  declarations: [
    MatchDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchDetailPage),
  ],
  exports: [
    MatchDetailPage
  ]
})
export class MatchDetailModule {}
