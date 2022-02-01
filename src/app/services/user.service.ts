import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  callApiPost(params) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.httpClient.post(environment.BASE_BACKEND_URL + "login", params);
  }
  registerUser(params) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.httpClient.post(
      environment.BASE_BACKEND_URL + "signup",
      params
    );
  }

  getUsersList() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("authorization", localStorage.getItem("token"));
    return this.httpClient.get(environment.BASE_BACKEND_URL + "users", {
      headers,
    });
  }
}
