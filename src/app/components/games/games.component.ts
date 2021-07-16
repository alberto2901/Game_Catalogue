import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/models/game/game';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gamesObject: any;
  
  constructor(private _gameService: GameServiceService) { }

  ngOnInit(): void {
    this.gamesObject = this._gameService.getGames();
    console.log("GAMES JSON ", this.gamesObject);
  }
}
