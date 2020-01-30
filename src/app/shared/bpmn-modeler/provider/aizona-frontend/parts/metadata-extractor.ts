import { FrontendMetadata } from 'src/app/shared/model/metadata/frontend/frontend-metadata.model';
import { SelectOption } from 'src/app/shared/model/bpmn-factory/options/select-box-options';
import * as _ from 'lodash';
import { Module } from 'src/app/shared/model/metadata/frontend/module.model';
import { Endpoint } from 'src/app/shared/model/metadata/frontend/endpoint.model';

export class MetadataExtractor {

  private static metadata: FrontendMetadata;

  public static setMetaData(metaData: FrontendMetadata): void {
    this.metadata = metaData;
  }

  public static extractModulesToOptions(): SelectOption[] {
    const selectOptions: SelectOption[] = [];
    this.metadata.modules
      .forEach((module) => {
        const name = _.upperFirst(module.name);
        selectOptions.push({ name, value: module.name });
      });
    selectOptions
      .unshift({ name: '-', value: '-' });
    return selectOptions;
  }

  public static endpointSelectOptions(element) {
    const pickedModuleName = element.businessObject.$attrs['frontendModule'];
    if (pickedModuleName) {
      const module: Module = MetadataExtractor .metadata.modules.find(module => module.name === pickedModuleName);
      return MetadataExtractor .extractEndpointsToOptions(module);
    }
    delete element.businessObject.$attrs['frontendModule'];
  };

  public static extractEndpointsToOptions(module: Module): SelectOption[] {
    return module.endpoints
      .map((endpoint) => {
        const name = _.upperFirst(endpoint.name);
        return { name, value: endpoint.name };
      });
  }

  public static extractMethodsToOptions = (element) => {
    const moduleName = element.businessObject.$attrs['frontendModule'];
    const endpointName = element.businessObject.$attrs['moduleEndpoint'];
    const endpoint: Endpoint = MetadataExtractor .extractEndpoint(moduleName, endpointName);
    if (endpoint) {
      const urls = endpoint.urls;
      return (urls['graphQl'] as [])
        .map((url) => {
          return { name: url, value: url };
        });
    }
    delete element.businessObject.$attrs['moduleEndpoint'];
    delete element.businessObject.$attrs['endpointMethod'];
  }

  public static extractModule(name: string): Module {
    return this.metadata.modules
      .find((val) => {
        return val.name === name;
      });
  }

  public static extractEndpoint(moduleName: string, endpointName: string): Endpoint {
    if (moduleName && endpointName) {
      const module = this.extractModule(moduleName);
      return module.endpoints.find((endpoint) => {
        return endpoint.name === endpointName;
      });
    }
  }

}
