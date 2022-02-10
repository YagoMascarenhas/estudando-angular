import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
    .blueText {
      color: blue;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "Nenhum servidor foi criado";
  userStatus = ""
  serverName = "TestServer";
  serverCreated = false;
  servers = [];
  username = "";
  allowButton = false;
  clicks = [];
  count = 1;
  showText = false;

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
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "O servidor " + this.serverName + " foi criado";
  }
  
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClickDetails() {
    this.showText = !this.showText;
    this.clicks.push(this.count);
    this.count++;
  }
}
