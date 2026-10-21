import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-abha-address',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './abha-address.html',
  styleUrl: './abha-address.css'
})
export class AbhaAddress {

  enteredAddress = '';

  available = false;


  // selectedAddress = '';

  // available = false;

  // suggestions: string[] = [];

  // API call here

  // available = false;

  suggestions = [
      'pravin_1991041991',
      'pravin1991',
      'pravin.health',
      'pravin_bongane'
    ];

  selectedAddress = "Please select abha address";

  onAddressChange() {

    this.enteredAddress = this.selectedAddress;

  }


  checkAvailability() {

    console.log('Check Avalability')

    this.available = true;

    
  }
  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  previousBtn() {

    console.log('Back');
    this.previous.emit();

  }

  nextBtn() {

    console.log(this.selectedAddress);
    this.next.emit();

  }

}