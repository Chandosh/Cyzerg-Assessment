import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  checked: boolean;
  searchKey: string;
  users: Array<User>;
  constructor(private userService: UserService) { 
    this.checked = true;
    this.searchKey = '';
  }

  ngOnInit(): void {
    this.changeUsers();
  }

  changeUsers() {
    this.checked = !this.checked;
    this.getUsers();
    if(this.searchKey) {
      this.filterUsers();
    }
  }

  getUsers() {
    if(this.checked) {
      this.users = this.userService.userList.filter(x => x.isActive === false);
    } else {
      this.users = this.userService.userList.filter(x => x.isActive === true);
    }
  }

  filterUsers() {
    this.getUsers();
    let tempList = this.users.filter(x => ( x.name.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()) 
    || x.phone.includes(this.searchKey.toLocaleLowerCase()) ||  x.email?.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase())));
    this.users = tempList;
  }

}
