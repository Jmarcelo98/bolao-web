import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarConfrontoComponent } from './adicionar-confronto.component';

describe('AdicionarConfrontoComponent', () => {
  let component: AdicionarConfrontoComponent;
  let fixture: ComponentFixture<AdicionarConfrontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarConfrontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarConfrontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
