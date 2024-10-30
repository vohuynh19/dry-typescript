import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

import { DecorationType } from '../constants/DecorationType';
import { useImagePath } from './useImagePath';

export type DecorationOption = {
  url: string;
  name: string;
};

type DecrationListOption = {
  name: string;
  type: DecorationType;
  items: DecorationOption[];
};

export const useDecorationOptions = () => {
  const { t } = useTranslation('common');
  const images = useImagePath();

  return useMemo<DecrationListOption[]>(() => {
    const blackOptions: DecorationOption[] = [
      {
        url: images.DECORATION_BLACK_NORMAL_1,
        name: 'Bàn tiệc thường 1',
      },
      {
        url: images.DECORATION_BLACK_NORMAL_1,
        name: 'Bàn tiệc thường 2',
      },
      {
        url: images.DECORATION_BLACK_PARTY_1,
        name: 'Bàn tiệc sinh nhật 1',
      },
      {
        url: images.DECORATION_BLACK_PARTY_2,
        name: 'Bàn tiệc sinh nhật 2',
      },
    ];

    const mixWhiteOptions: DecorationOption[] = [
      {
        url: images.DECORATION_MIX_WHITE_NORMAL_1,
        name: 'Bàn tiệc thường 1',
      },
      {
        url: images.DECORATION_MIX_WHITE_NORMAL_2,
        name: 'Bàn tiệc thường 2',
      },
      {
        url: images.DECORATION_MIX_WHITE_PARTY_1,
        name: 'Bàn tiệc sinh nhật 1',
      },
      {
        url: images.DECORATION_MIX_WHITE_PARTY_2,
        name: 'Bàn tiệc sinh nhật 2',
      },
    ];

    const pinkOptions: DecorationOption[] = [
      {
        url: images.DECORATION_PINK_NORMAL_1,
        name: 'Bàn tiệc thường 1',
      },
      {
        url: images.DECORATION_PINK_NORMAL_2,
        name: 'Bàn tiệc thường 2',
      },
      {
        url: images.DECORATION_PINK_PARTY_1,
        name: 'Bàn tiệc sinh nhật 1',
      },
      {
        url: images.DECORATION_PINK_PARTY_2,
        name: 'Bàn tiệc sinh nhật 2',
      },
    ];

    const redBlackOptions: DecorationOption[] = [
      {
        url: images.DECORATION_RED_BLACK_NORMAL_1,
        name: 'Bàn tiệc thường 1',
      },
      {
        url: images.DECORATION_RED_BLACK_NORMAL_2,
        name: 'Bàn tiệc thường 2',
      },
      {
        url: images.DECORATION_RED_BLACK_PARTY_1,
        name: 'Bàn tiệc sinh nhật 1',
      },
      {
        url: images.DECORATION_RED_BLACK_PARTY_2,
        name: 'Bàn tiệc sinh nhật 2',
      },
    ];

    const redWhiteOptions: DecorationOption[] = [
      {
        url: images.DECORATION_RED_WHITE_NORMAL_1,
        name: 'Bàn tiệc thường 1',
      },
      {
        url: images.DECORATION_RED_WHITE_NORMAL_2,
        name: 'Bàn tiệc thường 2',
      },
      {
        url: images.DECORATION_RED_WHITE_PARTY_1,
        name: 'Bàn tiệc sinh nhật 1',
      },
      {
        url: images.DECORATION_RED_WHITE_PARTY_2,
        name: 'Bàn tiệc sinh nhật 2',
      },
    ];

    const whitePinkOptions: DecorationOption[] = [
      {
        url: images.DECORATION_WHITE_PINK_NORMAL_1,
        name: 'Bàn tiệc thường 1',
      },
      {
        url: images.DECORATION_WHITE_PINK_NORMAL_2,
        name: 'Bàn tiệc thường 2',
      },
      {
        url: images.DECORATION_WHITE_PINK_PARTY_1,
        name: 'Bàn tiệc sinh nhật 1',
      },
      {
        url: images.DECORATION_WHITE_PINK_PARTY_2,
        name: 'Bàn tiệc sinh nhật 2',
      },
    ];

    return [
      {
        name: 'Black Tone',
        type: 'BLACK',
        items: blackOptions,
      },
      {
        name: 'Mix White Tone',
        type: 'MIX_WHITE',
        items: mixWhiteOptions,
      },
      {
        name: 'Pink Tone',
        type: 'PINK',
        items: pinkOptions,
      },

      {
        name: 'Red Black Tone',
        type: 'RED_BLACK',
        items: redBlackOptions,
      },
      {
        name: 'Red white Tone',
        type: 'RED_WHITE',
        items: redWhiteOptions,
      },
      {
        name: 'White Pink Tone',
        type: 'WHITE_PINK',
        items: whitePinkOptions,
      },
    ];
  }, [images]);
};
