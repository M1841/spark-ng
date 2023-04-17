import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffleModalComponent } from './shuffle-modal.component';

describe('ShuffleModalComponent', () => {
  let component: ShuffleModalComponent;
  let fixture: ComponentFixture<ShuffleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuffleModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShuffleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
