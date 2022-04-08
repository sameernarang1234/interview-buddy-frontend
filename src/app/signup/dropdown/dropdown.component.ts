import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() data: string[] = [];
  @Output() selection: EventEmitter<string> = new EventEmitter<string>();

  selected: string = "";
  drodownOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.selected = this.data[0];
    console.log(this.data);
  }

  openDropdown() {
    this.drodownOpen = !this.drodownOpen;
  }

  selectFromDropdown(entry: string) {
    this.drodownOpen = false;
    this.selected = entry;
    this.selection.emit(entry);
  }

}
