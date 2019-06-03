import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  @Input() Patient: any;
  @Output() savePatient = new EventEmitter<any>();
  public createPatientForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initCreatePatientForm();
  }
  initCreatePatientForm(): void {
    this.createPatientForm = this.formBuilder.group({
      name: 'le thanh loan',
      twitter: 'tan@gmail.com',
      surname: 'gaeaa'
    });
  }
  onPatientFormSubmit(): void {
    console.log('submit patient form ', this.createPatientForm.value.name);
    const dataModel = this.createPatientForm.value;
    this.savePatient.emit(dataModel);
  }

}
