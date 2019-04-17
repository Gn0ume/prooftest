import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.css']
})

export class RulesListComponent implements OnInit {
  @Input() listName = 'Rules List';
  @Input() ruleTitle = 'Add Rule';
  constructor() { }

  ngOnInit() {
  }

}
