import { is } from 'bpmn-js/lib/util/ModelUtil';
import * as _ from 'lodash';

import { BaseProperties } from '../../_base/_base.props';
import { MetadataExtractor  } from './metadata-extractor';


export class FrontendProperties extends BaseProperties {

  public static getModulesGroup(group, element): void {
    this.group = group;
    this.element = element;
    console.log(element)
    this.checkElement();
  }

  private static checkElement(): void {
    if (is(this.element, 'bpmn:StartEvent')) {
      this.generateModulesGroup();
    }
  }

  private static generateModulesGroup(): void {
    this.group.entries.push(
      this.createModulesSelection(),
      this.createEndpointSelection(),
      this.createMethodSelection(),
    );
  }

  private static createMethodSelection(): {} {
    const selectOptions = element => MetadataExtractor .extractMethodsToOptions(element);
    const disabled = element => !element.businessObject.$attrs['moduleEndpoint'];
    return this.selectBox({
      selectOptions,
      disabled,
      id: 'selectModuleEndpointMethods',
      description: 'Select endpoint methods',
      label: 'Select method',
      modelProperty: 'endpointMethod',
    });
  }

  private static createEndpointSelection(): {} {
    const selectOptions = element => MetadataExtractor .endpointSelectOptions(element);
    const disabled = element => !element.businessObject.$attrs['frontendModule'];
    return this.selectBox({
      selectOptions,
      disabled,
      id: 'selectModuleEndpoint',
      description: 'Select module endpoint',
      label: 'Select endpoint',
      modelProperty: 'moduleEndpoint',
    });
  }

  private static createModulesSelection(): {} {
    const selectOptions = element => MetadataExtractor .extractModulesToOptions();
    return this.selectBox({
      selectOptions,
      id: 'selectFrontModule',
      description: 'Select frontend module',
      label: 'Select module',
      modelProperty: 'frontendModule',
    });
  }

}
