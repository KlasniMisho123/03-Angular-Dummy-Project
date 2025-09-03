import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild, } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') form?:ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>("form");
  
  ngOnInit() {
    console.log('OnInit');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.form().nativeElement);
  }

  onSubmit(titleInput:string,request:string,) {
    const enteredTitle = titleInput;
    const enteredRequest =  request;
    console.log("enteredTitle: ", enteredTitle);
    console.log("enteredRequest: ", enteredRequest);
    this.form().nativeElement.reset();
  }

}
