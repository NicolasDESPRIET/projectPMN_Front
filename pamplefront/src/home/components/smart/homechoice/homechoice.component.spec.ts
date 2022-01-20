import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthformComponent } from './homechoice.component';

describe('AuthformComponent', () => {
  let component: AuthformComponent;
  let fixture: ComponentFixture<AuthformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
