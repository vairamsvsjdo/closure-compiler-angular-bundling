import { Observable } from '../../Observable';
import { timeout } from '../../operator/timeout';
Observable.prototype.timeout = timeout;
