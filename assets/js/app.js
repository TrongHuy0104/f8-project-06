const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const video = $(".stat__media-video");
const playBtn = $(".stat__media-play-btn");
const videoTag = $(".stat__media-tag");
const videoOverlay = $(".stat__media-overlay");
const feedbackList = $(".feedback__list");
const feedbackItem = $$(".feedback-item");
const dots = $$(".dot");
const faqItems = $$(".faq-item");
const faqIcons = $$(".faq-item__icon-wrap");
const FAQAnswers = $$(".faq-item__desc");
const menuIcon = $(".menu__icon-wrap");
const mobileHeader = $(".mobile-header");
const overlay = $(".overlay");
const pcNav = $(".navbar__list");
const mobileNav = $(".mobile-header__list");

let isPlayVideo = false;
let feedbackIndex = 0;
let isShowAnswer = false;
let isShowMobileHeader = false;

mobileNav.innerHTML = pcNav.innerHTML;

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

faqIcons.forEach((faqIcon, index) => {
    faqIcon.onclick = () => {
        showFAQAnswer(index);
    };
});

menuIcon.onclick = showMobileHeader;

overlay.onclick = hideMobileHeader;

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

function showFAQAnswer(index) {
    const faqIconOpen = faqIcons[index].querySelector(".faq-item__icon--open");
    const faqIconClose = faqIcons[index].querySelector(
        ".faq-item__icon--close"
    );
    const faqTitle = faqItems[index].querySelector(".faq-item__title");
    if (!isShowAnswer) {
        FAQAnswers[index].style.display = "block";
        faqIconOpen.style.display = "none";
        faqIconClose.style.display = "block";
        faqIcons[index].style.alignSelf = "center";
        faqIcons[index].style.color = "var(--primary-color)";
        faqIcons[index].style.borderColor = "rgb(93 59 238 / 20%)";
        faqTitle.style.color = "var(--primary-color)";
        isShowAnswer = true;
    } else {
        FAQAnswers[index].style.display = "none";
        faqIconOpen.style.display = "block";
        faqIconClose.style.display = "none";
        faqIcons[index].style.color = "var(--black-color)";
        faqItems[index].style.alignItem = "center";
        faqIcons[index].style.borderColor = "rgb(22, 26, 28, 0.2)";
        faqTitle.style.color = "var(--black-color)";
        isShowAnswer = false;
    }
}

function showMobileHeader() {
    mobileHeader.style.transform = "translateX(0%)";
    overlay.style.opacity = 1;
    overlay.style.visibility = "visible";
}

function hideMobileHeader() {
    mobileHeader.style.transform = "translateX(100%)";
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
}
