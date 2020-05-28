import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigService } from '../services/configServices';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  pass: boolean = true;

  dataList = [];
  countries = [];
  states = [];
  cities = [];

  public passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(.{8,})";
  public mobilePattern = "^[6-9]{1}[0-9]{9}$"

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    //INITILIZING CONTROLS
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(this.mobilePattern)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(this.passwordPattern)]),
      country: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
    });

    //GETTING COUNTRIES FROM CONFIG_SERVICE
    this.countries = this.configService.getConfig().country;
  }

  //GETTING STATES, BASED ON STATE ID/NAME CHOOSEN BY USER
  countryChange(name) {
    this.states = this.configService.onCountryChange(name);
  }

  //GETTING CITIES, BASED ON CITY ID/NAME CHOOSEN BY USER
  stateChange(name:string) {
    this.cities = this.configService.onStateChange(name);
  }


  onSubmit() {
    if(this.signupForm.invalid) {
      return;
    }

    const date = new Date();
    this.dataList.push(
      {
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        phone: this.signupForm.value.phone,
        password: this.signupForm.value.password,
        country: this.signupForm.value.country,
        state: this.signupForm.value.state,
        city: this.signupForm.value.city,
        date: this.signupForm.value.date,
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      }
    )
    this.configService.submitData(this.dataList);
    console.log('FORM VALUES___', this.dataList);

    this.signupForm.reset();
  }
}
