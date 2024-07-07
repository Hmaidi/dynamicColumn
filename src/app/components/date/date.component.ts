import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [FormsModule, CalendarModule, InputTextModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})
export class DateComponent {
  date: Date | undefined;

  save() {

  }
}
