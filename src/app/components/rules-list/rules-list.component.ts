import { Component, Input, OnInit } from '@angular/core';
import { RuleModel } from '../../types/Rule.model';

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.css']
})

export class RulesListComponent implements OnInit {
  @Input() listName = 'Rules List';
  @Input() ruleTitle: string;
  rules: RuleModel[];

  constructor() {
    this.rules = [];
  }

  deleteFromList(rule) {
    const index = this.rules.indexOf(rule);
    this.rules.splice(index, 1);
  }

  addToList() {
    this.rules.push({
      type: 'contains',
      url: ''
    });
    console.log(this.rules);
  }

  ngOnInit() {
  }

}
