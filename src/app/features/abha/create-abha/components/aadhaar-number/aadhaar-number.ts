import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-aadhaar-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aadhaar-number.html',
  styleUrl: './aadhaar-number.css'
})
export class AadhaarNumber {

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

  username = 'Guest';

  consent1 = false;
  consent2 = false;
  consent3 = false;
  consent4 = false;
  consent5 = false;
  consent6 = false;


  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  sendOtp() {

    console.log(this.aadhaarNumber);

    if (this.aadhaarNumber.length !== 12) {
      return;
    }

    // TODO: Call Send OTP API here

    this.next.emit();

  }
    

  goBack() {
      this.back.emit();
  }

  

}