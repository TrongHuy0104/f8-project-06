"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const video = $(".stat__media-video");
const playBtn = $(".stat__media-play-btn");
const videoTag = $(".stat__media-tag");
const videoOverlay = $(".stat__media-overlay");

const app = {
    isPlayVideo: false,

    handleEvents: function () {
        playBtn.onclick = () => {
            video.play();
            videoTag.style.display = "none";
            videoOverlay.style.display = "none";
            playBtn.style.display = "none";
        };
    },

    start: function () {
        this.handleEvents();
        // this.generateMenuMobile();
        // this.automaticSlideShow();
    },
};

app.start();
