import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App02ScanReduceComponent } from './app02-scan-reduce.component';

describe('App02ScanReduceComponent', () => {
  let component: App02ScanReduceComponent;
  let fixture: ComponentFixture<App02ScanReduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App02ScanReduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App02ScanReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
