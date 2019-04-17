import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
