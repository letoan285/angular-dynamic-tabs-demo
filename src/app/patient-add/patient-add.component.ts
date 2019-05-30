import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  public patient = {
    name: 'Peter',
      surname: 'horhe',
      twitter: 'hoed@gmail.com'
  };
  constructor() { }

  ngOnInit() {
  }

}
