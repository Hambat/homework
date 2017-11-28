import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WeatherComponent } from './weather/weather.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { PhonePipe } from './common/pipes/phone.pipe';
import {HttpService} from './http.service';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeatherComponent,
    InfoComponent,
    FooterComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
