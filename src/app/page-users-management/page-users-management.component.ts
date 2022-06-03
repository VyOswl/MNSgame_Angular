import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-users-management',
  templateUrl: './page-users-management.component.html',
  styleUrls: ['./page-users-management.component.css']
})
export class PageUsersManagementComponent implements OnInit {

  constructor(private client: HttpClient,
    private tokenIdentification: TokenIdentificationService,
    private router: Router) { }

  public userList: any;
  public admin: boolean = false;
  idConnectedUser: any;

  ngOnInit(): void {
    this.refreshUserList();

    this.tokenIdentification.user.subscribe(
      user => {
        this.admin = user != null && user.droits.includes("ROLE_ADMIN");
        console.log(this.admin);
        this.idConnectedUser = user.id
        console.log(this.idConnectedUser);
      }
    );
  }


  refreshUserList() {
    this.client.get('http://' + environment.serverAddress + '/admin/users-management')
      .subscribe(response => this.userList = response);
  }


  onDelUser(id: number) {
    this.client.delete('http://' + environment.serverAddress + '/admin/delete-user/' + id)
      .subscribe(response =>
        this.refreshUserList());
  }


  onEditUser(id: number) {
    this.router.navigateByUrl('/edit-user/' + id);
    // ---OU---
    this.router.navigate(['/edit-user', id]);
  }

}