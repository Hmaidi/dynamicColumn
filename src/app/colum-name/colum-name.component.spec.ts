import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumNameComponent } from './colum-name.component';

describe('ColumNameComponent', () => {
  let component: ColumNameComponent;
  let fixture: ComponentFixture<ColumNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
