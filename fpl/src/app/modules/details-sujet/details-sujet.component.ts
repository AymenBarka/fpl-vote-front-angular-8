import { SubjectService } from './../../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vote } from 'src/app/services/models/vote';
import { window } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details-sujet',
  templateUrl: './details-sujet.component.html',
  styleUrls: ['./details-sujet.component.css']
})
export class DetailsSujetComponent implements OnInit {
  sujets: any;
  id: String;
  form: Vote = new Vote()
  rep: any;
  totalvoted: any;
  totalVotedYes: any;
  votedResult: any;
  stopVote: boolean;


  constructor(private router :Router ,private route: ActivatedRoute, private service: SubjectService,private toastr: ToastrService) { }

  ngOnInit() {


    this.route.paramMap.subscribe(ParamMap => {
      this.service.getSubject(this.route.snapshot.params.id).subscribe(data => {
        this.sujets = data;
      })
    })
    this.service.getListVoteBySubject(this.route.snapshot.params.id).subscribe(res => {
      this.rep = res;
      const result = this.rep.filter(vot => vot.votedYes === "1")
      if(result.length >0) {
      this.totalVotedYes = result.length;
      this.totalvoted = this.rep.length;
      this.votedResult= Math.round((this.totalVotedYes/this.totalvoted)* 100) ;
      } else {
        this.votedResult =0;
      }
      const oneVote = this.rep.filter(firstVote => firstVote.id_user === this.service.idConnecter)
      if(oneVote.length > 0) {
        this.stopVote = false;
      } else {
        this.stopVote = true;
      }
             
    })
  }
  voteYes() {
    this.form.id_user = this.service.idConnecter;
    this.form.subnum = this.sujets.id;
    this.form.votedYes = "1";
    this.form.votedNo = "0";
    this.service.addVote(this.form).subscribe(data => {
    })
    location.reload();
  }

  voteNo() {
    this.form.subnum = this.sujets.id;
    this.form.id_user = this.service.idConnecter;
    this.form.votedYes = "0";
    this.form.votedNo = "1";
    this.service.addVote(this.form).subscribe(data => {
    })
    location.reload();
  }

}