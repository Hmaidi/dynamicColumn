import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataExcelSheetComponent } from './data-excel-sheet/data-excel-sheet.component';

import {TranslateModule, TranslateService} from "@ngx-translate/core";
import { DropdownModule } from 'primeng/dropdown';
 



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DataExcelSheetComponent,
    TranslateModule,DropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'project';
  currentLang:string='ar';
  direction:string='rtl'
  constructor(public translate: TranslateService) {
    translate.addLangs(['ar', 'en']);
    translate.setDefaultLang('ar');
    this.translate.onLangChange.subscribe(()=>{
      if (this.currentLang == "ar") {
        this.direction= "rtl";
        document.documentElement.dir = "rtl";
        document.documentElement.style.direction = "rtl";
      }   
      else {
         
        document.dir = "ltr";
        
        this.direction= "ltr";
        document.documentElement.dir = "ltr";
        document.documentElement.style.direction = "ltr";
      }
    })
  
     

  }
}
