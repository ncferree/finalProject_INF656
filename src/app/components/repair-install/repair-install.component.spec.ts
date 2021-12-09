import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairInstallComponent } from './repair-install.component';

describe('RepairInstallComponent', () => {
  let component: RepairInstallComponent;
  let fixture: ComponentFixture<RepairInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
