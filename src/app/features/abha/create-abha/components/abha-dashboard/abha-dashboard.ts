import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abha-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abha-dashboard.html',
  styleUrl: './abha-dashboard.css'
})
export class AbhaDashboard {

  constructor(private router: Router) {} 

  usingAadhaar = false;

  @Output() nextStep = new EventEmitter<void>();

  selectAadhaar() {
    this.usingAadhaar = true;
  }

  next() {
    this.nextStep.emit();
  }


  @Output() create = new EventEmitter<void>();

  // @Output() verifyAddress = new EventEmitter<void>();

  // @Output() verifyNumber = new EventEmitter<void>();

  // @Output() fetchByAadhaar = new EventEmitter<void>();

  // @Output() fetchByMobile = new EventEmitter<void>();

  // @Output() qrList = new EventEmitter<void>();


    // This is ABHA Verification Flow  start -->

  openVerifyAbhaAddress() {
    this.router.navigate(['/abha/verification/address']);
  }

  openVerifyAbhaNumber() {
    this.router.navigate(['/abha/verification/number']);
  }

  openFetchByAadhaar() {
    this.router.navigate(['/abha/verification/fetch-aadhaar']);
  }

  openFetchByMobile() {
    this.router.navigate(['/abha/verification/fetch-mobile']);
  }

  openPatientScanProfileList() {
    this.router.navigate(['/abha/profile/patient-profile-list']);
  }

}