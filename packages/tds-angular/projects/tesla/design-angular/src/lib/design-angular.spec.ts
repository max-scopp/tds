import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAngular } from './design-angular';

describe('DesignAngular', () => {
  let component: DesignAngular;
  let fixture: ComponentFixture<DesignAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignAngular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignAngular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
