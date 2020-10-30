import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwordComponent } from './aword.component';

describe('AwordComponent', () => {
  let component: AwordComponent;
  let fixture: ComponentFixture<AwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
