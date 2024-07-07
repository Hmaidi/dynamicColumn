import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {config} from "rxjs";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [FormsModule, InputNumberModule, ButtonModule, InputTextModule],
  templateUrl: './colum-name.component.html',
  styleUrl: './colum-name.component.scss'
})
export class ColumNameComponent {
  value: string;
  @Output() saveEvent = new EventEmitter<{ nameAr: string, nameEn: string,type:string }>();
 constructor(private ref: DynamicDialogRef ,public config: DynamicDialogConfig ) {
 }
  save() {

    this.ref.close( )
  }


}
