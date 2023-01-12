import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { APIResponse, Pokemon } from "./pokemon.model";

@Injectable()
export class PokemonService {
  constructor(private readonly http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<APIResponse>("https://cdn.theprojectfactory.com/pokemon/get.php")
      .pipe(map(({ pokemon }) => pokemon));
  }
}
