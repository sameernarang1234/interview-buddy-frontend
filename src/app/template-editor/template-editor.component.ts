import { Component, OnInit } from '@angular/core';

export interface RatingSchema {
  name: string;
  value: string;
}
export interface Rating {
  hoisting: RatingSchema;
  scope: RatingSchema;
  closure: RatingSchema;
  inheritance: RatingSchema;
  promise: RatingSchema;
}
export interface Skill {
  name: string;
  rating: Rating;
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
    {
      name: "HTML", 
      rating: {
        hoisting: {
          name: "Hoisting",
          value: "0"
        },
        scope: {
          name: "Scope",
          value: "0"
        },
        closure: {
          name: "Closure",
          value: "0"
        },
        inheritance: {
          name: "Inheritance",
          value: "0"
        },
        promise: {
          name: "Promise",
          value: "0"
        }
      }
    }
  ];
  newSkill: Skill = {
    name: "",
    rating: {
      hoisting: {
        name: "Hoisting",
        value: "0"
      },
      scope: {
        name: "Scope",
        value: "0"
      },
      closure: {
        name: "Closure",
        value: "0"
      },
      inheritance: {
        name: "Inheritance",
        value: "0"
      },
      promise: {
        name: "Promise",
        value: "0"
      }
    }
  };
  isNewSkillEditing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  isNewSkillBeingEdited() {
    this.isNewSkillEditing = true;
  }

  addSkillToTemplate() {
    // this.skills.push(this.newSkill);
    this.isNewSkillEditing = false;
  }

}
