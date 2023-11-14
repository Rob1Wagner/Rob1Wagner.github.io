package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Game;

public interface GameRepo extends JpaRepository<Game, Long> {

    void deleteGameById(Long id);

    Optional<Game> findGameById(Long id);


}