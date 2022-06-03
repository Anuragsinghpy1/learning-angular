import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineUserComponent } from './inline-user.component';

describe('InlineUserComponent', () => {
  let component: InlineUserComponent;
  let fixture: ComponentFixture<InlineUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
