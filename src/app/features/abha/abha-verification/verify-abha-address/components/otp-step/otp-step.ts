import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp-step.html',
  styleUrl: './otp-step.css'
})
export class OtpStep {

  otp = '';

  counter = 59;

  timer: any;

  errorMessage = '';

  successMessage = '';

  constructor(private router: Router){

      this.startTimer();

  }

  startTimer(){

      this.counter = 59;

      clearInterval(this.timer);

      this.timer = setInterval(()=>{

          this.counter--;

          if(this.counter==0){

              clearInterval(this.timer);

          }

      },1000);

  }

  validateOTP(){

      this.errorMessage='';

      if(this.otp.length>6){

          this.otp=this.otp.substring(0,6);

      }

  }

  verifyOTP(){

      if(this.otp.length!=6){

          this.errorMessage="Please enter valid 6 digit OTP";

          return;

      }

      this.successMessage="OTP Verified Successfully";

      setTimeout(()=>{

          this.router.navigate(['/abha/verification/address/profile-step']);

      },800);

  }

  resendOTP(){

      this.successMessage="OTP Sent Successfully";

      this.startTimer();

  }

  goBack(){

      this.router.navigate(['/abha/verification/address/address-step']);

  }

}