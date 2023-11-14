package com.example.demo.model;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Game implements Serializable{
    @Id 
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String title;
    private String description;
    private List<String> tags;
    private List<String> warntags;
    private Integer nbLikes;
    private Boolean isAlreadyLiked;
    @Column(nullable = false, updatable = false)
    private String gameCode;

    public Game() {
    }

    public Game(String title, String description, List<String> tags, List<String> warntags, Integer nbLikes,
            Boolean isAlreadyLiked, String gameCode) {
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.warntags = warntags;
        this.nbLikes = nbLikes;
        this.isAlreadyLiked = isAlreadyLiked;
        this.gameCode = gameCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public List<String> getWarntags() {
        return warntags;
    }

    public void setWarntags(List<String> warntags) {
        this.warntags = warntags;
    }

    public Integer getNbLikes() {
        return nbLikes;
    }

    public void setNbLikes(Integer nbLikes) {
        this.nbLikes = nbLikes;
    }

    public Boolean getIsAlreadyLiked() {
        return isAlreadyLiked;
    }

    public void setIsAlreadyLiked(Boolean isAlreadyLiked) {
        this.isAlreadyLiked = isAlreadyLiked;
    }

    public String getGameCode() {
        return gameCode;
    }

    public void setGameCode(String gameCode) {
        this.gameCode = gameCode;
    }

    @Override
    public String toString() {
        return "Game{" +
        "id=" + id +
        ", title=" + title + '\'' +
        ", description=" + description + '\'' +
        ", tags=" + tags + '\'' +
        ", warntags=" + warntags + '\'' +
        ", nbLikes=" + nbLikes + '\'' +
        ", isAlreadyLiked=" + isAlreadyLiked + '\'' +
        '}';
    }
}

