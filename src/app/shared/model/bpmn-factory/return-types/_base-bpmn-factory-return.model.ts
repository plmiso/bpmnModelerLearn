export interface BaseBPMNFactoryReturnType {
  id: string;
  description: string;
  get: () => {};
  set: () => {};
  validate: () => {};
  html: string;
  setControlValue: () => {};
  isDisabled: () => {};
  cssClasses: string[]
}
