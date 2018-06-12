import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user;
  @Input() pass;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  submit(m: String) {
      if (this.user === 'leiter' && this.pass === 'leiter' ) {
        console.log('Success');
        this.router.navigate(['./serviceleadview']);
      }
      if (this.user === 'techniker' && this.pass === 'techniker' ) {
        console.log('Success');
        this.router.navigate(['./serviceengineerview']);
      }
      if (this.user === 'einkauf' && this.pass === 'einkauf' ) {
        console.log('Success');
        this.router.navigate(['./purchaseview']);
      }
  }
}
