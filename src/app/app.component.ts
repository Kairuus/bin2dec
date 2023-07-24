import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
  }
  hidden = true

  validarNumeroBinario(input: any) {
    const regex = /^[01]+$/;
    return regex.test(input);
  }

  convert(bin: string){
    let decimal = 0

    if(this.hidden === false){
      return decimal
    }
    for(let index=bin.length-1; index>=0; index--){
      decimal += Number(bin[index])*Math.pow(2,bin.length-1-index);
    }

    return decimal;
  }

  validation(input: string){

    if(this.validarNumeroBinario(input) === false && input !== '' ){
      this.hidden = false
    }else{
      this.hidden = true
    }
  }
}
