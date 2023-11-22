import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Room8Component } from './room8.component';

describe('Room8Component', () => {
  let component: Room8Component;
  let fixture: ComponentFixture<Room8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Room8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Room8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
