import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExcelSheetComponent } from './data-excel-sheet.component';

describe('DataExcelSheetComponent', () => {
  let component: DataExcelSheetComponent;
  let fixture: ComponentFixture<DataExcelSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataExcelSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataExcelSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
