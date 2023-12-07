import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModalTaskComponent } from './create-modal-task.component';

describe('CreateModalTaskComponent', () => {
  let component: CreateModalTaskComponent;
  let fixture: ComponentFixture<CreateModalTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModalTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateModalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
