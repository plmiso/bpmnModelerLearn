import { Component } from '@angular/core';
import { DiagramModel } from './shared/model/diagram.model';

@Component({
  selector: 'az-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  public diagram: DiagramModel;

  public onDiagramLoad(diagram: DiagramModel): void {
    this.diagram = diagram;
  }
}
