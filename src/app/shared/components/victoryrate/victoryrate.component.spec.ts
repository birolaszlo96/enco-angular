import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoryRateComponent } from './victoryrate.component';

describe('VictoryRateComponent', () => {
  let component: VictoryRateComponent;
  let fixture: ComponentFixture<VictoryRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictoryRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictoryRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
