import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-notificacoes',
  templateUrl: './card-notificacoes.component.html',
  styleUrls: ['./card-notificacoes.component.css']
})
export class CardNotificacoesComponent implements OnInit {

  @Input() title: String;
  @Input() date: String;

  constructor() { }

  ngOnInit(): void {
  }

}
