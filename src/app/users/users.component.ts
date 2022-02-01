import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  public userList: [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsersList().subscribe(
      (res) => {
        this.userList = res["data"];
      },
      (error) => console.log(error)
    );
  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(["/"]);
  }
}
