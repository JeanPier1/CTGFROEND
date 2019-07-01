import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarEvaluacionComponent } from './configurar-evaluacion.component';

describe('ConfigurarEvaluacionComponent', () => {
  let component: ConfigurarEvaluacionComponent;
  let fixture: ComponentFixture<ConfigurarEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurarEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
