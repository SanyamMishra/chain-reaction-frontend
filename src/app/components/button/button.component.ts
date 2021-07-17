import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output('click') click = new EventEmitter();
  @Input('disabled') disabled!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.disabled);
    if (!this.disabled) {
      this.click.emit();
    }
  }
}
