import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideDropdownComponent } from './aside-dropdown.component';

describe('AsideDropdownComponent', () => {
  let component: AsideDropdownComponent;
  let fixture: ComponentFixture<AsideDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
