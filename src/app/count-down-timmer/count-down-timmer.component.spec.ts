import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimmerComponent } from './count-down-timmer.component';

describe('CountDownTimmerComponent', () => {
  let component: CountDownTimmerComponent;
  let fixture: ComponentFixture<CountDownTimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountDownTimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
