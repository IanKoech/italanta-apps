import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { BrowserJsPlumbInstance } from '@jsplumb/browser-ui';
import { _JsPlumbComponentDecorator } from '@app/features/convs-mgr/stories/blocks/library/block-options';

import { EmailMessageBlock } from '@app/model/convs-mgr/stories/blocks/messaging';

@Component({
  selector: 'app-email-block',
  templateUrl: './email-block.component.html',
  styleUrls: ['./email-block.component.scss'],
})


export class EmailBlockComponent implements OnInit, AfterViewInit 
{
  
  @Input() id: string;
  @Input() block: EmailMessageBlock;
  @Input() emailMessageForm: FormGroup;
  @Input() jsPlumb: BrowserJsPlumbInstance;


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.jsPlumb) {
      this._decorateInput();
    }
  }

  private _decorateInput() {
    let input = document.getElementById('message') as Element;
    if (this.jsPlumb) {
      input = _JsPlumbComponentDecorator(input, this.jsPlumb);
    }
  }

}