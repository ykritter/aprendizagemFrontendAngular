import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.css']
})
export class NotificacoesComponent implements OnInit {
  
  sidebarVisible: boolean;

  list = [
    {
      title: "Venha participar da superaula de Power BI",
      date: "01/01/2001",
    },
    {
      title: "Evento de carreira no auditório",
      date: "01/01/2001",
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
