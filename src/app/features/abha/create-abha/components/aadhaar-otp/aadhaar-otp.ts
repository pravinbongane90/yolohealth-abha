import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aadhaar-otp',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './aadhaar-otp.html',
  styleUrl: './aadhaar-otp.css'
})
export class AadhaarOtp implements OnInit, OnDestroy {

  otp = '';
  mobileNumber = '';

  seconds = 59;
  timer: any;
  showResend = false;

  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  // Only allow numbers in OTP
  onlyOtpNumber(event: any): void {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    this.otp = event.target.value;
  }

  // Only allow numbers in Mobile
  onlyMobileNumber(event: any): void {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');

    if (event.target.value.length > 10) {
      event.target.value = event.target.value.substring(0, 10);
    }

    this.mobileNumber = event.target.value;
  }

  startTimer(): void {

    if (this.timer) {
      clearInterval(this.timer);
    }

    this.showResend = false;
    this.seconds = 59;

    this.timer = setInterval(() => {

      this.seconds--;

      if (this.seconds <= 0) {

        clearInterval(this.timer);

        this.showResend = true;

      }

    }, 1000);

  }

  resendOtp(): void {

    // TODO:
    // Call Resend OTP API here

    console.log('Resend OTP');

    this.startTimer();

  }

  get timerText(): string {

    const sec = this.seconds.toString().padStart(2, '0');

    return `00:${sec}`;

  }

  back(): void {

    this.previous.emit();

  }

  verifyOtp(): void {

    if (this.otp.length !== 6) {

      alert('Please enter a valid 6 digit OTP');

      return;

    }

    if (this.mobileNumber.length !== 10) {

      alert('Please enter a valid 10 digit Mobile Number');

      return;

    }

    // TODO:
    // Call Verify OTP API here

    console.log('OTP Verified');

    this.next.emit();

  }

}