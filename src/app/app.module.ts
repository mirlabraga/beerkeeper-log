import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { TableLogBeeColonyComponent } from './components/table-log-bee-colony/table-log-bee-colony.component';
import { MomentModule } from 'ngx-moment';
import { environment } from './../environments/environment';
import { FormLogBeeColonyComponent } from './components/form-log-bee-colony/form-log-bee-colony.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SuccessDialogComponent } from './shared/dialogs/success-dialog/success-dialog.component';
import { LogDetailsComponent } from './components/log-details/log-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TableLogBeeColonyComponent,
    FormLogBeeColonyComponent,
    SuccessDialogComponent,
    LogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // ----- Material UI
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatFormFieldModule,

    // ----- Pagniation
    NgxPaginationModule,
    // ----- Loading
    NgxLoadingModule.forRoot({}),

    // ---- Moment Lib
    MomentModule
  ],
  exports: [
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: environment.apiUrl
        })
      }
    },
    deps: [HttpLink]
  }],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [SuccessDialogComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
