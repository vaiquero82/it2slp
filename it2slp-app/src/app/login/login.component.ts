import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user;
  @Input() pass;

  constructor(public router: Router, private dataService: DataService, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  submit(m: String) {
      const x = this.authService.authenticate(this.user, this.pass);
      console.log(x);
  }
}
