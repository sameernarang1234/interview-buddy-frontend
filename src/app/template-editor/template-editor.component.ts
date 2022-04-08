import { Component, OnInit } from '@angular/core';

export interface Skill {
  name: string;
  rating: string;
}

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.scss']
})
export class TemplateEditorComponent implements OnInit {

  links: string[] = [
    "Dashboard",
    "Feedback",
    "Templates"
  ];
  username: string = "Robert C Martin";
  positions: string[] = [
    "Frontend Developer",
    "Backend Developer"
  ];
  departments: string[] = [
    "DevOps",
    "Android App Team",
    "Backend Team"
  ];
  skills: Skill[] = [
    {name: "HTML", rating: "1"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
