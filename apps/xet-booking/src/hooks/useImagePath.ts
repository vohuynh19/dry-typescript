import { useMemo } from 'react';

export const useImagePath = () => {
  return useMemo(
    () => ({
      BACKGROUND_URL: '/images/background.png',
      LOGO_URL: '/images/logo.png',
      DECORATION_BLACK_NORMAL_1: '/images/decoration/black/normal-1.jpg',
      DECORATION_BLACK_NORMAL_2: '/images/decoration/black/normal-2.jpg',
      DECORATION_BLACK_PARTY_1: '/images/decoration/black/normal-1.jpg',
      DECORATION_BLACK_PARTY_2: '/images/decoration/black/normal-2.jpg',
      DECORATION_MIX_WHITE_NORMAL_1:
        '/images/decoration/mix-white/normal-1.jpg',
      DECORATION_MIX_WHITE_NORMAL_2:
        '/images/decoration/mix-white/normal-2.jpg',
      DECORATION_MIX_WHITE_PARTY_1: '/images/decoration/mix-white/party-1.jpg',
      DECORATION_MIX_WHITE_PARTY_2: '/images/decoration/mix-white/party-2.jpg',
      DECORATION_PINK_NORMAL_1: '/images/decoration/pink/normal-1.jpg',
      DECORATION_PINK_NORMAL_2: '/images/decoration/pink/normal-2.jpg',
      DECORATION_PINK_PARTY_1: '/images/decoration/pink/party-1.jpg',
      DECORATION_PINK_PARTY_2: '/images/decoration/pink/party-2.jpg',
      DECORATION_RED_BLACK_NORMAL_1:
        '/images/decoration/red-black/normal-1.jpg',
      DECORATION_RED_BLACK_NORMAL_2:
        '/images/decoration/red-black/normal-2.jpg',
      DECORATION_RED_BLACK_PARTY_1: '/images/decoration/red-black/party-1.jpg',
      DECORATION_RED_BLACK_PARTY_2: '/images/decoration/red-black/party-2.jpg',
      DECORATION_RED_WHITE_NORMAL_1:
        '/images/decoration/red-white/normal-1.jpg',
      DECORATION_RED_WHITE_NORMAL_2:
        '/images/decoration/red-white/normal-2.jpg',
      DECORATION_RED_WHITE_PARTY_1: '/images/decoration/red-white/party-1.jpg',
      DECORATION_RED_WHITE_PARTY_2: '/images/decoration/red-white/party-2.jpg',
      DECORATION_WHITE_PINK_NORMAL_1:
        '/images/decoration/white-pink/normal-1.jpg',
      DECORATION_WHITE_PINK_NORMAL_2:
        '/images/decoration/white-pink/normal-2.jpg',
      DECORATION_WHITE_PINK_PARTY_1:
        '/images/decoration/white-pink/party-1.jpg',
      DECORATION_WHITE_PINK_PARTY_2:
        '/images/decoration/white-pink/party-2.jpg',
    }),
    [],
  );
};
