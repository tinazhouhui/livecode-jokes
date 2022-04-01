import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeSelectorComponent } from './joke-selector.component';

describe('JokeSelectorComponent', () => {
  let component: JokeSelectorComponent;
  let fixture: ComponentFixture<JokeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
