import { Observable } from '../../Observable';
import { zipProto } from '../../operator/zip';
Observable.prototype.zip = zipProto;
