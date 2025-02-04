import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFreindsComponent } from './list-friends.component';

describe('ListFreindsComponent', () => {
  let component: ListFreindsComponent;
  let fixture: ComponentFixture<ListFreindsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFreindsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFreindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
