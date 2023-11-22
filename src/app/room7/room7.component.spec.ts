import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Room7Component } from './room7.component';

describe('Room7Component', () => {
  let component: Room7Component;
  let fixture: ComponentFixture<Room7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Room7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Room7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
