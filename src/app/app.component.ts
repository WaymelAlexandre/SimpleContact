import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimplContat';
  alltheContact: string[] = ["what", "The ", "Fuck"]


  showContact: boolean  = false;

onClikeContact(){

  this.showContact = !this.showContact;

}
}

