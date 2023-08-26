import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustoemrComponent } from './show-customer.component';

describe('ShowCustoemrComponent', () => {
  let component: ShowCustoemrComponent;
  let fixture: ComponentFixture<ShowCustoemrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCustoemrComponent]
    });
    fixture = TestBed.createComponent(ShowCustoemrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
