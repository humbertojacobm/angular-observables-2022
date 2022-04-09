import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App03ThrottletimeComponent } from './app03-throttletime.component';

describe('App03ThrottletimeComponent', () => {
  let component: App03ThrottletimeComponent;
  let fixture: ComponentFixture<App03ThrottletimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App03ThrottletimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App03ThrottletimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
