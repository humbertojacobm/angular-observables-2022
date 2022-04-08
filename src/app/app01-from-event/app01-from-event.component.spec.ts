import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App01FromEventComponent } from './app01-from-event.component';

describe('App01FromEventComponent', () => {
  let component: App01FromEventComponent;
  let fixture: ComponentFixture<App01FromEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App01FromEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App01FromEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
