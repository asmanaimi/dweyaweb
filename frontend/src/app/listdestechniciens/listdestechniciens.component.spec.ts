import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdestechniciensComponent } from './listdestechniciens.component';

describe('ListdestechniciensComponent', () => {
  let component: ListdestechniciensComponent;
  let fixture: ComponentFixture<ListdestechniciensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdestechniciensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdestechniciensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
