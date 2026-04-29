import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
});
export class AppComponent {

  produtosInicio = [
    { nome: 'Destaque 1', preco: 89.90, imagem: 'https://via.placeholder.com/200' },
    { nome: 'Destaque 2', preco: 129.90, imagem: 'https://via.placeholder.com/200' }
  ];

  produtosBiquinis = [
    { nome: 'Biquíni Rosa', preco: 79.90, imagem: 'https://via.placeholder.com/200' },
    { nome: 'Biquíni Azul', preco: 99.90, imagem: 'https://via.placeholder.com/200' }
  ];

  produtosRoupas = [
    { nome: 'Vestido Verão', preco: 119.90, imagem: 'https://via.placeholder.com/200' },
    { nome: 'Short Praia', preco: 69.90, imagem: 'https://via.placeholder.com/200' }
  ];

  produtosAcessorios = [
    { nome: 'Colar Brasil', preco: 39.90, imagem: 'https://via.placeholder.com/200' },
    { nome: 'Óculos de Sol', preco: 59.90, imagem: 'https://via.placeholder.com/200' }
  ];

}