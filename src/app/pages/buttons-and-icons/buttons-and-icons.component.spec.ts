import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsAndIconsComponent } from './buttons-and-icons.component';

describe('ButtonsAndIconsComponent', () => {
  let component: ButtonsAndIconsComponent;
  let fixture: ComponentFixture<ButtonsAndIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsAndIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsAndIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
