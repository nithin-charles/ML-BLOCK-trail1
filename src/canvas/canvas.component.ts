import { Component, OnInit } from '@angular/core';
import { CdkDragDropOverviewExample } from 'src/example/cdk-drag-drop-overview-example';
import { BlockType } from 'src/model/BlockType';
import { Block } from 'src/model/block';
import { NavBarComponent } from 'src/nav-bar/nav-bar.component';
import { BlockManagerService } from 'src/service/block-manager.service';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CdkDragDropOverviewExample, NavBarComponent],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements OnInit{
  public numberOfBlock: number;
  // public blockList: Block[] = [{id:1, name:'ImageBlock_1', type:BlockType.Image_Block, position:{x:0,y:0}},
  // {id:2, name:'ImageBlock_2', type:BlockType.Image_Block, position:{x:0,y:0}}];
  public blockList: Block[] = [];

  constructor(private _blockManagerService: BlockManagerService){
    //this.blockList = [...this._blockManagerService.blockList]

  }
  ngOnInit(): void {
    this.numberOfBlock = this.blockList.length;
    this._blockManagerService.$isBlockUpdateAvailable.subscribe((isupdateAvailable)=>{
      if(isupdateAvailable){
        this.blockList = [...this._blockManagerService.blockList]
      }
    })
  }


}
