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
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent {
  columnNameEn:any
  columnNameAr: any;
  type:any
  @Output() saveEvent = new EventEmitter<{ nameAr: string, nameEn: string,type:string }>();
 constructor(private ref: DynamicDialogRef ,public config: DynamicDialogConfig ) {
 }
  save() {
    const columnData = {
      nameAr: this.columnNameAr,
      nameEn: this.columnNameEn,
      type:'text'
    };

    this.ref.close(columnData)
  }


}
