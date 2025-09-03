import { Component, Input } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';

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
  tickets: Ticket[] = [];

  onAdd(ticketData:{title:string; text:string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: "open"
    }

    this.tickets.push(ticket);
    console.log(this.tickets)
  }
}
