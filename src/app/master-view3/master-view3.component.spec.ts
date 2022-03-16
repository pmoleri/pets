import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCalendarModule } from 'igniteui-angular';
import { MasterView3Component } from './master-view3.component';

describe('MasterView3Component', () => {
  let component: MasterView3Component;
  let fixture: ComponentFixture<MasterView3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterView3Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCalendarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterView3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
