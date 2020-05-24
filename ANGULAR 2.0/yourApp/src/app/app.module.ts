import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { ShadowDirective } from './shadow.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ReverseStrPipe,
    ShadowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
