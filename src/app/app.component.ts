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
  @ViewChild('patientEdit') editPatientTemplate: any;
  @ViewChild('about') aboutTemplate: any;
  @ViewChild('patientAdd') patientAddTemplate: any;
  @ViewChild(TabsComponent) tabsComponent: any;

  Patient = {name: 'no name', age: Math.round(Math.random() * 100) };
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
    },
    {
      id: 6,
      name: 'onec morea agiro',
      surname: 'More',
      twitter: '@moresara'
    }
  ];
  ngOnInit() {
    console.log(this.Patient);
  }

  onEditPerson(person) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`,
      this.editPersonTemplate,
      person,
      true
    );
  }
  onEditPatient(patient: any): void {
    this.tabsComponent.openTab(
      `Editing ${patient.name}`,
      this.editPatientTemplate,
      patient,
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
  onPatientFormSubmit(dataModel: any): void {
    console.log('patient info ', dataModel);
    if (dataModel.id > 0) {
      this.patients = this.patients.map(patient => {
        if (patient.id === dataModel.id) {
          return dataModel;
        } else {
          return patient;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.patients.push(dataModel);
    }
    console.log(dataModel);
    // close the tab
    this.tabsComponent.closeActiveTab();
  }

  onOpenAbout() {
    this.tabsComponent.openTab('About', this.aboutTemplate, {}, true);
  }
  onAddPatient(patient: any) {
    console.log('add new patient', patient);
    this.tabsComponent.openTab(`Add Patient ${patient.name}`, this.patientAddTemplate, patient, true);
  }

}
