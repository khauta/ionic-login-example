import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {NavController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {Http} from '@angular/http';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login = {}
  randomeNumber;
  url='https://my.msgwow.com/api/sendhttp.php?authkey=199770AmpOzGVdY6j5a924ab3&mobiles=917758846988&message=message&sender=ABCDEF&route=1&country=91'
  submitted = false;
  constructor(public navCtrl: NavController, public http: Http) {

  }

onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      this.randomeNumber = Math.floor(Math.random() * 60000);
      const message = `Your OTP for msgshow is ${this.randomeNumber}`
      const url = `https://my.msgwow.com/api/sendhttp.php?authkey=199770AmpOzGVdY6j5a924ab3&mobiles=${this.login.mobile}&message=${message}&sender=loksApps&route=1&country=91`
      this.http.get(url).subscribe(res=> console.log('response is ',res))
      console.log(this.login.mobile)
      // this.userData.login(this.login.username);

       //this.navCtrl.push(TabsPage);
    }
  }
}