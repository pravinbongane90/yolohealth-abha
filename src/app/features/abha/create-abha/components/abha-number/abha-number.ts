import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abha-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abha-number.html',
  styleUrl: './abha-number.css'
})
export class AbhaNumber {

  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();


  // API Response (Dummy)
  abhaStatus = true;

  abhaNum = '91-2656-8717-7732';

  previousOtp() {
    console.log('Back');
    this.previous.emit();
  }


  nextAddress() {
    console.log('Go to ABHA Address');

    this.next.emit();
  }

}