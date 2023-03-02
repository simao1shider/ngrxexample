import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ClientFormComponent } from './components/client/client-form/client-form.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientComponent } from './components/client/client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ClientEffects } from './state/client/client.effect';
import { environment } from 'src/environments/environment';
import { clientReducer } from './state/client/client.reducer';

const stateEffects = [
  ClientEffects
];

const stateReducers = {
  clients: clientReducer
};

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    ClientListComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(stateReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    ReactiveFormsModule,
    EffectsModule.forRoot(stateEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
