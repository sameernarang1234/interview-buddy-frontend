import { Component, OnInit } from '@angular/core';

export interface TemplateSchema {
  name: string;
  position: string;
  department: string;
  skills: Skill[];
}

export interface StringKey {
  [key: string]: string | RatingSchema;
}

export interface RatingSchema {
  name: string;
  value: string;
}
export interface Rating extends StringKey {
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

  template: TemplateSchema = {
    name: "",
    position: "",
    department: "",
    skills: []
  };

  constructor() { }

  ngOnInit(): void {
  }

  isNewSkillBeingEdited() {
    this.isNewSkillEditing = true;
  }

  addSkillToTemplate() {
    this.template.skills.push(this.newSkill);
    this.isNewSkillEditing = false;

    this.newSkill = {
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
  }

  editRating(rating: RatingSchema) {
    const ratingName: string = rating.name;
    const value: string = rating.value;
    
    this.newSkill.rating[ratingName] = value;
  }

  setPosition(pos: string) {
    this.template.position = pos;
  }

  setDepartment(dept: string) {
    this.template.department = dept;
  }

  saveTemplate() {
    console.log(this.template);
  }

}
