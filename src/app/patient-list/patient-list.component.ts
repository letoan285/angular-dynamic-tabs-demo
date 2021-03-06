import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  @Input() patients: any;

  public patient = {
    name: 'Pires',
    surname: 'long',
    twitter: 'nen@gmail.com'
  };

  @Output() addPatient = new EventEmitter<any>();
  @Output() editPatient = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  // onEditPatient(event: any) {
  //   console.log(event);
  // }

}
