import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  login() {
    if (this.email && this.password) {
      const parameter = {
        email: this.email,
        password: this.password,
      };
      this.userService.callApiPost(parameter).subscribe(
        (resp) => {
          if (resp["status"] === 200) {
            window.localStorage.setItem("token", resp["token"]);
            this.email = "";
            this.password = "";
            this.router.navigate(["/users"]);
          } else {
            console.log("Someting goes wroung");
          }
        },
        (error) => {
          this.email = "";
          this.password = "";
        }
      );
    } else {
      console.log("Please enter user and password");
    }
  }
}
