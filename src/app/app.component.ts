import { Component, ViewChild, OnInit } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-dynamic-tabs';
  @ViewChild('personEdit') editPersonTemplate: any;
  @ViewChild('about') aboutTemplate: any;
  @ViewChild(TabsComponent) tabsComponent: any;

  patient = {name: 'no name', age: Math.round(Math.random() * 100) };
  people = [
    {
      id: 1,
      name: 'Juri',
      surname: 'Strumpflohner',
      twitter: '@juristr'
    },
    {
      id: 2,
      name: 'norita',
      surname: 'Strumpflohner',
      twitter: '@norita'
    },
    {
      id: 3,
      name: 'surika',
      surname: 'Alan hner',
      twitter: '@sara'
    }
  ];
  patients = [
    {
      id: 1,
      name: 'Juri',
      surname: 'Strumpflohner',
      twitter: '@juristr'
    },
    {
      id: 2,
      name: 'norita',
      surname: 'Strumpflohner',
      twitter: '@norita'
    },
    {
      id: 3,
      name: 'surika',
      surname: 'Alan hner',
      twitter: '@sara'
    },
    {
      id: 4,
      name: 'surika mura',
      surname: 'Alan hner',
      twitter: '@sara'
    },
    {
      id: 5,
      name: 'surika agiro',
      surname: 'Alan hner',
      twitter: '@sara'
    }
  ];
  ngOnInit() {
    console.log(this.patient);
  }

  onEditPerson(person) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`,
      this.editPersonTemplate,
      person,
      true
    );
  }

  onAddPerson() {
    this.tabsComponent.openTab('New Person', this.editPersonTemplate, {}, true);
  }

  onPersonFormSubmit(dataModel) {
    if (dataModel.id > 0) {
      this.people = this.people.map(person => {
        if (person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.people.push(dataModel);
    }
    console.log(dataModel);
    // close the tab
    this.tabsComponent.closeActiveTab();
  }

  onOpenAbout() {
    this.tabsComponent.openTab('About', this.aboutTemplate, {}, true);
  }

}
