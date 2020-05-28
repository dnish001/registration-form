import { config } from '../data/configuration';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable() //INJECTING SERVICE INTO SERVICE
export class ConfigService {

  private signupData = [];
  private states = [];
  private cities = [];

  constructor(private http: HttpClient) {}

  getConfig() {
    return config;
  }

  //FILTERING STATES BASED ON COUNTRY ID/NAME AND RETURNING
  onCountryChange(name: string) {
    this.states = [];
    for (let i of config.state) {
      if (name == i['country_name']) {
        this.states.push(i);
      }
    }
    return this.states;
  }

  //FILTERING CITIES BASED ON COUNTRY ID/NAME AND RETURNING
  onStateChange(name: string) {
    this.cities = [];
    for (let i of config.city) {
      if (name == i['state_name']) {
        this.cities.push(i);
      }
    }
    return this.cities;
  }


  submitData(formData) {
    this.signupData.push(formData);
  }
  getSignupData() {
    return [...this.signupData];
  }
}

//https://github.com/hiiamrohit/Countries-States-Cities-database/cities.json
//'http://www.iamrohit.in/tag/php-ajax-country-state-city-dropdown

// this.http.get('https://github.com/hiiamrohit/Countries-States-Cities-database/cities.json')
//   .subscribe(data => {
//     console.log('Data', data);
//   })
