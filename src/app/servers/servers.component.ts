import { Component, OnInit } from '@angular/core';
import { updateShorthandPropertyAssignment } from 'typescript';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "Nenhum servidor foi criado";
  userStatus = ""
  serverName = "TestServer";
  serverCreated = false;
  username = "";
  allowButton = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {

  }

  allowRenameUser(event: Event) {
    if ((<HTMLInputElement>event.target).value === "") {
      this.allowButton = false;
    } else { 
      this.allowButton = true;
    }
  }

  onRenameUser() {
    this.userStatus = "O usuário " + this.username + " foi renomeado!"
    this.username = "";
    this.allowButton = false;
  }

  onCreateServer() {
    this.serverCreationStatus = "O servidor " + this.serverName + " foi criado";
  }
  
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  

}
