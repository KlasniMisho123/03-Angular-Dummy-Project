import { Component, Input } from '@angular/core';

interface DummyTrafficDataInterface {
  id:string,
  value:number,
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})

export class TicketsComponent {
  @Input({required:true}) dummyTrafficData!:DummyTrafficDataInterface;
  
}
