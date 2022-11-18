import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPalpiteComponent } from './criar-palpite.component';

describe('CriarPalpiteComponent', () => {
  let component: CriarPalpiteComponent;
  let fixture: ComponentFixture<CriarPalpiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPalpiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPalpiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
