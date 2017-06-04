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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UtswWorkComponent
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
