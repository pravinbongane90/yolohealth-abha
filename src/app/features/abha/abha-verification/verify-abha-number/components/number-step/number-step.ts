import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number-step',
    imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './number-step.html',
  styleUrl: './number-step.css',
})
export class NumberStep {


  abhaNumber = ''; 

   // Allow only numbers
  onlyNumber(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;

    // Allow Backspace, Delete, Tab, Arrow Keys
    if (
      charCode === 8 ||
      charCode === 9 ||
      charCode === 37 ||
      charCode === 39 ||
      charCode === 46
    ) {
      return;
    }

    // Block non-numeric keys
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  // Prevent paste of alphabets
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    input.value = input.value.replace(/\D/g, '').slice(0, 14);

    this.abhaNumber = input.value;
  }


  authMethods: string[] = [];

  selectedAuthMethod = '';

  showAuthDropdown = false;

  constructor(private router: Router) {}

  searchNumber() {

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

    this.router.navigate(['/abha/verification/number/number-otp-step']);

  }


  goBack() {

    this.router.navigate([
      '/abha/create'
    ]);

  }


}
