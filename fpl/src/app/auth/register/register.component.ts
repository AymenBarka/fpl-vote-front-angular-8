import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  photo: any = File;
  constructor(private authService: AuthService, private router: Router, private dialogRef: MatDialogRef<RegisterComponent>,private toastr: ToastrService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),

    });
  }
  register() {
    if (this.registerForm.status == 'VALID') {
      this.authService.signUp(this.registerForm.value).subscribe(
        res => {
          this.toastr.success('Your registration has been successfully completed!');

          this.close()
        },


      );
      this.registerForm.reset()
    }else{
      this.toastr.error('Check your informations!',' error',{
        timeOut:3000,
      });
    }

   
  }
  close(){
    this.dialogRef.close()
  }
}
