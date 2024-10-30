import { useEffect } from 'react';
import { Controller, useForm, UseFormSetValue } from 'react-hook-form';
import {
  Button,
  MobileDivider,
  MobileInput,
  Spacer,
  Text,
} from '@dry-typescript/ui-react-design-system';
import { dehydrateQueryClient } from '@dry-typescript/util-helpers';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import { StepLayoutContainer } from '../components/step-layout';
import { useImagePath, usePreservationStoreHydration } from '../hooks';
import { useValidationRules } from '../hooks/useValidationRules';
import { Routes } from '../routes';
import { usePreservationStore } from '../stores';

/**
 * Next Server Side Region
 */

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...(await dehydrateQueryClient()),
    },
  };
}

/**
 * Component Region
 */

export default function Splash() {
  const { t } = useTranslation('common');
  const path = useImagePath();
  const validationRules = useValidationRules();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const { phoneNumber, name, onStartReservation } = usePageController({
    setFormValue: setValue,
  });

  return (
    <>
      <Head>
        <title>{t('metaTitle.splash')}</title>
      </Head>

      <StepLayoutContainer>
        <Container>
          <Image
            className="background"
            alt="background"
            width={200}
            height={200}
            src={path.BACKGROUND_URL}
          />

          <Body>
            <Image
              className="logo"
              alt="logo"
              width={300}
              height={300}
              src={path.LOGO_URL}
              priority={true}
            />

            <InputWrapper>
              <Controller
                defaultValue={name}
                control={control}
                name="name"
                rules={{
                  required: validationRules.required(t('form.field.name')),
                }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <MobileInput
                    ref={ref}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder={t('placeholder.name')}
                  />
                )}
              />
              {errors.name?.message && (
                <Text type="danger">{errors.name.message}</Text>
              )}
              <MobileDivider />
              <Controller
                defaultValue={phoneNumber}
                control={control}
                name="phone"
                rules={{
                  required: validationRules.required(t('form.field.phone')),
                }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <MobileInput
                    ref={ref}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder={t('placeholder.phone')}
                  />
                )}
              />
              {errors.phone?.message && (
                <Text type="danger">{errors.phone.message}</Text>
              )}
              <Spacer />
              <Button
                size="large"
                onClick={handleSubmit(onStartReservation)}
                disabled={Boolean(errors.name || errors.phone)}
              >
                {t('button.startReservation')}
              </Button>
            </InputWrapper>
          </Body>
        </Container>
      </StepLayoutContainer>
    </>
  );
}

/**
 * Helper Region
 */

type FormData = {
  name: string;
  phone: string;
};

const usePageController = ({
  setFormValue,
}: {
  setFormValue: UseFormSetValue<FormData>;
}) => {
  const router = useRouter();
  const {
    name,
    phoneNumber,
    actions: { setName, setPhoneNumber },
  } = usePreservationStore();
  const hydrated = usePreservationStoreHydration();

  const onStartReservation = (data: FormData) => {
    setName(data.name);
    setPhoneNumber(data.phone);
    router.push(Routes.chooseTime());
  };

  useEffect(() => {
    if (hydrated) {
      setFormValue('name', name);
      setFormValue('phone', phoneNumber);
    }
  }, [setFormValue, hydrated, name, phoneNumber]);

  return { hydrated, name, phoneNumber, onStartReservation };
};

/**
 * Constant Region
 */

/**
 * Styled Region
 */

const Container = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  display: flex;

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    opacity: 0.8;
    z-index: 1;
  }
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  width: 100%;
  padding: 0px 24px;

  .logo {
    width: 280px;
    height: 280px;
    object-fit: contain;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 24px;
    width: 100%;
  }

  .adm-input-element {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.text};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
      opacity: 0.5;
    }
    &::-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.secondary};
      opacity: 0.5;
    }
  }
`;
