import { SubjectService } from './../../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit {
  listSubject:any;
  sprintForm: FormGroup
  sujetId:any;

  constructor(private router:Router,private service : SubjectService) { }

  ngOnInit() {
   this.loadData();
  }
  loadData(){
    this.service.listSubjects().subscribe(data =>{
      this. listSubject = data;
    },(error)=>{
      console.log(error);
    
   });
  }
 
}
