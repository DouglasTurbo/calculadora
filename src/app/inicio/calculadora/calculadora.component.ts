import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public visor: number = 0;
  public numeros: number[] = [0,1,2,3,4,5,6,7,8,9];
  public operadores: string[] = ['+', '-', '*', '/', '%', '√'];
  public operador: string = '';
  public valor: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

  digitarNumero(numero: number){
    let num: string = numero.toString();
    num = this.visor.toString() + num;
    
    if(num.length <= 12){
      this.visor = parseFloat(num);      
    }

  }

  botaoIgual(){
    let total: number = 0;

    switch (this.operador){

      case '+':{
        total = this.valor + this.visor;
        break;
      }

      case '-':{
        total = this.valor - this.visor;
        break;
      }

      case '*':{
        total = this.valor * this.visor;
        break;
      }

      case '/':{
        total = this.valor / this.visor;
        break;
      }

      case '%':{
        total = this.valor * (this.visor/100);
        break;
      }

      case '√':{
        total = Math.sqrt(this.valor);
        break;
      }
    }
    
    this.visor = parseFloat(total.toFixed(2));
  }

  botaoSomar(){
    this.valor = this.visor;
    this.operador = this.operadores[0];
    this.visor = 0;
  }

  botaoSubtrair(){
    this.valor = this.visor;
    this.operador = this.operadores[1];
    this.visor = 0;
  }

  botaoMultiplicar(){
    this.valor = this.visor;
    this.operador = this.operadores[2];
    this.visor = 0;
  }

  botaoDividir(){
    this.valor = this.visor;
    this.operador = this.operadores[3];
    this.visor = 0;
  }

  botaoPorcentagem(){
    this.valor = this.visor;
    this.operador = this.operadores[4];
    this.visor = 0;
  }

  botaoRaizQuadrada(){
    this.valor = this.visor;
    this.operador = this.operadores[5];
    this.botaoIgual();
  }

  apagarVisor(){
    this.visor = 0;
    this.valor = 0;
  }

}
