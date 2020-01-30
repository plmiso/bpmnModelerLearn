import { is } from 'bpmn-js/lib/util/ModelUtil';
import EntryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

export default (group, element) => {
  if (is(element, 'bpmn:StartEvent')) {
    group.entries.push(
      EntryFactory.selectBox({
        id: 'service',
        description: 'Select AIZona',
        label: 'Select AIZona',
        modelProperty: 'AIZona',
        selectOptions: [
          { name: 'Name1', value: 'name1' },
          { name: 'Name2', value: 'name2' },
          { name: 'Name3', value: 'name3' },
          { name: 'Name4', value: 'name4' },
        ],
        validate: (element, values) => {
          // The validate property name must be the same as modelProperty.
          const validate = { service: null };
          if (values.service === 'rule') {
            validate.service = 'Rule service cannot be chosen.';
          }
          return validate;
        },
      }),
    );
  }
};
