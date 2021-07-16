import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Games } from 'src/app/models/game/game';
import { GameServiceService } from 'src/app/services/game-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-games',
  templateUrl: './result-games.component.html',
  styleUrls: ['./result-games.component.css']
})
export class ResultGamesComponent implements OnInit {

  game: Games = {image:'', background:'', title: '', price:'', description:''};

  constructor(private _route: ActivatedRoute, private _gameService: GameServiceService, private router:Router) {}

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id') as string;
    const game = this._gameService.getGameById(parseInt(id));

    if (game === null){
      this.router.navigate(['/games']);
    } else {
        this.game = game;
    }
    
  }

}
