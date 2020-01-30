import aizonaProps from './parts/aizona.props';
import {
  BasePropertiesProvider,
  BaseTab,
  BaseTabGroup,
} from '../_base/_base.provider';

export class AizonaPropertiesProvider extends BasePropertiesProvider {

  public getTabs(element): BaseTab[] {
    return [{
      id: 'aizona',
      label: 'AIZona',
      groups: this.getTabGroups(element),
    }];
  }

  protected getTabGroups(element): BaseTabGroup[] {
    const aizonaGroup = {
      id: 'aizona',
      label: 'AIZona process',
      entries: [],
    };

    aizonaProps(aizonaGroup, element);

    return [
      aizonaGroup,
    ];
  }
}
