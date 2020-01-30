
export interface BaseBPMNFactoryOptions {
  id: string;
  description: string;
  label: string;
  modelProperty: string;
  get?: () => {};
  set?: () => {};
  // return object should be named 'validate, and his property name must be the same as modelProperty.
  validate?: (element, values) => {} | null;
}
