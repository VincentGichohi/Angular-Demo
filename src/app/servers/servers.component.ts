import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
//this component gets executed only when the button is not clicked
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No server was created!';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }
  
//this now gets executed when the button is clicked!
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
}
