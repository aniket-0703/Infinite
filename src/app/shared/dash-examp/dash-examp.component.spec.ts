import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashExampComponent } from './dash-examp.component';

describe('DashExampComponent', () => {
  let component: DashExampComponent;
  let fixture: ComponentFixture<DashExampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashExampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
