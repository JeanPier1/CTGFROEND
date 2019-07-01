import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarseComponent } from './evaluarse.component';

describe('EvaluarseComponent', () => {
  let component: EvaluarseComponent;
  let fixture: ComponentFixture<EvaluarseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluarseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
