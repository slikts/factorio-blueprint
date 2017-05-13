import * as Victor from 'victor';

import Blueprint from './Blueprint';

export default class Tile {
  id: number;
  bp: Blueprint;
  name: any;
  position: any;

  constructor(data, bp: Blueprint) {
    this.id = -1;
    this.bp = bp;
    this.name = this.bp.checkName(data.name);
    if (!data.position || data.position.x === undefined || data.position.y === undefined) {
      throw new Error('Invalid position provided: ' + data.position);
    }
    this.position = Victor.fromObject(data.position);
  }

  remove() {
    return this.bp.removeTile(this);
  }

  getData() {
    return {
      name: this.bp.fixName(this.name),
      position: this.position,
    };
  }

}
