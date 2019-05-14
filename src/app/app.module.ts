import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people/people-list.component';
import { PersonEditComponent } from './people/person-edit.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { DynamicTabsDirective } from './tabs/dynamic-tabs.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonEditComponent,
    TabsComponent,
    TabComponent,
    DynamicTabsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // register the dynamic components here
  entryComponents: [TabComponent]
})
export class AppModule { }
