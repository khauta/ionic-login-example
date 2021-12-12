import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html',
  styleUrls:['app.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyApp {
  @ViewChild(Nav) nav: Nav
  rootPage:any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }
}
