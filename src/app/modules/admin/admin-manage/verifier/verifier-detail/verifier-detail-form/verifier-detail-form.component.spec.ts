import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierDetailFormComponent } from './verifier-detail-form.component';

describe('VerifierDetailFormComponent', () => {
  let component: VerifierDetailFormComponent;
  let fixture: ComponentFixture<VerifierDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifierDetailFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifierDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
