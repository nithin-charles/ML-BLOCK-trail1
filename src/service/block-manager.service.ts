import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlockType } from 'src/model/BlockType';
import { Block } from 'src/model/block';

@Injectable({
  providedIn: 'root'
})
export class BlockManagerService {

  constructor() { }

  public blockCount: number=0;

  public blockList: Block[] = [];

  public $isBlockUpdateAvailable: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public addBlock(){
    const block: Block = {
      id: this.blockCount +1,
      name: this.blockCount +1+'Block',
      position: {x:0, y:0},
      type: BlockType.Image_Block
    }
    this.blockList.push(block);
    this.$isBlockUpdateAvailable.next(true);
  }

  public deleteAllBlocks(){
    this.blockList = [];
    this.$isBlockUpdateAvailable.next(true);
  }


}
