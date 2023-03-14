import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[]= ['spiderman','Ironman','Hulk','Thor'];
  heroeborrado: string[]= [];

  borrarHeroe(){
    let heroe = this.heroes.pop();
    if(heroe !== undefined )
        this.heroeborrado.push(heroe);
  }

}
