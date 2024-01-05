package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Game;

public interface GameRepo extends JpaRepository<Game, Long> {

    void deleteGameById(Long id);

    Optional<Game> findGameById(Long id);

    @Query(value = "SELECT g FROM Game g ")
    Page<Game> getGames(final Pageable pageable);

    // void sortGameAlphabetly(Sort sort);
}