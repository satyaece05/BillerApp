import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtshopComponent } from './ctshop.component';

describe('CtshopComponent', () => {
  let component: CtshopComponent;
  let fixture: ComponentFixture<CtshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
