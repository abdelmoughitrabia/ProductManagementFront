import {Message} from "primeng/api";

export class MessageManager {

  static createInfoMessage(text: string, result: number): Message {
    return {severity: 'info', summary: 'Info Message', detail: text, id: result};
  }

  static createErrorMessage(text: string, result: number): Message {
    return {severity: 'error', summary: 'Error Message', detail: text, id: result};
  }

  static createWarnMessage(text: string, result: number): Message {
    return {severity: 'warning', summary: 'Warning Message', detail: text, id: result};
  }

  static showMessage(message: Message, container: Message[]): void {
    container.push(message);
  }

}
