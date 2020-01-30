
import { BaseBPMNFactoryOptions } from './_base-bpmn-factory-options.model';

export interface SelectOption {
  name: string;
  value: string;
}

export interface SelectBoxOptions extends BaseBPMNFactoryOptions {

  selectOptions: (element) => SelectOption[] | SelectOption[];
  disabled?: (element) => boolean;
}
