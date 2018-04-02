import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-news',  
  templateUrl: 'news.html',
})



export class NewsPage {
options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};

posts: any;

constructor(public navCtrl: NavController, public http: Http) { //Consultar como funciona esto

  this.http.get('http://192.168.1.120:8000/news').map(res => res.json()).subscribe(data => {
    //http://192.168.1.120:8000/news //Cambie el url y en lugar de tomar children el json tiene otra estructura y recibe directamente
    //http://localhost/codeigniter/index.php/tutorial tutorial compu Oscar
      this.posts = data;
  });

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  
}

