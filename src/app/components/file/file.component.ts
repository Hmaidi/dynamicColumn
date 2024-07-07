import { Component } from '@angular/core';
import {MessageService} from "primeng/api";
import {FileUploadEvent, FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {CalendarModule} from "primeng/calendar";
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-file',
  standalone: true,
  imports: [FileUploadModule, ToastModule, CalendarModule],
  providers: [MessageService],
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss'
})
export class FileComponent {
  constructor(private messageService: MessageService) {}

  onBasicUploadAuto(event: FileUploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }

  save() {

  }
}
