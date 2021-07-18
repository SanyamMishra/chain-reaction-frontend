import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output('onClick') click = new EventEmitter<boolean>();
  @Input('disabled') disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }
}
