import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataExcelSheetComponent } from './data-excel-sheet/data-excel-sheet.component';

import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {MenuItem} from "primeng/api";
import {DataTableComponent} from "./data-table/data-table.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DataExcelSheetComponent,
    TranslateModule,ButtonModule,MenuModule,DataTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'project';
  isRtl = true;

  constructor(public translate: TranslateService) {
    translate.addLangs(['ar', 'en']);
    translate.setDefaultLang('ar');

  }

  switchLang(lang: string) {
    this.translate.use(lang);

    this.isRtl = !this.isRtl;
    document.body.setAttribute('dir', this.isRtl ? 'rtl' : 'ltr');
    document.documentElement.dir = this.isRtl ? 'rtl' : 'ltr';
    document.documentElement.style.direction = this.isRtl ? 'rtl' : 'ltr';
  }
}
