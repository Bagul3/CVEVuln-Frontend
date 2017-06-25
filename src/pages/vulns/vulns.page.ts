import { Component, ViewChild, Pipe, PipeTransform } from '@angular/core';
import filter from 'lodash-es/filter';
import * as $ from "jquery";
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'ib-page-home',
    templateUrl: 'vulns.page.html',    
})

export class VulnsPage {
    public vulns: any;
    public shownGroup: null;
    public lowRiskGroup: string[] = [];
    public medRiskGroup: string[] = [];
    public highRiskGroup: string[] = [];

    constructor(public nav: NavController, private navParams: NavParams) {
        this.nav = nav;    
        this.vulns = this.getWindowsVulns(navParams.get('service'));
    }

    async getWindowsVulns(service : string) {
        // var result = $.ajax("http://192.168.0.10:51139/api/Vuln?service=" + service,{
        //     success: function(data) { 
        //        return data;
        //     },
        //     error: function() {
        //         alert("Error");
        //     }
        // });
        // return result.responseJSON;      
        var result = await $.when($.ajax("http://192.168.0.10:51139/api/Vuln?service=" + service)).then(function(data) {
            return data.responseJSON;
        });
        this.categoriseCVSSScores(result);
    };

    categoriseCVSSScores(vulnerabilities: any) {
        if (vulnerabilities === undefined)
            return;
        for (let vuln of vulnerabilities) {
            if (Number(vuln.cvss_score <= 3)) {
                this.lowRiskGroup.push(vuln);
            }
            else if (Number(vuln.cvss_score >= 7)) {
                this.highRiskGroup.push(vuln);
            }
            else {
                this.medRiskGroup.push(vuln);
            }
        }
    }  

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