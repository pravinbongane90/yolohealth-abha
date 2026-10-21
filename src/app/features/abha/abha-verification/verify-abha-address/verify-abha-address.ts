import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AddressStep } from './components/address-step/address-step';
import { AuthModeStep } from './components/auth-mode-step/auth-mode-step';
import { OtpStep } from './components/otp-step/otp-step';
import { ProfileStep } from './components/profile-step/profile-step';

@Component({
  selector: 'app-verify-abha-address',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './verify-abha-address.html',
  styleUrl: './verify-abha-address.css'
})
export class VerifyAbhaAddress {

  step = 1;

  

}