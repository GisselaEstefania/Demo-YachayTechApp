import { InAppBrowser } from '@ionic-native/in-app-browser';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';




@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
  providers:[
    InAppBrowser
  ]
})



export class NewsPageModule {}
