import { Component, OnInit } from '@angular/core';

export interface UserSignupData {
  username: string;
  email: string;
  password: string;
  role: string;
  specialization: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  roles: string[] = [
    "Interviewer",
    "Recruiter"
  ];
  specializations: string[] = [
    "Frontend Developer",
    "Backend Developer"
  ];
  userData: UserSignupData = {
    username: "",
    email: "",
    password: "",
    role: "",
    specialization: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  selectRole(selectedRole: string) {
    this.userData.role = selectedRole;
  }

  selectSpecialization(selectedSpecialization: string) {
    this.userData.specialization = selectedSpecialization;
  }

  signupUser() {
    console.log(this.userData);
  }

}
