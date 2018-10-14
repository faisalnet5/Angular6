import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { ChapterTwoComponent } from './chapter-two/chapter-two.component';
import { SharedService } from './app.sharedservice';
import { ChapterThreeComponent } from './chapter-three/chapter-three.component';
import { ChapterFourComponent } from './chapter-four/chapter-four.component';
import { ChapterExtraComponent } from './chapter-extra/chapter-extra.component';

const allRoutes: Routes = [
  { path: 'loadimage', component: ChapterExtraComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChapterOneComponent,
    ChapterTwoComponent,
    ChapterThreeComponent,
    ChapterFourComponent,
    ChapterExtraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(allRoutes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
