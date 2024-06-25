import { Component, OnInit } from '@angular/core';
import { CdkDragDropOverviewExample } from 'src/example/cdk-drag-drop-overview-example';
import { Block } from 'src/model/block';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CdkDragDropOverviewExample],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements OnInit{
  public numberOfBlock: number;
  public blockList: Block[] = [{id:1, name:'ImageBlock_1', type:'Image', position:{x:0,y:0}},
  {id:2, name:'ImageBlock_2', type:'Image', position:{x:0,y:0}}];

  ngOnInit(): void {
    this.numberOfBlock = this.blockList.length;
  }


}
