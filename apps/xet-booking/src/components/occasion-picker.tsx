import { ReactNode, useMemo } from 'react';
import { GoPeople } from 'react-icons/go';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { LiaRingSolid } from 'react-icons/lia';
import { LuPartyPopper } from 'react-icons/lu';
import { TbHearts } from 'react-icons/tb';
import { useTranslation } from 'next-i18next';
import styled, { css } from 'styled-components';

import { OccasionType } from '../constants/OccasionType';
import InputLabel from './input-label';

/**
 * Component Region
 */
type OccasionPickerProps = {
  occasionType?: OccasionType;
  onChange: (type: OccasionType) => void;
};

const OccasionPicker = ({ occasionType, onChange }: OccasionPickerProps) => {
  const { t } = useTranslation('common');
  const occasions = useOccasions();

  return (
    <OccasionPickerContainer>
      <InputLabel
        icon={<LuPartyPopper />}
        label={t('label.specialOccasions')}
      />
      <List>
        {occasions.map((occasion, index) => (
          <CardPosision
            key={occasion.type}
            position={index % 2 === 0 ? 'left' : 'right'}
            rotate={index % 2 === 0 ? 'left' : 'right'}
          >
            <OccasionCard
              index={index}
              occasion={occasion}
              active={occasion.type === occasionType}
              onClick={() => onChange(occasion.type)}
            />
          </CardPosision>
        ))}
      </List>
    </OccasionPickerContainer>
  );
};
export default OccasionPicker;

const OccasionCard = ({
  occasion,
  index,
  active,
  onClick,
}: {
  occasion: OccasionListItem;
  index: number;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <OccasionCardContainer
      $index={index}
      $active={active}
      onClick={() => {
        console.log('onclick');
        onClick();
      }}
    >
      <CardIcon>{occasion.icon}</CardIcon>
      <CardLabel>{occasion.label}</CardLabel>
    </OccasionCardContainer>
  );
};

/**
 * Helper Region
 */

const useOccasions = () => {
  const { t } = useTranslation('common');
  return useMemo<OccasionListItem[]>(
    () => [
      {
        type: 'BIRTHDAY',
        icon: <LiaBirthdayCakeSolid />,
        label: t('birthday'),
      },
      {
        type: 'ANNIVERSARY',
        icon: <LiaRingSolid />,
        label: t('anniversary'),
      },
      {
        type: 'CASUAL_DINING',
        icon: <TbHearts />,
        label: t('casualDining'),
      },
      {
        type: 'SOCIAL_GATHERING',
        icon: <GoPeople />,
        label: t('socialGathering'),
      },
      {
        type: 'PARTY',
        icon: <LuPartyPopper />,
        label: t('party'),
      },
    ],
    [t],
  );
};

/**
 * Constant Region
 */

type OccasionListItem = {
  type: OccasionType;
  icon: ReactNode;
  label: string;
};

/**
 * Styled region
 */

const OccasionPickerContainer = styled.div``;
const List = styled.div`
  flex: 1;
  padding-top: 64px;
`;
const CardPosision = styled.div<{
  position: 'left' | 'right';
  rotate: 'left' | 'right';
}>`
  display: flex;
  width: 100%;
  justify-content: ${({ position }) => position};
  height: 36vw;
  transform: ${({ rotate }) =>
    rotate === 'left' ? 'rotateZ(15deg)' : 'rotateZ(-15deg)'};
`;

const OccasionCardContainer = styled.div<{ $index: number; $active: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  z-index: ${({ $index }) => $index + 1000};
  background-color: ${({ theme }) => theme.colors.secondaryButtonBg};
  width: 44vw;
  height: 53vw;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary + 'aa'};
      font-weight: 700;

      ${CardIcon} {
        background-color: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.divider};
      }
    `}
`;

const CardIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary + '44'};
  font-size: 24px;
`;

const CardLabel = styled.div`
  text-align: right;
  padding: 0 12px;
`;
