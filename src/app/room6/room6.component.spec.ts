import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Room6Component } from './room6.component';

describe('Room6Component', () => {
  let component: Room6Component;
  let fixture: ComponentFixture<Room6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Room6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Room6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
