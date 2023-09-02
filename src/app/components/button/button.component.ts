import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {

  // TODO: Find out why if I remove the ! following color I get an error message
  @Input() color!: string;
  @Input() text!: string;

  // TODO: check out event emmiters in angular
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
