import { SubjectService } from './../../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  form: FormGroup;
  id:any;
  constructor( private router : Router , private sujet :SubjectService,private toastr: ToastrService ) { }

  ngOnInit() {
    this.form = new FormGroup({
      titre : new FormControl(''),
      description : new FormControl(''),
      createdBy: new FormControl(this.sujet.idConnecter)

    })
  }
  addSubject(){
  
this.sujet.addSubject(this.form.value).subscribe(data =>{
  this.toastr.success('your subject has added with  Successful!');
  this.router.navigate(['/sondage/listSubject']);

  
})
  }
}
