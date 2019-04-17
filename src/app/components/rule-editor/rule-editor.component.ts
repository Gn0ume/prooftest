import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RuleTypeEnum } from '../../types/Rule.type';
import { RuleModel } from '../../types/Rule.model';

@Component({
  selector: 'app-rule-editor',
  templateUrl: './rule-editor.component.html',
  styleUrls: ['./rule-editor.component.css']
})
export class RuleEditorComponent implements OnInit {
  @Input() ruleTitle = 'New Rule';
  @Input() ruleObject: RuleModel;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  rulesTypes = RuleTypeEnum;
  typesKeys: any[];
  constructor() {
    this.typesKeys = Object.keys(this.rulesTypes).filter(String);
  }

  deleteMe() {
    this.delete.emit();
  }
  ngOnInit() {
  }

}
