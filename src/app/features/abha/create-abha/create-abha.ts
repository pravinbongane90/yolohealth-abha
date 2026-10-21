import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbhaDashboard } from './components/abha-dashboard/abha-dashboard';
import { AadhaarNumber } from './components/aadhaar-number/aadhaar-number';
import { AadhaarOtp} from './components/aadhaar-otp/aadhaar-otp'; 
import { AbhaNumber} from './components/abha-number/abha-number'; 
import { AbhaAddress} from './components/abha-address/abha-address';
import { AbhaNumberAddress} from './components/abha-number-address/abha-number-address';
import { AbhaProfile} from './components/abha-profile/abha-profile';

@Component({
  selector: 'app-create-abha',
  standalone: true,
  imports: [
    CommonModule,
    AbhaDashboard,
    AadhaarNumber,
    AadhaarOtp,
    AbhaNumber,
    AbhaAddress,
    AbhaNumberAddress,
    AbhaProfile
  ],
  templateUrl: './create-abha.html',
  styleUrl: './create-abha.css'
})
export class CreateAbha {

  // 0 = abha-dashboard
  // 1 = Aadhaar Number
  // 2 = Aadhaar OTP
  // 3 = Link Mobile (optional-if you want to change registed number on abha, then go to the 3rd step)
  // 4 = ABHA Number
  // 5 = ABHA Address
  // 6 = ABHA Address/Number/Abha Card
  // 7 = ABHA Profile

  step = 0;

  openAadhaarNumber() {
    this.step = 1;
  }

  openAadhaarOtpVerification() {
    this.step = 2;
  }

  // openMobile() {
  //   this.step = 4;
  // }

   openAbhaNumber() {
    this.step = 4;
  }

  openAbhaAddress() {
    this.step = 5;
  }

  openAbhaNumberAndAddress() {
    this.step = 6;
  }

  openProfile() {
    this.step = 7;
  }

  backToDashboard() {
    this.step = 0;
  }

  backToAadhaarNumber() {
    this.step = 1;
  }

  backToAadhaarOtp() {
    this.step = 2;
  }

  backToAbhaNumber() {
    this.step = 4;
  }

  // backToAbhaNumber() {
  //   this.step = 5;
  // }

  backToAbhaAddress() {
    this.step = 5;
  }

  backToAbhaNumberAddress() {
    this.step = 6;
  }

  
}