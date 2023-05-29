import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  numPaginas: number
  arrayPersonajes: any[];
  pagina: number;
  constructor(private personajesService: PersonajesService) {
    this.numPaginas = 0
    this.arrayPersonajes = []
    this.pagina = 1
  }

  ngOnInit(): void {

    //Método que los filtra por página

    this.personajesService.getByPage()
      .then((response) => {
        this.numPaginas = response.info.pages
        this.arrayPersonajes = response.results;
      })
      .catch((error) => {
        console.log(error)
      });
  }

  async onClick(cambioPagina: boolean) {

    (cambioPagina) ? this.pagina++ : this.pagina--

    /*    this.personajesService.getByPage(this.pagina)
         .then((response) => {
           this.arrayPersonajes = response.results;
           console.log(this.arrayPersonajes)
         })
         .catch((error) => {
           console.log(error)
         }); */
    //Con async await
    try {
      const response = await this.personajesService.getByPage(this.pagina); //response devuelve todo el objeto, pero solo queremos el result
      this.arrayPersonajes = response.results
    } catch (error) {
      console.log(error)
    }
  }
}
