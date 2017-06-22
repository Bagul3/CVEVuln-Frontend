import { Component, ViewChild  } from '@angular/core';
import filter from 'lodash-es/filter';
import * as $ from "jquery";
import { NavController } from 'ionic-angular';

@Component({
    selector: 'ib-page-home',
    templateUrl: 'vulns.page.html',    
})
export class VulnsPage {
    public vulns: string[];
    public shownGroup: null;
    constructor(public nav: NavController) {
        this.nav = nav;           
        this.vulns = this.getWindowsVulns();
        console.log(this.vulns);
    }

    getWindowsVulns() {
        var result = $.ajax("http://localhost:51139/api/Vuln?service=WindowsServer2012",{ async: false,
            success: function(data) {
               return data;
            },
            error: function() {
                alert("Error");
            }
        });
        return result.responseJSON;        
    };  

    toggleGroup(group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        } else {
            this.shownGroup = group;
        }
    };
    isGroupShown(group) {
        return this.shownGroup === group;
    };
}