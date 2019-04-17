import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RulesListComponent } from './components/rules-list/rules-list.component';
import { RuleEditorComponent } from './components/rule-editor/rule-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    RulesListComponent,
    RuleEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
