import { Component, ViewChild  } from '@angular/core';
import filter from 'lodash-es/filter';
import * as $ from "jquery";
import { VulnsPage } from '../vulns/vulns.page';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'ib-page-home',
    templateUrl: 'home.page.html',    
})
export class HomePage {
    public rootPage: any = HomePage;
    public user: any;
    public aboutpage: any = VulnsPage;

    constructor(public nav: NavController) {
        this.nav = nav;          
    }

    ngOnInit(service : any) {
      this.nav.push(VulnsPage, { service : service });
   }       
}
