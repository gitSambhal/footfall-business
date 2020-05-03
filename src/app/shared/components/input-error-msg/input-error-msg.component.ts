import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-error',
  templateUrl: './input-error-msg.component.html',
  styleUrls: ['./input-error-msg.component.scss']
})
export class InputErrorMsgComponent implements OnInit {

  @Input() input: FormControl;
  constructor() { }

  ngOnInit(): void {
  }

  isShowError(): boolean {

    let errorStatus = false;
    if (this.input) {
      errorStatus = this.input.invalid && this.input.touched;

    }

    return errorStatus;
  }
}
