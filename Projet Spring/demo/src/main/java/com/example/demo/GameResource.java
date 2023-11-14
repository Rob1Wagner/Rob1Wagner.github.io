package com.example.demo;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Game;
import com.example.demo.service.GameService;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/game")
public class GameResource {
    private final GameService gameService;

    public GameResource(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Game>> getAllGames () {
        List<Game> games = gameService.findAllGames();
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Game> getGameById (@PathVariable("id") Long id) {
        Game game = gameService.findGameById(id);
        return new ResponseEntity<>(game, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Game> addGame(@RequestBody Game game){
        Game newGame = gameService.addGame(game);
        return new ResponseEntity<>(newGame, HttpStatus.CREATED);
    }

    @Transactional
    @PutMapping("/update")
    public ResponseEntity<Game> updateGame(@RequestBody Game game){
        Game updateGame = gameService.updateGame(game);
        return new ResponseEntity<>(updateGame, HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("/delete/{id}") 
    public ResponseEntity<?> deleteGame(@PathVariable("id") Long id){
        gameService.deleteGame(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
