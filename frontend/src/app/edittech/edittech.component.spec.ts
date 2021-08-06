import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittechComponent } from './edittech.component';

describe('EdittechComponent', () => {
  let component: EdittechComponent;
  let fixture: ComponentFixture<EdittechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
