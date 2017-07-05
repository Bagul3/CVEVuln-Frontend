import { Component, ViewChild, Pipe, PipeTransform } from '@angular/core';
import filter from 'lodash-es/filter';
import * as $ from "jquery";
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { BaseApiResult } from '../models/base.api.result';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


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
    public results: any;    

    constructor(public nav: NavController, private navParams: NavParams,public http: Http) {
        this.nav = nav;    
        this.http = http;
        this.vulns = this.getWindowsVulns(navParams.get('service')).subscribe(val => console.log(val));
    }    

    getWindowsVulns(service: any) : Observable<BaseApiResult[]> {
         if (service === 'undefined')
            return;
         var result: any;
         result = this.http.get("http://localhost:51139/api/Vuln?service=" + service)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }    

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


// async getWindowsVulns(service : string) {
    //     var result = $.ajax("http://localhost:51139/api/Vuln?service=" + service,
    //     {
    //         async:false,
    //         success: function(data) { 
    //            return data;
    //         },
    //         error: function() {
    //             alert("Error");
    //         }
    //     });
    //     this.categoriseCVSSScores(result);
    //     return result.responseJSON;      
    //     // var result = $.when($.ajax("http://localhost:51139/api/Vuln?service=" + service)).done(function(data) {
    //     //     return data.responseJSON;
    //     // });
    // };