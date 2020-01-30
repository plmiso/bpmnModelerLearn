import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { DiagramModel } from '../../shared/model/diagram.model';

@Component({
  selector: 'az-bpmn-loader',
  templateUrl: './bpmn-loader.component.html',
  styleUrls: ['./bpmn-loader.component.less'],
})
export class BpmnLoaderComponent {

  @Output()
  public onDiagramLoad: EventEmitter<DiagramModel> = new EventEmitter();

  public readBpmn(fileList: FileList): void {
    const fileReader: FileReader = new FileReader();
    fileReader.readAsText(fileList[0]);
    fileReader.onload = (file) => {
      this.onDiagramLoad.emit(
        DiagramModel.instance(
          fileList[0].name,
          (file.target as FileReader).result.toString(),
        ),
      );
    };
  }
}
