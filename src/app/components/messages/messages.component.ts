import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public messages: string[] = [];

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  public clearMessages(): void {
    this.messagesService.clear();
    this.getMessages();
  }

  private getMessages(): void {
    this.messages = this.messagesService.getMessages();    
  }
}
