import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(
    //Inyectamos este objeto para poder lanzar peticiones a un servidor, similar a un fetch pero nativo de angular, se tiene que importar HttpClient.
    private httpClient: HttpClient
  ) {
  }



  getAll(): Promise<any> {
    //Tipar el getAll()
    //Asegurarme de importar firstValueFrom

    return firstValueFrom(
      //httpClient hace una llamada o petición con el método get a la url que indicamos.
      this.httpClient.get<any>('https://rickandmortyapi.com/api/character')
      //httpClient.get() devuelve un observable, necesitamos transformarlo a promesa para consumirlo, para ello importamos firstValueFrom y transforma lo de dentro en una promesa
      // En el get hay que indicar que tipo de dato viene con la respuesta, en este caso ponemos<any> ya que es un objeto, con una array dentro.....

    )
  }
  getByPage(page: number = 1): Promise<any> {


    return firstValueFrom(

      this.httpClient.get<any>(`https://rickandmortyapi.com/api/character/?page=${page}`)


    )
  }
}
