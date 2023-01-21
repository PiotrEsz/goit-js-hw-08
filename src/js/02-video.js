'use strict';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

const KEY_FOR_LOCAL_STORAGE = 'videoplayer-current-time';

const videoplayerCurrentTime = ({ seconds } = 0) => {
  localStorage.setItem(KEY_FOR_LOCAL_STORAGE, seconds);
};
const getVideoplayerCurrentTime = () => {
  return localStorage.getItem(KEY_FOR_LOCAL_STORAGE);
};

player.setCurrentTime(getVideoplayerCurrentTime()).catch(function (err) {
  switch (err.name) {
    case 'RangeError':
      break;

    default:
      break;
  }
});

player.on('timeupdate', throttle(videoplayerCurrentTime, 1000));
