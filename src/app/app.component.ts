import { Component } from '@angular/core';
import { Newcontact } from './newcontact/Newcontact';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimplContat';

  newcontact : Newcontact[] = [
    new Newcontact("Alex", "Mr.Frog", "Rue des Nenufar", "http//placeholder" ),
    new Newcontact("Alex", "Mr.Frog", "Rue des Nenufar", "http//placeholder" )
  ];

  showContact: boolean  = false;

onClikeContact(){

  this.showContact = !this.showContact;

}
}

