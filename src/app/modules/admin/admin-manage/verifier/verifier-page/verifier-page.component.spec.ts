import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierPageComponent } from './verifier-page.component';

describe('VerifierPageComponent', () => {
  let component: VerifierPageComponent;
  let fixture: ComponentFixture<VerifierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifierPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
