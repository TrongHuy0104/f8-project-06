const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const video = $(".stat__media-video");
const playBtn = $(".stat__media-play-btn");
const videoTag = $(".stat__media-tag");
const videoOverlay = $(".stat__media-overlay");
const feedbackList = $(".feedback__list");
const feedbackItem = $$(".feedback-item");
const dots = $$(".dot");

let isPlayVideo = false;
let feedbackIndex = 0;

// Play Video
playBtn.onclick = () => {
    video.play();
    videoTag.style.display = "none";
    videoOverlay.style.display = "none";
    playBtn.style.display = "none";
};

dots.forEach((dot, index) => {
    dot.onclick = () => {
        updateFeedbackByIndex(index);
        feedbackIndex = index;
        clearInterval(interval);
        interval = setInterval(autoSlideShow, 3000);
    };
});

// Handle Auto Slideshow
function autoSlideShow() {
    feedbackIndex++;
    if (feedbackIndex == feedbackItem.length) {
        feedbackIndex = 0;
    }

    updateFeedbackByIndex(feedbackIndex);
}

// Auto Slideshow
let interval = setInterval(autoSlideShow, 3000);

// Update Feedback By Index
function updateFeedbackByIndex(index) {
    feedbackItem.forEach((item, index) => {
        if (item.classList.contains("feedback-item--active")) {
            item.classList.remove("feedback-item--active");
        }
        if (dots[index].classList.contains("dot--active")) {
            dots[index].classList.remove("dot--active");
        }
    });
    feedbackItem[index].classList.add("feedback-item--active");
    dots[index].classList.add("dot--active");
}
