import EntryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
import * as _ from 'lodash';
import { SelectBoxOptions } from 'src/app/shared/model/bpmn-factory/options/select-box-options';
import { BaseBPMNFactoryReturnType } from 'src/app/shared/model/bpmn-factory/return-types/_base-bpmn-factory-return.model';
import { BaseBPMNFactoryOptions } from 'src/app/shared/model/bpmn-factory/options/_base-bpmn-factory-options.model';

export enum EntryFactoryTypes {
  SELECT_BOX = 'selectBox',
}

export class BaseProperties {

  protected static group;

  protected static element;

  public static selectBox(options: SelectBoxOptions): BaseBPMNFactoryReturnType {
    return this.getEntryFactory(options, EntryFactoryTypes.SELECT_BOX);
  }

  private static getEntryFactory<T extends BaseBPMNFactoryOptions>(options: T, type: EntryFactoryTypes): BaseBPMNFactoryReturnType {
    return EntryFactory[type](options);
  }
}
