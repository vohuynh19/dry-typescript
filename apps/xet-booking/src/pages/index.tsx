import { useCallback, useMemo } from 'react';
import { RegisterOptions, useForm } from 'react-hook-form';
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
import { Routes } from '../routes';

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
  const { registerInput, onStartReservation, formErrors } = usePageController();

  console.log('formErrors', formErrors);

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
            src={BACKGROUND_URL}
          />

          <Body>
            <Image
              className="logo"
              alt="logo"
              width={100}
              height={100}
              src={LOGO_URL}
              priority={true}
            />

            <InputWrapper>
              <MobileInput
                {...registerInput.name()}
                placeholder={t('placeholder.name')}
              />
              {formErrors.name?.message && (
                <Text type="danger">{formErrors.name.message}</Text>
              )}
              <MobileDivider />
              <MobileInput
                {...registerInput.phone()}
                placeholder={t('placeholder.phone')}
              />
              {formErrors.phone?.message && (
                <Text type="danger">{formErrors.phone.message}</Text>
              )}
              <Spacer />
              <Button size="large" onClick={onStartReservation}>
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

const usePageController = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onStartReservation = () => {
    handleSubmit(() => {
      router.push(Routes.chooseTime());
    })();
  };

  const registerField = useCallback(
    (
      fieldName: keyof FormData,
      options?: RegisterOptions<FormData, keyof FormData>,
    ) => {
      const { required, onChange, ...fieldProps } = register(fieldName, {
        ...options,
      });
      return {
        ...fieldProps,
        max: Number(fieldProps.max) || undefined,
        min: Number(fieldProps.min) || undefined,
        onChange: (val: string) => {
          onChange({
            type: 'change',
            target: {
              ...fieldProps.ref,
              value: val,
            },
          });
        },
      };
    },
    [register],
  );

  const registerInput = useMemo(
    () => ({
      name: () =>
        registerField('name', {
          required: {
            value: true,
            message: t('form.errors.required', {
              field: t('form.field.name'),
            }),
          },
        }),
      phone: () =>
        registerField('phone', {
          required: {
            value: true,
            message: t('form.errors.required', {
              field: t('form.field.phone'),
            }),
          },
        }),
    }),
    [t, registerField],
  );

  return { formErrors: errors, registerInput, onStartReservation };
};

/**
 * Constant Region
 */

const BACKGROUND_URL = '/images/background.png';
const LOGO_URL = '/images/logo.png';

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
