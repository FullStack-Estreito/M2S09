import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private router: Router) { }

  login(form: NgForm) {
    console.log(form.value);
    this.router.navigate(['/private/home']);
  }

  goToSignup() {
    this.router.navigate(['/public', 'signup'])
  }

}
