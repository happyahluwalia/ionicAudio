import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { RecordHomePage } from './pages/record/home';
import { StreamHomePage } from './pages/stream/home';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav : Nav;

  rootPage: any = StreamHomePage;

  pages: Array<{title:string, component: any}>;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

    this.pages = [
      { title: 'Record Audio', component: RecordHomePage },
      { title: 'Stream Audio', component: StreamHomePage }
    ];
  }

  openPage(page){
    //Reset content nav to have just this page
    //We wouldnt want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

// will set the menu type to push for all modes, 
// and then set the type to overlay for the ios mode
ionicBootstrap(MyApp, null, {
    menuType: 'push',
    platforms: {
       ios: {
          menuType: 'overlay',
       }
    }
});
