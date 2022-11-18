import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusPalpitesComponent } from './meus-palpites.component';

describe('MeusPalpitesComponent', () => {
  let component: MeusPalpitesComponent;
  let fixture: ComponentFixture<MeusPalpitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusPalpitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusPalpitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
