import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-verify-abha-number',
  imports: [RouterOutlet],
  templateUrl: './verify-abha-number.html',
  styleUrl: './verify-abha-number.css',
})
export class VerifyAbhaNumber {

  step = 1
  
}
