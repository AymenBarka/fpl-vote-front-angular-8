import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { SignUpInfo } from './models/signup-info';
import { SigninInfo } from './models/signin-info';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};
const TOKEN_KEY = 'AuthToken';
const TOKEN = 'token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { 
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  url = 'http://localhost:8080/api/auth/'
  URL1 = environment.url;

  
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  signUp(signupInfo: SignUpInfo): Observable<any> {

    return this.http.post(this.url + 'signup', signupInfo, httpOptions);

  }
  login(signinInfo: SigninInfo): Observable<any> {
    return this.http.post(this.url + 'signin', signinInfo, httpOptions)

  }
  loggedIn() {
    return sessionStorage.getItem(TOKEN);
  }
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.URL1}` + '/user/getall');
  }
  getUser(id:any):Observable<any>{
    return this.http.get(`${this.URL1}` + '/user/getOne' + '/' + `${id}`,httpOptions );
  }
}
