// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-mobile-abha-linked-profile',
//   imports: [],
//   templateUrl: './mobile-abha-linked-profile.html',
//   styleUrl: './mobile-abha-linked-profile.css',
// })
// export class MobileAbhaLinkedProfile {}



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface AbhaProfileData {

    name: string;

    abhaNumber: string;

    gender: string;

}

@Component({

    selector: 'app-mobile-abha-linked-profile',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './mobile-abha-linked-profile.html',
    styleUrl: './mobile-abha-linked-profile.css'

})

export class MobileAbhaLinkedProfile {

    /*
     * ABHA profiles returned by API
     *
     * Replace this array with your API response later.
     */

    profiles: AbhaProfileData[] = [

        {
            name: 'Pravin Kalyanrao Bongane',
            abhaNumber: 'xx-xxxx-xxxx-7732',
            gender: 'Male'
        },

        {
            name: 'Kalyan Pandharinath Boganne',
            abhaNumber: 'xx-xxxx-xxxx-6400',
            gender: 'Male'
        },

        {
            name: 'Ashabai Kalyan Baganne',
            abhaNumber: 'xx-xxxx-xxxx-5801',
            gender: 'Female'
        }

    ];


    /*
     * Selected profile
     */

    selectedProfile: AbhaProfileData | null = null;


    /*
     * Authentication methods
     */

    authMethods: string[] = [

        'MOBILE_OTP',

        'AADHAAR_OTP'

    ];


    /*
     * Selected authentication method
     */

    selectedAuthMethod = '';


    constructor(
        private router: Router
    ) {}


    /*
     * Select profile
     */

    selectProfile(profile: AbhaProfileData): void {

        this.selectedProfile = profile;
        console.log("profile:", profile)

        /*
         * Reset authentication method
         * whenever profile changes.
         */

        this.selectedAuthMethod = '';

    }


    /*
     * Convert API auth method
     * into readable UI text.
     */

    getAuthMethodLabel(method: string): string {

        switch(method){

            case 'MOBILE_OTP':

                return 'Mobile OTP';


            case 'AADHAAR_OTP':

                return 'Aadhaar OTP';


            default:

                return method;

        }

    }


    /*
     * Next button
     */

    next(): void {

        if(!this.selectedProfile){

            return;

        }


        if(!this.selectedAuthMethod){

            return;

        }


        /*
         * Store selected profile if required
         * for next step.
         */

        console.log(
            'Selected Profile:',
            this.selectedProfile
        );


        console.log(
            'Authentication:',
            this.selectedAuthMethod
        );


        /*
         * Navigate to OTP screen.
         *
         * Change this route if your OTP route
         * has a different path.
         */

        this.router.navigate(['/abha/verification/fetch-mobile/mobile-otp-step']);


    }


    /*
     * Back button
     */

    back(): void {

        this.router.navigate([
            '/abha/create'
        ]);

    }

}