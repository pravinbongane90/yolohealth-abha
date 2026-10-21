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
  templateUrl: './aadhaar-step.html',
  styleUrl: './aadhaar-step.css',
})
export class AadhaarStep {

  constructor(private router: Router) {}
  
  aadhaarNumber = ''; 

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

    input.value = input.value.replace(/\D/g, '').slice(0, 12);

    this.aadhaarNumber = input.value;
  }


  sendOTP() {

    this.router.navigate(['/abha/verification/fetch-aadhaar/aadhaar-otp-step']);

  }


  goBack() {

    this.router.navigate([
      '/abha/create'
    ]);

  }


}
