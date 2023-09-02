import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container/container.component';
import { TodoModule } from './modules/todo/todo.module';
import { MaterialModule } from './modules/material/material.module';
import { StatisticModule } from './modules/statistic/statistic.module';
import { DataProviderService } from './services/dataProvider/data-provider.service';
import { STORAGE_TOKEN } from 'src/tokens/storageToken';
import { ActivatedRouteSnapshot, RouterLink, RouterModule } from '@angular/router';
import { LocalStorageService } from './helpers/localStorage.class';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    
  ],
  providers: [
    { provide: STORAGE_TOKEN, useClass: LocalStorageService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
