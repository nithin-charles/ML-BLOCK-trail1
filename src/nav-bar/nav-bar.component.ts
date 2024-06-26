import { Component } from '@angular/core';
import { BlockManagerService } from 'src/service/block-manager.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private _blockManagerService: BlockManagerService){
    
  }

  public addBlock(): void{
    console.log('Block Added');
    this._blockManagerService.addBlock();
  }

  public deleteAllBlock(): void{
    this._blockManagerService.deleteAllBlocks();
  }
}
