import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-sheet',
  templateUrl: './top-sheet.component.html',
  styleUrls: ['./top-sheet.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        group([
          query('.top-sheet-background', [
            style({
              opacity: 0
            }),
            animate(100),
          ]),
          query('.top-sheet', [
            style({
              transform: 'translateY(-100%)'
            }),
            animate(100),
          ])
        ])
      ]),
      transition(':leave', [
        group([
          query('.top-sheet-background', [
            animate(100, style({
              opacity: 0
            })),
          ]),
          query('.top-sheet', [
            animate(100, style({
              transform: 'translateY(-100%)'
            })),
          ])
        ])
      ])
    ])
  ]
})
export class TopSheetComponent implements OnInit {
  @Output('onClose') closed = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closed.emit();
  }
}
