import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe {
  transform(array: any, args:any) {
    return _.sortBy(array, args);
  }
}