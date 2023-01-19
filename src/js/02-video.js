'use strict';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const videoplayerCurrentTime = ({ seconds } = 0) => {
  localStorage.setItem(STORAGE_KEY, seconds);
};
const getVideoplayerCurrentTime = () => {
  return localStorage.getItem(STORAGE_KEY);
};

player.setCurrentTime(getVideoplayerCurrentTime()).catch(function (err) {
  switch (err.name) {
    case 'RangeError':
      // if the time is <0 || > than video's lenght
      break;
    default:
      // other error
      break;
  }
});

player.on('timeupdate', throttle(videoplayerCurrentTime, 1000));
