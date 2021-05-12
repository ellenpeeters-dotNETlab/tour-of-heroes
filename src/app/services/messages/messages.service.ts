import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: string[] = [];

  constructor() { }

  public getMessages(): string[] {
    return this.messages;
  }

  public addMessage(message: string): void {
    this.messages.push(message);
  }

  public clear(): void {
    this.messages = [];
  }
}
