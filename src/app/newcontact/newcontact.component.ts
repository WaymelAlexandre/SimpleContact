import { Component, OnInit, Input} from '@angular/core';
import { Newcontact } from "./Newcontact";
@Component({
  selector: 'newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {

  @Input() newcontact: Newcontact;
  // newcontact: Newcontact;

  constructor() { }

  ngOnInit(): void {
  }

}
