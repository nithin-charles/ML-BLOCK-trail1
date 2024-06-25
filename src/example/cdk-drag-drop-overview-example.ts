import { Component, Input, OnInit } from '@angular/core';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'cdk-drag-drop-overview-example',
  templateUrl: 'cdk-drag-drop-overview-example.html',
  styleUrl: 'cdk-drag-drop-overview-example.css',
  standalone: true,
  imports: [CdkDrag, CommonModule],
})
export class CdkDragDropOverviewExample implements OnInit {
  position = { x: 0, y: 0 };
  initialPosition = { x: 0, y: 0 };
  isDragging: boolean = false;
  @Input() blockId: number;

  public ngOnInit() {
    // On webpage reload the position will be taken from thee local storagee and values are assigned to retain the dropped position
    this.loadPosition();
  }

  public onDragEnded(event: CdkDragEnd): void {
    const { x, y } = event.source.getFreeDragPosition();
    this.position = { x, y };
    this.savePosition();
  }

  public savePosition() {
    localStorage.setItem(
      `draggablePosition` + this.blockId,
      JSON.stringify(this.position)
    );
  }

  public loadPosition() {
    const savedPosition = localStorage.getItem(
      `draggablePosition` + this.blockId
    );
    if (savedPosition) {
      this.position = JSON.parse(savedPosition);
      this.initialPosition = { ...this.position };
    }
  }
}
