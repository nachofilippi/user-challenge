import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UnsubscribeService } from '../services/unsubscribe.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([]),
    AppComponent,
    BrowserAnimationsModule,
  ],
  providers: [UnsubscribeService],
})
export class AppModule {}
