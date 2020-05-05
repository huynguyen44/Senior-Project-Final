import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {allStates, initialCourses, initialRoles} from '../../../data/static-data';
import {CustomCourse, CustomState, Registrant, RegistrantRole} from '../../../data/custom-types';
import {RegistrantAction} from '../../../actions/registrant.action';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  saintName: string;
  lastName: string;
  firstName: string;
  address: string;
  zipCode: bigint;

  @Input() inputRegistrant: Registrant;
  @Input() username: string;

  private showForm = false;
  private possibleStates = allStates;
  private possibleRoles: RegistrantRole[] = JSON.parse(JSON.stringify(initialRoles));
  private possibleCourses: CustomCourse[] = JSON.parse(JSON.stringify(initialCourses));
  private tempRegistrant: Registrant;


  private emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  private fullForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    middleName: new FormControl(''),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: this.emailFormControl,
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    roles: new FormControl('', [Validators.required]),
    courses: new FormControl('', [Validators.required]),
    saintName: new FormControl('', [Validators.required]),
  });
  // matcher = new MyErrorStateMatcher();

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  constructor(private registrantAction: RegistrantAction) {
  }

  ngOnInit() {
    // console.log('REGISTRANT NAME: ' + this.inputRegistrant.firstName);

    if (this.inputRegistrant) {
      this.tempRegistrant = JSON.parse(JSON.stringify(this.inputRegistrant));
    } else {
      this.tempRegistrant = new Registrant();
    }

    this.setUsername();
    // console.log('EXCUSE ME: ' + this.tempRegistrant.roles[0].roleName);
  }

  getErrorMessage() {
    return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(data) {
    // tslint:disable-next-line:max-line-length
    const allInfo = 'My name is: ' + this.tempRegistrant.saintName + this.tempRegistrant.lastName +
      this.tempRegistrant.middleName + this.tempRegistrant.firstName + '.\nMy address is: ' +
      this.tempRegistrant.address + ', ' + this.tempRegistrant.city + this.tempRegistrant.state.stateAbbr +
      this.tempRegistrant.zipCode + '.\nMy email is' + this.tempRegistrant.email;
    alert(allInfo);
  }

  onSubmitNew() {
    this.registrantAction.addRegistrant(this.tempRegistrant);
    this.toggleShowForm();
    this.clearRegistrant();
  }

  clearRegistrant() {
    this.tempRegistrant = new Registrant();
    this.setUsername();
  }

  setUsername() {
    if (this.username) {
      this.tempRegistrant.username = this.username;
    } else {
      this.tempRegistrant.username = 'wow_I_messed_up';
    }
  }

  myCompare(objOne: any, objTwo: any): boolean {
    return objOne && objTwo ? objOne.id === objTwo.id : objOne === objTwo;
  }

  stateCompare(objOne: CustomState, objTwo: CustomState): boolean {
    return objOne && objTwo ? objOne.stateAbbr === objTwo.stateAbbr : objOne === objTwo;
  }

  toggleShowForm() {
    this.showForm = !this.showForm;
  }
}
