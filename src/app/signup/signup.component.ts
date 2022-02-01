import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  signup() {
    console.log(this.userForm);
    if (this.userForm.valid) {
      alert("User form is valid!!");
      this.userService.registerUser(this.userForm.value).subscribe(
        (res) => {
          if (res) {
            this.router.navigate(["/users"]);
            this.userForm.reset();
          }
        },
        (error) => console.log(error)
      );
    } else {
      alert("User form is not valid!!");
    }
  }
}
