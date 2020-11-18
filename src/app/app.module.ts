import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaloriesCalculatorModule } from './modules/calories-calculator/calories-calculator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CaloriesCalculatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
