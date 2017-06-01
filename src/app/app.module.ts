import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {WindowRefService} from "./service/window-ref.service";
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
