const refs = {
  bodyEl: document.querySelector('body'),
  mainCardListEl: document.querySelector('.js-collection__list'),
  searchForm: document.getElementById('search-form'),
  headerEl: document.querySelector('.header'),
  homeBtnEl: document.querySelector('.home-button'),
  libraryBtnEl: document.querySelector('.library-button'),
  searchFormEl: document.querySelector('.search-form'),
  libraryMenuEl: document.querySelector('.library-menu'),
  paginationEl: document.querySelector('.pagination'),
  paginationListEl: document.querySelector('.pagination__list'),
  previousPageBtnEl: document.getElementById('previous-page-btn'),
  firstPageBtnEl: document.getElementById('first-page-btn'),
  previousDotsLiEl: document.getElementById('previous-dots-li'),
  minusTwoBtnEl: document.getElementById('minus-2-btn'),
  minusOneBtnEl: document.getElementById('minus-1-btn'),
  currentBtnEl: document.getElementById('current-page-btn'),
  plusOneBtnEl: document.getElementById('plus-1-btn'),
  plusTwoBtnEl: document.getElementById('plus-2-btn'),
  nextDotsLiEl: document.getElementById('next-dots-li'),
  lastPageBtnEl: document.getElementById('last-page-btn'),
  nextPageBtnEl: document.getElementById('next-page-btn'),
  preloader: document.getElementById('preloader-page'),
  percentDisplay: document.getElementById('loading-percent'),
  addWatched: document.querySelector('.js-addWatched'),
  addQueue: document.querySelector('.js-addQueue'),
  backdrop: document.querySelector('.backdrop'),
  modalFrame: document.querySelector('.modal-wrap'),
  modalErrorEl: document.querySelector('.js-error-backdrop'),
  errorCloseBtnEl: document.getElementById('error-close-btn'),
  libraryWatchedBtn: document.querySelector('.library-watched-btn'),
  libraryQueueBtn: document.querySelector('.library-queue-btn'),
  modalCloseBtn: document.querySelector('.close-btn'),
};

export const {
  bodyEl,
  mainCardListEl,
  headerEl,
  homeBtnEl,
  libraryBtnEl,
  paginationListEl,
  searchForm,
  searchFormEl,
  libraryMenuEl,
  paginationEl,
  previousPageBtnEl,
  firstPageBtnEl,
  previousDotsLiEl,
  minusTwoBtnEl,
  minusOneBtnEl,
  currentBtnEl,
  plusOneBtnEl,
  plusTwoBtnEl,
  nextDotsLiEl,
  lastPageBtnEl,
  nextPageBtnEl,
  preloader,
  percentDisplay,
  addWatched,
  addQueue,
  backdrop,
  modalFrame,
  modalErrorEl,
  errorCloseBtnEl,
  libraryWatchedBtn,
  libraryQueueBtn,
  modalCloseBtn,
} = refs;