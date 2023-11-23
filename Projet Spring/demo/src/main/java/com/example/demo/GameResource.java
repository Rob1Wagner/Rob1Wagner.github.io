package com.example.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Game;
import com.example.demo.repository.GameRepo;
import com.example.demo.service.GameService;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/game")
public class GameResource {
    private final GameService gameService;
    private final GameRepo gameRepository;

    public GameResource(GameService gameService, GameRepo gameRepository) {
        this.gameService = gameService;
        this.gameRepository = gameRepository;
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

    @GetMapping("/pageable/{pageNumber}")
    public ResponseEntity<?> getGamesPageable(
        @PathVariable("pageNumber") final Integer pageNumber,
        @RequestParam(defaultValue = "2") final Integer size
    ) {
        return ResponseEntity.ok(convertToResponse(gameRepository.getGames(PageRequest.of(pageNumber, size))));
    }

    private Map<String, Object> convertToResponse(final Page<Game> pageGames) {
        Map<String, Object> response = new HashMap<>();
        response.put("games", pageGames.getContent());
        response.put("currentPage", pageGames.getNumber());
        response.put("totalItems", pageGames.getTotalElements());
        response.put("totalPages", pageGames.getTotalPages());
        return response;
    }
}
