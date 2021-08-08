import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  colorslist = [
    'rgba(247, 37, 133, .5)', //$flickr-pink:
    'rgba(114, 9, 183, .5)', //$purple:
    'rgba(58, 12, 163, .5)', //$trypan-blue:
    'rgba(67, 97, 238, .5)', //$ultramarine-blue:
    'rgba(76, 201, 240, .5)', //$vivid-sky-blue:
  ];
  constructor() {}

  public generateUUID() {

    var alphaPart = this.timestampToAlpha();

    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    var firstPartx = ('000' + firstPart.toString(36)).slice(-3);
    var secondPartx = ('000' + secondPart.toString(36)).slice(-3);
    return alphaPart + firstPartx + secondPartx;
  }

  digitToAlpha(digit) {
    return 'QRSTUVWXYZ'.charAt(digit);
  }
  timestampToAlpha() {
    let ts = Date.now();
    let tsstr = ts.toString();
    let alphaStr = '';
    for (var i = 0; i < tsstr.length; i++) {
      alphaStr += this.digitToAlpha(tsstr.charAt(i));
    }
    return alphaStr;
  }
  randomColor() {

    return this.colorslist[Math.floor(Math.random() * this.colorslist.length)];
  }

  strToFixed(str: string, decimals: number) {
    return parseInt(str).toFixed(decimals);
  }

  stringTimeToInt(timeval) {
    return parseInt(timeval);
  }
  timeago(ts) {
    var ms = (Date.now() - ts) / 1000;
    var ago = Math.floor(ms);
    var part = 0;

    if (ago < 60) {
      return 'just now';
    }

    if (ago < 120) {
      return 'a minute ago';
    }
    if (ago < 7199 && ago > 3600) {
      return 'about 30 minutes ago';
    }

    if (ago < 7200) {
      return 'an hour ago';
    }
    if (ago < 86400) {
      while (ago >= 3600) {
        ago -= 3600;
        part += 1;
      }
      return part + ' hours ago';
    }

    if (ago < 172800) {
      return 'a day ago';
    }
    if (ago < 604800) {
      while (ago >= 172800) {
        ago -= 172800;
        part += 1;
      }
      return part + ' days ago';
    }

    if (ago < 1209600) {
      return 'a week ago';
    }
    if (ago < 2592000) {
      while (ago >= 604800) {
        ago -= 604800;
        part += 1;
      }
      return part + ' weeks ago';
    }

    if (ago < 5184000) {
      return 'a month ago';
    }
    if (ago < 31536000) {
      while (ago >= 2592000) {
        ago -= 2592000;
        part += 1;
      }
      return part + ' months ago';
    }

    if (ago < 1419120000) {
      // 45 years, approximately the epoch
      return 'more than year ago';
    }

    // TODO pass in Date.now() and ms to check for 0 as never
    return 'never';
  }
}