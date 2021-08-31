import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectordoComponent } from './affectordo.component';

describe('AffectordoComponent', () => {
  let component: AffectordoComponent;
  let fixture: ComponentFixture<AffectordoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectordoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectordoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
