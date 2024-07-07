import { Component } from '@angular/core';
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [FormsModule, InputNumberModule, ButtonModule, InputTextModule, FileUploadModule],
  templateUrl: './number.component.html',
  styleUrl: './number.component.scss'
})
export class NumberComponent {
  value1: number = 42723;

  save() {

  }
}
