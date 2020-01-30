import {
  AfterViewInit,
  Component,
  Input,
} from '@angular/core';

import { BpmnModeler } from '../../shared/bpmn-modeler/bpmn-modeler';
import {
  BPMN_EXTENSIONS,
  BPMN_MODULES,
} from '../../shared/bpmn-modeler/bpmn-extensions';
import * as FileSaver from 'file-saver';
import { DiagramModel } from '../../shared/model/diagram.model';

@Component({
  selector: 'az-bpmn-editor',
  templateUrl: './bpmn-editor.component.html',
  styleUrls: ['./bpmn-editor.component.less'],
})
export class BpmnEditorComponent implements AfterViewInit {

  public readonly PANEL_ID = 'properties-panel';
  public readonly CONTAINER_ID = 'modeler-container';

  @Input()
  public diagram: DiagramModel;

  public errors: string;
  public bpmnModeler: BpmnModeler = BpmnModeler.instance();

  public ngAfterViewInit(): void {
    this.bpmnModeler
      .setPanelId(this.PANEL_ID)
      .setContainerId(this.CONTAINER_ID)
      .setAdditionalModules([
        BPMN_MODULES.PropertiesPanel,
        BPMN_MODULES.PropertiesProvider,
      ])
      .setModdleExtensions({
        ...BPMN_EXTENSIONS.Camunda,
        ...BPMN_EXTENSIONS.Aizona,
        ...BPMN_EXTENSIONS.Frontend,
      })
      .build()
      .openDiagram(this.diagram.xml, (errors) => {
        this.errors = errors;
      });
  }

  public exportDiagram(): void {
    this.bpmnModeler.exportDiagram((xml =>
        FileSaver.saveAs(
          new Blob([xml], { type: 'application/xml;charset=utf-8' }),
          this.diagram.name,
        )
    ));
  }
}
