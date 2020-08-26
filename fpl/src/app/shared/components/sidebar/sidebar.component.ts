import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  id: String;
  data: any;
  addUserForm: FormGroup
  users: any;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,) { }

  ngOnInit() {
    this.users = {}
    let users: any = this.tokenStorage.getUser();

    this.authService.getUser(users.id).subscribe(data => {
      this.users = data;

    })

  }

}
