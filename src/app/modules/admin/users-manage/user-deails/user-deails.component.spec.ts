import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeailsComponent } from './user-deails.component';

describe('UserDeailsComponent', () => {
  let component: UserDeailsComponent;
  let fixture: ComponentFixture<UserDeailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDeailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
