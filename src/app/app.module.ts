import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CollapsableComponent } from './collapsable/collapsable.component';
import { DogLoaderComponent } from './dog-loader/dog-loader.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CollapsableComponent,
    NotesComponent,
    DogLoaderComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
