import { Component, Input } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

interface DummyTrafficDataInterface {
  id:string,
  value:number,
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})

export class TicketsComponent {
  tickets = [];
}
