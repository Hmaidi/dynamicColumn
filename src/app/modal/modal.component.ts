import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";

import {DialogModule} from "primeng/dialog";
import {PaginatorModule} from "primeng/paginator";
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {NgIf} from "@angular/common";
import {InputTextComponent} from "../components/input-text/input-text.component";
import {NumberComponent} from "../components/number/number.component";
import {PriceComponent} from "../components/price/price.component";
import {PercentageComponent} from "../components/percentage/percentage.component";
import {SelectedComponent} from "../components/selected/selected.component";
import {FileComponent} from "../components/file/file.component";
import {DateComponent} from "../components/date/date.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    ButtonModule,

    DialogModule,
    ButtonModule,
    PaginatorModule,

    NgIf,
    InputTextComponent,
    NumberComponent,
    PriceComponent,
    PercentageComponent,
    SelectedComponent,
    FileComponent,
    DateComponent
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

   dataType:any
  constructor( public config: DynamicDialogConfig) {
    this.dataType=config.data.id

  }


  save() {

  }
}
