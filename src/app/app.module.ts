import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {WindowRefService} from "./service/window-ref.service";
import { SkillsComponent } from './skills/skills.component';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import { HomeComponent } from './home/home.component';
import {CarouselModule} from 'primeng/primeng';
import { UtswWorkComponent } from './utsw-work/utsw-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    HomeComponent,
    UtswWorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
