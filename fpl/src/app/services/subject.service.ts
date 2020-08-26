import { Vote } from './models/vote';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { Subject } from './models/subject';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http : HttpClient, private tokenStorage:TokenStorageService) { }
  url ='http://localhost:8080/sujet/';
  url1 = 'http://localhost:8080/vote/';

  userConnecter = this.tokenStorage.getUser();
  idConnecter = this.userConnecter.id;
  addSubject(subject: Subject): Observable<any>{
    return this.http.post(`${this.url}` + 'add-subject' , subject)
  }
  listSubjects(): Observable<any>{
    return this.http.get(`${this.url}` + 'ListSubjects' )
  }
  getSubject(id:any):Observable<any>{
    return this.http.get(`${this.url}` + 'getSubject' + '/' + `${id}`,httpOptions );
  }

  addVote(vote: Vote): Observable<any>{
    return this.http.post(`${this.url1}` + 'add' , vote)
  }
  getListVoteBySubject(id:any):Observable<any>{
    return this.http.get(`${this.url1}` + 'listVoteSubject'+ '/' + `${id}`,httpOptions)
  }

}
