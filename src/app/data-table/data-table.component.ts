import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {OverlayPanel, OverlayPanelModule} from "primeng/overlaypanel";
import {InputTextModule} from "primeng/inputtext";
import {JsonPipe, NgFor, NgIf} from "@angular/common";
import {MenuModule} from "primeng/menu";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {Editor, NgxEditorModule} from "ngx-editor";
import {Types} from "../models/Types.model";
import {ColumNameComponent} from "../colum-name/colum-name.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {TranslateService} from "@ngx-translate/core";
import {DomSanitizer} from "@angular/platform-browser";

interface Column {
  field: string;
  header: string;
  type:string
}

interface TableData {
  [key: string]: any;
}


@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TableModule, OverlayPanelModule, InputTextModule, NgFor, NgIf, MenuModule, ButtonModule, DropdownModule, NgxEditorModule, JsonPipe],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
  providers: [DialogService],
})
export class DataTableComponent implements OnInit{
  types:any;

    editor: Editor;

  ref: DynamicDialogRef | undefined;
  headers: Column[] = [
    { field: 'col1', header: 'Column 1' ,type: 'text' },
    { field: 'col2', header: 'Column 2' ,type: 'text' },
    { field: 'col3', header: 'Column 3' ,type: 'text' },
  ];

  tableData: TableData[] = [
    { col1: 'A1', col2: 'B1', col3: 'C1'  },
    { col1: 'A2', col2: 'B2', col3: 'C2'  },
    { col1: 'A3', col2: 'B3', col3: 'C3' },
  ];

  editingCell: { row: number; col: number } | null = null;
  currentCellValue: string = '';
  editingHeader: number | null = null;
  currentHeaderValue: string = '';
  private type: any;

  constructor(public dialogService: DialogService,public translate: TranslateService,private sanitizer: DomSanitizer ) {
    this.editor = new Editor({

    });

  }
  ngOnInit(): void {

    this.types = [
      { name: 'date' ,  code: 'date' },
      { name: 'number' ,code: 'number' },
      { name: 'text' , code: 'text'},
      { name: 'file', code: 'file' },
      { name: 'percentage', code: 'text' },
      { name: 'currency', code: 'text' },
    ];
  }

  editCell(row: number, col: number): void {
    this.editingCell = { row, col };
    this.currentCellValue = this.tableData[row][this.headers[col].field];
   // this.currentCellValue = this.cleanCellValue(this.tableData[row][this.headers[col].field]);

  }

  isEditingCell(row: number, col: number) {
    return (
      this.editingCell &&
      this.editingCell.row === row &&
      this.editingCell.col === col
    );
  }

  onCellValueChange(value: string): void {
    this.currentCellValue = value;
    if (this.editingCell) {
      this.tableData[this.editingCell.row][this.headers[this.editingCell.col].field] = value;
    }

  }

  onExternalInputChange(event: any): void {
    const value = this.removeHtmlTags(event.target.value);
    this.currentCellValue = value;
    if (this.editingCell) {
      this.tableData[this.editingCell.row][this.headers[this.editingCell.col].field] = value;
    }
  }
  removeHtmlTags(str:any) {
    return str?.replace(/<\/?[^>]+(>|$)/g, "");
  }
  saveCellValue(row: number, col: number): void {
    if (this.editingCell) {
      this.tableData[row][this.headers[col].field] = this.currentCellValue;
      this.editingCell = null;
    }
  }
  addColumn(header: string, field: string,type:any): void {
    this.headers.push({ field, header,type });
    this.tableData.forEach((row) => {
      row[field] = 'click to update';

    });
  }

  editHeader(col: number): void {
    this.editingHeader = col;
    this.currentHeaderValue = this.headers[col].header;
  }

  isEditingHeader(col: number): boolean {
    return this.editingHeader === col;
  }

  onHeaderValueChange(value: string): void {
    this.currentHeaderValue = value;
    if (this.editingHeader !== null) {
      this.headers[this.editingHeader].header = value;
    }
  }

  saveHeaderValue(col: number): void {
    if (this.editingHeader !== null) {
      this.headers[this.editingHeader].header = this.currentHeaderValue;
      this.editingHeader = null;
    }
  }

  duplicateColumn(col: number): void {
    const newField = 'col' + (this.headers.length + 1);
    const newHeader = this.headers[col].header + ' (copy)';
    const newType = this.headers[col].type;

    this.headers.push({ field: newField, header: newHeader,type :newType});
    this.tableData.forEach((row) => {
      row[newField] = row[this.headers[col].field];
    });
  }

  deleteColumn(col: number): void {
    // Remove the column from the headers
    this.headers.splice(col, 1);

    // Remove the column data from each row
    this.tableData.forEach((row) => {
      delete row[this.headers[col].field];
    });
  }

  cleanCellValue(value: any): any {
    if (typeof value === 'string') {
      // Use innerText to get the text without HTML tags
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = value;
      return tempDiv.innerText;
    }
    return value;
  }


  toggleOverlay(event: Event, overlayPanel: OverlayPanel) {
    overlayPanel.toggle(event);
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
     this.addColumn(data.nameEn,data,data.type);
    });
  }

}
