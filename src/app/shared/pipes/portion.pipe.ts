import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'portion' })
export class PortionPipe implements PipeTransform {
  transform(value: number, portion?: number): number {
    return portion === null || portion === undefined ? value : (portion / 100) * value;
  }
}
