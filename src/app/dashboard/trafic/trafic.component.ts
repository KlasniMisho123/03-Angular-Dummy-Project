import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trafic',
  standalone: true,
  imports: [],
  templateUrl: './trafic.component.html',
  styleUrl: './trafic.component.css'
})
export class TraficComponent {
  @Input({required:true}) maxTraffic!:number;
}
