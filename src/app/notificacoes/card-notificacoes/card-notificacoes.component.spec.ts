import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotificacoesComponent } from './card-notificacoes.component';

describe('CardNotificacoesComponent', () => {
  let component: CardNotificacoesComponent;
  let fixture: ComponentFixture<CardNotificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNotificacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
