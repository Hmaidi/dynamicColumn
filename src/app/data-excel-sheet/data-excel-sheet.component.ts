import {JsonPipe, NgFor, NgIf} from '@angular/common';
import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from "primeng/api";
import { DropdownModule } from "primeng/dropdown";
import { Editor, NgxEditorModule } from "ngx-editor";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ColumNameComponent } from "../colum-name/colum-name.component";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import { Types } from '../models/Types.model';
import { Column } from '../models/Colum.model';
import { TableData } from '../models/TableData.model';




@Component({
  selector: 'app-data-excel-sheet',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TableModule, OverlayPanelModule, InputTextModule, NgFor, NgIf, MenuModule, ButtonModule, DropdownModule, NgxEditorModule, JsonPipe],
  providers: [DialogService],
  templateUrl: './data-excel-sheet.component.html',
  styleUrls: ['./data-excel-sheet.component.scss']
})

export class DataExcelSheetComponent implements OnInit {
  formGroup: FormGroup | undefined;
  editor: Editor;
  contentCell:any;

  types:Types[] | undefined;

  ref: DynamicDialogRef | undefined;

  isHeaderEditing: boolean = false;
  items: MenuItem[] | undefined;
  sanitizedContentCell: SafeHtml = '';

  columns: Column[] = [
    {id:1,field: 'col1', header: 'Column 1', editing: false, type: '' },
    {id:2,field: 'col2', header: 'Column 2', editing: false, type: '' },

  ];

  tableData: TableData[] = [
    { col1: 'Data 1-1', col2: 'Data 1-2', editing: false, type: 'text' },
    { col1: 'Data 2-1', col2: 'Data 2-2', editing: false, type: 'text' },
    { col1: 'Data 3-1', col2: 'Data 3-2', editing: false, type: 'text' },
    { col1: 'Data 4-1', col2: 'Data 4-2', editing: false, type: 'text' },
    { col1: 'Data 5-1', col2: 'Data 5-2', editing: false, type: 'text' },
  ];

  constructor(public dialogService: DialogService,public translate: TranslateService,private sanitizer: DomSanitizer ) {
    this.editor = new Editor({

    });

  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl()
    });
    this.sanitizedContentCell = this.sanitizer.bypassSecurityTrustHtml(this.contentCell);

    this.types = [
      { name: 'date' ,  code: 'date' },
      { name: 'number' ,code: 'number' },
      { name: 'text' , code: 'text'},
      { name: 'file', code: 'file' },
      { name: 'percentage', code: 'text' },
      { name: 'currency', code: 'text' },
    ];
  }

  addColumn(data: any) {

    const newField = data?.nameEn?.toLowerCase().replace(/\s+/g, '');
    this.columns.push({
      id:data.id,
      field: newField,
      header: data.nameEn,
      editing: false,
      type: data.type
    });

    this.tableData.forEach((row) => (row[newField] = ''));


  }

  toggleOverlay(event: Event, overlayPanel: OverlayPanel) {
    overlayPanel.toggle(event);
  }

  saveHeader(index: number,  event:any) {
    this.columns[index].editing = false;
    this.isHeaderEditing = false;

  }

  saveContent(index: number, field: string) {
    const rowToUpdate = this.tableData[index];
    if (rowToUpdate) {
      rowToUpdate[field] = this.contentCell;

    }


  }

  deplicateHeader(index: number) {
    const columnToDuplicate = this.columns[index];
    const newField = `col${this.columns.length + 1}`;
    const newColumn = { ...columnToDuplicate, field: newField, header: `${columnToDuplicate.header} (copy)` };

    this.columns.push(newColumn);

    this.tableData = this.tableData.map(row => ({
      ...row,
      [newField]: row[columnToDuplicate.field]
    }));
  }

  deleteHeader(index: number) {

    const columnIndex = this.columns.findIndex(column => column.id === index+1);

    if (columnIndex !== -1) {

      this.columns.splice(columnIndex, 1);

      this.tableData.forEach(row => {
        delete row[index];
      });
    }
  }

  updateHeader(index: number) {
    this.columns[index].editing = true;
  }

  renameHeader(index: number) {
    this.isHeaderEditing = true;
    this.columns[index].editing = true;
  }


  trackByIndex(index: number, item: any): any {
    return index;
  }

  openModal(index: any) {
    this.ref = this.dialogService.open(ColumNameComponent, {
      modal: true,
      data: {
        id: index
      },
    });
    this.ref.onClose.subscribe((data: any) => {
      this.addColumn(data);
    });
  }


  updateHeaderFromContentCell($event: any) {

  }

}
