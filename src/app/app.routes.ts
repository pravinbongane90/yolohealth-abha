import { Routes } from '@angular/router';

import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';
import { CreateAbha } from './features/abha/create-abha/create-abha';
import { AbhaVerification } from './features/abha/abha-verification/abha-verification';
import { AbhaScanAndShareProfile } from './features/abha/abha-scan-and-share-profile/abha-scan-and-share-profile';

import { SearchAbha } from './features/abha/search-abha/search-abha';
import { Home } from './features/dashboard/home/home';


import { VerifyAbhaAddress } from './features/abha/abha-verification/verify-abha-address/verify-abha-address';

import { AddressStep } from './features/abha/abha-verification/verify-abha-address/components/address-step/address-step';
// import { AuthModeStep } from './features/abha/abha-verification/verify-abha-address/components/auth-mode-step/auth-mode-step';
import { OtpStep } from './features/abha/abha-verification/verify-abha-address/components/otp-step/otp-step';
import { ProfileStep } from './features/abha/abha-verification/verify-abha-address/components/profile-step/profile-step';

import { VerifyAbhaNumber } from './features/abha/abha-verification/verify-abha-number/verify-abha-number';

import { NumberStep } from './features/abha/abha-verification/verify-abha-number/components/number-step/number-step';
import { NumberOtpStep } from './features/abha/abha-verification/verify-abha-number/components/number-otp-step/number-otp-step';
import { NumberProfileStep } from './features/abha/abha-verification/verify-abha-number/components/number-profile-step/number-profile-step';


import { FetchByAadhaar } from './features/abha/abha-verification/fetch-by-aadhaar/fetch-by-aadhaar';

import { AadhaarStep } from './features/abha/abha-verification/fetch-by-aadhaar/components/aadhaar-step/aadhaar-step';
import { AadhaarOtpStep } from './features/abha/abha-verification/fetch-by-aadhaar/components/aadhaar-otp-step/aadhaar-otp-step';
import { AadhaarProfileStep } from './features/abha/abha-verification/fetch-by-aadhaar/components/aadhaar-profile-step/aadhaar-profile-step';


import { FetchByMobile } from './features/abha/abha-verification/fetch-by-mobile/fetch-by-mobile';

import { MobileStep } from './features/abha/abha-verification/fetch-by-mobile/components/mobile-step/mobile-step';
import { MobileAbhaLinkedProfile } from './features/abha/abha-verification/fetch-by-mobile/components/mobile-abha-linked-profile/mobile-abha-linked-profile';
import { MobileOtpStep } from './features/abha/abha-verification/fetch-by-mobile/components/mobile-otp-step/mobile-otp-step';
import { MobileProfileStep } from './features/abha/abha-verification/fetch-by-mobile/components/mobile-profile-step/mobile-profile-step';

import { PatientProfileList } from './features/abha/abha-scan-and-share-profile/components/patient-profile-list/patient-profile-list';
import { PatientProfileDetails } from './features/abha/abha-scan-and-share-profile/components/patient-profile-details/patient-profile-details';


// import { QrCodeList } from './features/abha/abha-verification/qr-code-list/qr-code-list';

export const routes: Routes = [

  {
    path: '',
    component: DashboardLayout,
    children: [

      {
        path: '',
        redirectTo: 'abha/create',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        component: Home
      },

      {
        path: 'abha/create',
        component: CreateAbha
      },

      {
        path: 'abha/verification',
        component: AbhaVerification,
        children: [

          {
            path: '',
            redirectTo: 'address',
            pathMatch: 'full'
          },

          {
            path: 'address',
            component: VerifyAbhaAddress,
            children: [

              {
                path: '',
                redirectTo: 'address-step',
                pathMatch: 'full'
              },

              {
                path: 'address-step',
                component: AddressStep
              },

              // {
              //   path: 'auth-mode-step',
              //   component: AuthModeStep
              // },

              {
                path: 'otp-step',
                component: OtpStep
              },

              {
                path: 'profile-step',
                component: ProfileStep
              }

            ]
          },

          {
            path: 'number',
            component: VerifyAbhaNumber,
            children: [

              {
                path: '',
                redirectTo: 'number-step',
                pathMatch: 'full'
              },

              {
                path: 'number-step',
                component: NumberStep
              },

              {
                path: 'number-otp-step',
                component: NumberOtpStep
              },

              {
                path: 'number-profile-step',
                component: NumberProfileStep
              }

            ]
          },

          {
            path: 'fetch-aadhaar',
            component: FetchByAadhaar,
            children: [

              {
                path: '',
                redirectTo: 'aadhaar-step',
                pathMatch: 'full'
              },

              {
                path: 'aadhaar-step',
                component: AadhaarStep
              },

              {
                path: 'aadhaar-otp-step',
                component: AadhaarOtpStep
              },

              {
                path: 'aadhaar-profile-step',
                component: AadhaarProfileStep
              }

            ]
          },

          {
            path: 'fetch-mobile',
            component: FetchByMobile,
            children: [

              {
                path: '',
                redirectTo: 'mobile-step',
                pathMatch: 'full'
              },

              {
                path: 'mobile-step',
                component: MobileStep
              },

              {
                path: 'mobile-abha-linked-profile',
                component: MobileAbhaLinkedProfile
              },

              {
                path: 'mobile-otp-step',
                component: MobileOtpStep
              },

              {
                path: 'mobile-profile-step',
                component: MobileProfileStep
              }

            ]
          },

          // {
          //   path: 'qr-code-list',
          //   component: QrCodeList
          // },
        ]
      },

      {
        path: 'abha/profile',
        component: AbhaScanAndShareProfile,
        children: [

          {
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full'
          },

          {
            path: 'patient-profile-list',
            component: PatientProfileList
          },

          {
            path: 'patient-profile-details',
            component: PatientProfileDetails
          },
        ]
      },

      {
        path: 'abha/search',
        component: SearchAbha
      }

    ]
  },

  {
    path: '**',
    redirectTo: 'abha/create'
  }

];