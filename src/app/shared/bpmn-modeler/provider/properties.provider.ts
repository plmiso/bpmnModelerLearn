
import { inherits } from 'util';
import PropertiesActivator from 'bpmn-js-properties-panel/lib/PropertiesActivator';
import CamundaPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/camunda/CamundaPropertiesProvider';
import { AizonaPropertiesProvider } from './aizona/aizona-properties.provider';
import { FrontendPropertiesProvider } from './aizona-frontend/frontend-properties.provider';
import { FrontendMetadata } from '../../model/metadata/frontend/frontend-metadata.model';

export default function propertiesProvider(
  eventBus,
  canvas,
  bpmnFactory,
  elementRegistry,
  elementTemplates,
  translate): void {

  PropertiesActivator.call(this, eventBus);

  this.getTabs = (element) => {
    const props = [
      eventBus,
      canvas,
      bpmnFactory,
      elementRegistry,
      elementTemplates,
      translate,
    ];

    return [
      ...new CamundaPropertiesProvider(...props).getTabs(element),
      ...new AizonaPropertiesProvider(...props).getTabs(element),
      ...new FrontendPropertiesProvider(...props).getTabs(element),
    ];
  };
}

inherits(propertiesProvider, PropertiesActivator);
