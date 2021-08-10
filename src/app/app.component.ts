import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontAngularUi';
  funcionarios = [
    {pessoa: "Pedro Victor", tipo: 'DESPESA', descricao: 'compra de pão',
      dataVencimento: '21/02/2019', dataPagamento: null, valor:4.59
    },
    {pessoa: "Adam Levine", tipo: 'DESPESA', descricao: 'compra de gelo',
      dataVencimento: '21/02/2020', dataPagamento: null, valor:9.19
    },
    {pessoa: "Alice Hudges", tipo: 'DESPESA', descricao: 'compra de frango',
      dataVencimento: '08/08/2021', dataPagamento: null, valor:14.59
    },
    {pessoa: "Filipi Esdras", tipo: 'DESPESA', descricao: 'compra de carvão',
      dataVencimento: '21/02/2019', dataPagamento: null, valor:5.66
    },
    {pessoa: "Lindsey Logggan", tipo: 'DESPESA', descricao: 'compra de sanduíche',
      dataVencimento: '12/09/2019', dataPagamento: null, valor:10.90
    },
    {pessoa: "Maria Pina", tipo: 'RECEITA', descricao: 'compensação de compra defeituosa de um controle remoto',
      dataVencimento: '12/09/2020', dataPagamento: null, valor:69.90
    }
  ];
}
