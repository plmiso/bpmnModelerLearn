export interface BaseTab {
  id: string;
  label: string;
  groups: any[];
  enabled?: (element) => boolean;
}

export interface BaseTabGroup {
  id: string;
  label: string;
  entries: any[];
}

export abstract class BasePropertiesProvider {

  constructor(protected eventBus?,
              protected canvas?,
              protected bpmnFactory?,
              protected elementRegistry?,
              protected elementTemplates?,
              protected translate?) {
  }

  public abstract getTabs(element): BaseTab[];

  protected abstract getTabGroups(element): BaseTabGroup[];

}
