import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BpmnEditorComponent } from './component/bpmn-editor/bpmn-editor.component';
import { BpmnLoaderComponent } from './component/bpmn-loader/bpmn-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    BpmnEditorComponent,
    BpmnLoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
