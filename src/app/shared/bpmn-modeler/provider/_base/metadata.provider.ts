import { BasePropertiesProvider } from './_base.provider';
import { BaseMetaData } from 'src/app/shared/model/metadata/base-metadata.model';

export abstract class MetadataPropertiesProvider extends BasePropertiesProvider {

  protected abstract getTabGroupMetadata() : {};
}
