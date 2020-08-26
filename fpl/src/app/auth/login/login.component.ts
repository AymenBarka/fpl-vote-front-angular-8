import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msg: String;
  isLoginFailed = false;
  hide: boolean;
  constructor(private service: AuthService, private router: Router, private tokenStorage: TokenStorageService, private dialogRef: MatDialogRef<LoginComponent>,private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),

    });
    this.hide = true
  }
  login() {

    this.service.login(this.loginForm.value).pipe(first())

      .subscribe(
        data => {


          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false
          this.close()
          this.toastr.success('Login Successful!');
          this.router.navigate(['/sondage/listSubject']);

        },
        err => {
          if (err.error['message'] == 'Unauthorized') {
               
            this.isLoginFailed = true
               }
        });
        
  }
  close() {
    this.dialogRef.close();
  }

}
