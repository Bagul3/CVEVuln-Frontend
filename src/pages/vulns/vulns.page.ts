import { Component, ViewChild  } from '@angular/core';
import filter from 'lodash-es/filter';
import * as $ from "jquery";
import { NavController } from 'ionic-angular';

@Component({
    selector: 'ib-page-home',
    templateUrl: 'vulns.page.html',    
})
export class VulnsPage {
    public vulns: any;

    constructor(public nav: NavController) {
        this.nav = nav;           
        this.getWindowsVulns();
    }

    getWindowsVulns() {
        //$.getJSON("http://localhost:51139/api/Vuln?service=WindowsServer2012", cs => {this.vulns = cs;});
        $.ajax("http://localhost:51139/api/Vuln?service=WindowsServer2012", {
            success: function(data) {
               console.log("Data: " + data.Vulnerabilities[0].id);
               this.vulns = data;
               console.log("Vulns: " + this.vulns.Vulnerabilities);
            },
            error: function() {
                alert("Error");
            }
        })
    };   
}