
import Modeler from 'bpmn-js/lib/Modeler';

export class BpmnModeler {

  private modeler: Modeler;

  private containerId: string;
  private panelId: string;
  private additionalModules: any[] = [];
  private moddleExtensions: any = {};

  public static instance(): BpmnModeler {
    return new this();
  }

  public setContainerId(containerId: string): BpmnModeler {
    this.containerId = `#${containerId}`;
    return this;
  }

  public setPanelId(panelId: string): BpmnModeler {
    this.panelId = `#${panelId}`;
    return this;
  }

  public setAdditionalModules(additionalModules: any[]): BpmnModeler {
    this.additionalModules = additionalModules;
    return this;
  }

  public setModdleExtensions(moddleExtensions: any): BpmnModeler {
    this.moddleExtensions = moddleExtensions;
    return this;
  }

  public build(): BpmnModeler {
    this.modeler = new Modeler({
      container: this.containerId,
      propertiesPanel: { parent: this.panelId },
      additionalModules: this.additionalModules,
      moddleExtensions: this.moddleExtensions,
    });
    return this;
  }

  public openDiagram(diagramXML: string, errorClb: (errors) => void): void {
    this.modeler.importXML(diagramXML, (errors) => {
      errorClb(errors);
    });
  }

  public exportDiagram(xmlClb: (xml) => void): any {
    this.modeler.saveXML({ format: true }, (err, xml) => {
      err ? console.error(err) : xmlClb(xml);
    });
  }
}
