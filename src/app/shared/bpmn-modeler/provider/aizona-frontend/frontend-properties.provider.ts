import {
  BaseTab,
  BaseTabGroup,
} from '../_base/_base.provider';
import { FrontendProperties } from './parts/frontend.props';
import { FrontendMetadata } from 'src/app/shared/model/metadata/frontend/frontend-metadata.model';
import * as metadata from 'src/assets/metadata/backend-metadata.json';
import { MetadataPropertiesProvider } from '../_base/metadata.provider';
import { MetadataExtractor  } from 'src/app/shared/bpmn-modeler/provider/aizona-frontend/parts/metadata-extractor';

export class FrontendPropertiesProvider extends MetadataPropertiesProvider {

  public getTabs(element: any): BaseTab[] {
    return [
      {
        id: 'frontend',
        label: 'Frontend',
        groups: this.getTabGroups(element),
      },
    ];
  }

  protected getTabGroups(element: any): BaseTabGroup[] {
    const aizonaFrontGroup = {
      id: 'aizona-frontend',
      label: 'AIZona frontend',
      entries: [],
    };

    MetadataExtractor .setMetaData(this.getTabGroupMetadata());

    FrontendProperties.getModulesGroup(aizonaFrontGroup, element);

    return [aizonaFrontGroup];
  }

  protected getTabGroupMetadata(): FrontendMetadata{
    return new FrontendMetadata(metadata.id, metadata.name, metadata.modules);
  }
}
