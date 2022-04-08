import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RatingSchema } from '../template-editor/template-editor.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skillName: RatingSchema = {
    name: "",
    value: "0"
  };
  @Output() rating: EventEmitter<RatingSchema> = new EventEmitter<RatingSchema>();

  constructor() { }

  ngOnInit(): void {
  }

  getRating(rating: string) {
    this.rating.emit({
      name: this.skillName.name,
      value: rating
    });
  }

}
