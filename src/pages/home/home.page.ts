import { Component, ViewChild  } from '@angular/core';
import filter from 'lodash-es/filter';
import * as $ from "jquery";
import { VulnsPage } from '../vulns/vulns.page';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
    selector: 'ib-page-home',
    templateUrl: 'home.page.html',    
})
export class HomePage {
    public rootPage: any = HomePage;
    public user: any;
    public aboutpage: any = VulnsPage;

    constructor(public nav: NavController, public loadingCtrl: LoadingController) {
        this.nav = nav;          
    }

    presentLoadingDefault(service : any) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        console.log(service);
        setTimeout(() => {
            loading.dismiss();
        }, 5000);
    }

    ngOnInit(service : any) {
      this.nav.push(VulnsPage, { service : service });
   }       
}
