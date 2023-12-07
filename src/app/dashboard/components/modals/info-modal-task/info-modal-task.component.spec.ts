import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModalTaskComponent } from './info-modal-task.component';

describe('InfoModalTaskComponent', () => {
  let component: InfoModalTaskComponent;
  let fixture: ComponentFixture<InfoModalTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoModalTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoModalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
