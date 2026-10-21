

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-step',
    imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './mobile-step.html',
  styleUrl: './mobile-step.css',
})
export class MobileStep {


  mobileNumber = ''; 

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

    input.value = input.value.replace(/\D/g, '').slice(0, 10);

    this.mobileNumber = input.value;
  }




  constructor(private router: Router) {}

  searchNumber() {

    // Replace with your API call

    this.router.navigate(['/abha/verification/fetch-mobile/mobile-abha-linked-profile']);


  }

  // clickNext() {

  //   this.router.navigate(['/abha/verification/fetch-mobile/mobile-otp-step']);

  // }


  goBack() {

    this.router.navigate(['/abha/create']);

  }


}
