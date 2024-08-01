import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierDetailComponent } from './verifier-detail.component';

describe('VerifierDetailComponent', () => {
  let component: VerifierDetailComponent;
  let fixture: ComponentFixture<VerifierDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifierDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
