import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {

  @Input() name: string
  constructor() { }

  ngOnInit(): void {
  }

}
