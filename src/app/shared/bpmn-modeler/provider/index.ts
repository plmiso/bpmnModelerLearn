
import translate from 'diagram-js/lib/i18n/translate';
import elementTemplates from 'bpmn-js-properties-panel/lib/provider/camunda/element-templates';
import propertiesProvider from './properties.provider';

export default {
  __depends__: [
    elementTemplates,
    translate,
  ],
  __init__: ['propertiesProvider'],
  propertiesProvider: ['type', propertiesProvider],
};
