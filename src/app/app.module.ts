import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapaComponent } from './components/mapa/mapa.component';



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'pk.eyJ1IjoianJleTE5NzciLCJhIjoiY2toM3plZWRuMGZiYjJ5cXl2Z3BuNjZvdSJ9.Rs5v50HonGSN--Z65PvTcA-Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
