import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abha-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abha-profile.html',
  styleUrl: './abha-profile.css'
})
export class AbhaProfile {

  constructor(private router: Router) {}

  @Input() profile: any = {
    fullName: 'Pravin',
    gender: 'Male',
    mobile: '9637998755',
    email: 'pravin@gmail.com',
    abhaNumber: '558644886555',
    abhaAddress: 'pravin_123@abdm',
    dob: '04-07-1995',
    address: 'Pune'
  };

  @Output() finish = new EventEmitter<void>();

  finishProcess() {

    this.finish.emit();

    this.router.navigate(['/abha/create']);

  }

}