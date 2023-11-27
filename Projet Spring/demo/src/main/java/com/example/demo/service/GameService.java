package com.example.demo.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.exception.GameNotFoundException;
import com.example.demo.model.Game;
import com.example.demo.repository.GameRepo;

@Service
public class GameService {
    private final GameRepo gameRepo;

    public GameService(GameRepo gameRepo) {
        this.gameRepo = gameRepo;
    }

    public Game addGame(Game game){
        game.setGameCode(UUID.randomUUID().toString());
        return gameRepo.save(game);
    }

    public List<Game> findAllGames(){
        return gameRepo.findAll();
    }

    public Game updateGame(Game game) {
        return gameRepo.save(game);
    }

    public Game findGameById(Long id) {
        return gameRepo.findGameById(id).orElseThrow(() -> new GameNotFoundException ("Game by id " + id + " was not found"));
    }

    public void deleteGame(Long id) {
        System.out.println(id);
        try {
            gameRepo.deleteGameById(id);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        
    }
}
