import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about.page';
import { ContactPage } from '../pages/contact/contact.page';
import { HomePage } from '../pages/home/home.page';
import { TabsPage } from '../pages/tabs/tabs.page';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SimpleFormPage } from '../pages/simple-form/simple-form.page';
import { VulnsPage } from '../pages/vulns/vulns.page';
import { OrderByPipe } from '../pages/custom.modules/orderbypipe.page';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        SimpleFormPage,
        VulnsPage,
        OrderByPipe,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        SimpleFormPage,
        VulnsPage,
    ],
    providers: [SplashScreen],    
})
export class AppModule {
}
