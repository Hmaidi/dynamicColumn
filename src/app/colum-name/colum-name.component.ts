import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {InputNumberModule} from "primeng/inputnumber";

@Component({
  selector: 'app-colum-name',
  standalone: true,
  imports: [FormsModule, InputNumberModule, ButtonModule, InputTextModule],
  templateUrl: './colum-name.component.html',
  styleUrl: './colum-name.component.scss'
})
export class ColumNameComponent {
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
      type: this.config.data.id
    };

    this.ref.close(columnData)
  }

}
