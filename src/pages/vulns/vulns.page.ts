import { Component, ViewChild  } from '@angular/core';
import filter from 'lodash-es/filter';
import * as $ from "jquery";
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'ib-page-home',
    templateUrl: 'vulns.page.html',    
})
export class VulnsPage {
    public vulns: string[];
    public shownGroup: null;
    constructor(public nav: NavController, private navParams: NavParams) {
        this.nav = nav;           
        this.vulns = this.getWindowsVulns(navParams.get('service'));
        console.log(this.vulns);
    }

    getWindowsVulns(service : string) {
        var result = $.ajax("http://192.168.0.10:51139/api/Vuln?service=" + service,{ async: false,
            success: function(data) {
               return data;
            },
            error: function() {
                alert("Error");
            }
        });
        return result.responseJSON;        
    };  

    toggleGroup(group : any) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        } else {
            this.shownGroup = group;
        }
    };
    isGroupShown(group: any) {
        return this.shownGroup === group;
    };
}