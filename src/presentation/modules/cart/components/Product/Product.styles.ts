import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 2rem;
    grid-template-columns: 0.8fr 1fr 1fr 1fr 0.5fr;
    grid-template-areas: 'one two three four five';

    & div:nth-child(1) {
      grid-area: one;
    }
    & div:nth-child(2) {
      grid-area: two;
    }
    & div:nth-child(3) {
      grid-area: three;
    }
    & div:nth-child(4) {
      grid-area: four;
    }
    & > button {
      grid-area: five;
    }

    & + & {
      margin-top: 3.2rem;
    }

    @media (max-width: ${theme.media.md}) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        'one two five'
        'one three four';
    }
  `}
`
export const Group = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.9rem;
      color: ${theme.colors.gray300};
    }

    @media (max-width: ${theme.media.md}) {
      &:nth-child(1) span,
      &:nth-child(3) span {
        display: none;
      }
    }
  `}
`

export const Banner = styled(Image)`
  ${({ theme }) => css`
    margin-top: 2.1rem;
    width: min(8.9rem, 100%);
    height: min(11.4rem, 100%);

    min-width: 7rem;
    min-height: 10rem;

    @media (max-width: ${theme.media.md}) {
      margin-top: 0;
    }
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    margin-top: 8rem;
    strong {
      display: block;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.9rem;
      color: ${theme.colors.gray900};
    }

    @media (max-width: ${theme.media.md}) {
      margin-top: 0;

      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `}
`
export const QuatityControl = styled.div`
  ${({ theme }) => css`
    margin-top: 6.5rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      width: 2.1rem;
      height: 2.1rem;
      border-radius: 50%;
      color: ${theme.colors.blue500};
      border: 2px solid ${theme.colors.blue500};
      font-size: 1.8rem;
      background-color: transparent;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    input {
      border-radius: ${theme.radii.sm};
      border: 1px solid ${theme.colors.gray50};
      padding: 0.35rem 1.6rem;
      width: 6.2rem;
    }

    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    @media (max-width: ${theme.media.md}) {
      margin-top: 0;
    }
  `}
`
export const TotalPrice = styled.strong`
  ${({ theme }) => css`
    margin-top: 6.5rem;
    color: ${theme.colors.gray900};
    font-size: 1.6rem;
    line-height: 2.2rem;

    @media (max-width: ${theme.media.md}) {
      margin-top: 0;
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    all: unset;

    margin-top: 8.3rem;
    display: flex;
    justify-content: flex-end;

    @media (max-width: ${theme.media.md}) {
      width: 100%;
      height: 100%;
      margin-top: 0;
      justify-content: flex-start;
      align-items: flex-start;
    }
  `}
`
