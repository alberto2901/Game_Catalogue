import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../assets/games.json';
import { Games } from '../models/game/game';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  
  game:any;
  games: Games = {image:'', background:'', title: '', price:'', description:''};

  constructor(private router:Router) { }

  getGames(){
    return data.games;
  }

  getGameById(id:number){
    const game = data.games.find(i => i.id === id);
    
    if (typeof game === 'undefined') {
      return null;
    }

    /* data.games.forEach(e => {
      if(id === e.id){
        return game;
      } else{
        return this.games;
      }
    }); */

    return game;
    
  }
}
