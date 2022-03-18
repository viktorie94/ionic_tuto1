import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {
  @Input() hasHeader:boolean ;
  @Input() hasFooter:boolean;

  @Input() status:string;
  @Input() updateAt: string;
  @Input() createdAt: string;
  @Input() notes: string;

  constructor(
private router:Router
  ) { }

// btnClicked ()
// {
//   console.log("btn Clicked")
//   this.router.navigate (['login'])
// }

  ngOnInit() {}

}
