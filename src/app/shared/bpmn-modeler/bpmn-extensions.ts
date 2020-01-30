
import provider from './provider';
import * as aizonaDescriptor from './provider/aizona/descriptors/aizona.json';
import * as camundaDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';
import * as bpmnJsPropertiesPanel from 'bpmn-js-properties-panel';
import * as frontendDescriptor from './provider/aizona-frontend/descriptors/frontend.json';

export const BPMN_MODULES = {
  PropertiesPanel: bpmnJsPropertiesPanel,
  PropertiesProvider: provider,
};

export const BPMN_EXTENSIONS = {
  Camunda: {
    camunda: (camundaDescriptor as any).default,
  },
  Aizona: {
    aizona: (aizonaDescriptor as any).default,
  },
  Frontend: {
    frontend: (frontendDescriptor as any).default,
  },
};
