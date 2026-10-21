import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-step',
  imports: [],
  templateUrl: './profile-step.html',
  styleUrl: './profile-step.css',
})
export class ProfileStep {

  constructor(private router: Router) {}

  @Input() profile: any = {
    fullName: 'Pravin',
    gender: 'Male',
    mobile: '9637998755',
    email: 'pravin@gmail.com',
    abhaNumber: '558644886555',
    abhaAddress: 'pravin_123@abdm',
    dob: '04-07-1995',
    address: 'Pune'
  };

  finishProcess() {

    this.router.navigate(['/abha/create']);

  }

}
