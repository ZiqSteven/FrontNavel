import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometargetComponent } from './hometarget.component';

describe('HometargetComponent', () => {
  let component: HometargetComponent;
  let fixture: ComponentFixture<HometargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
