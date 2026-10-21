import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-step',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './address-step.html',
  styleUrl: './address-step.css'
})
export class AddressStep {

  // constructor(private router: Router) {}

  // searchAddress() {

  //   // API Call

  //   this.router.navigate([
  //     '/abha/verification/address/auth-mode-step'
  //   ]);

  // }


  abhaAddress = ''; 

  authMethods: string[] = [];

  selectedAuthMethod = '';

  showAuthDropdown = false;

  constructor(private router: Router) {}

  searchAddress() {

    // Replace with your API call

    const response = {
      status: 1,
      data: {
        authMethods: [
          'MOBILE_OTP',
          'AADHAAR_OTP'
        ]
      }
    };

    if (response.status === 1) {

      this.authMethods = response.data.authMethods;

      this.showAuthDropdown = true;

    }

  }

  clickNext() {

    this.router.navigate(['/abha/verification/address/otp-step']);

  }


  goBack() {

    this.router.navigate([
      '/abha/create'
    ]);

  }

}