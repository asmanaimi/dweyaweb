import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertechComponent } from './ajoutertech.component';

describe('AjoutertechComponent', () => {
  let component: AjoutertechComponent;
  let fixture: ComponentFixture<AjoutertechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutertechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutertechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
