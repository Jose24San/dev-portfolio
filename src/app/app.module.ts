import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {WindowRefService} from "./service/window-ref.service";
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import { HomeComponent } from './home/home.component';
import {CarouselModule} from 'primeng/primeng';
import { UtswWorkComponent } from './utsw-work/utsw-work.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { KanuWorkComponent } from './kanu-work/kanu-work.component';
import { FreelanceComponent } from './freelance/freelance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UtswWorkComponent,
    KanuWorkComponent,
    FreelanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule,
    Ng2PageScrollModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
