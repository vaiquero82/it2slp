import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public router: Router) { }

  authenticate(user, pass): boolean {

    if (user === 'leiter' && pass === 'leiter' ) {
      console.log('Success');
      this.router.navigate(['./serviceleadview']);
      return true;
    }
    if (user === 'techniker' && pass === 'techniker' ) {
      console.log('Success');
      this.router.navigate(['./serviceengineerview']);
      return true;
    }
    if (user === 'einkauf' && pass === 'einkauf' ) {
      console.log('Success');
      this.router.navigate(['./purchaseview']);
      return true;
    }
    if (user === 'main' && pass === 'main' ) {
      console.log('Success');
      this.router.navigate(['./mainview']);
     return true;
    }
    return false;
  }
}
