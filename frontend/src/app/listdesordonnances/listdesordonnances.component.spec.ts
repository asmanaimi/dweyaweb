import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdesordonnancesComponent } from './listdesordonnances.component';

describe('ListdesordonnancesComponent', () => {
  let component: ListdesordonnancesComponent;
  let fixture: ComponentFixture<ListdesordonnancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdesordonnancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdesordonnancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
