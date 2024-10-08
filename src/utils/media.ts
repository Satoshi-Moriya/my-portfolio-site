import { css } from 'styled-components'


const device = {
  xs: '500px',
  sm: '768px',
  // md: '900px',
  // lg: '1280px',
  // xl: '1440px',
  // xxl: '1920px',
}

export const media = {
  xs: (styles: TemplateStringsArray, ...interpolations: any[]) => `
    @media (min-width: ${device.xs}) {
      ${styles.join('')}
      ${interpolations.join('')}
    }
  `,
    sm: (styles: TemplateStringsArray, ...interpolations: any[]) => `
    @media (min-width: ${device.sm}) {
      ${styles.join('')}
      ${interpolations.join('')}
    }
  `,
  // md: (...args) => css`
  //   @media (max-width: ${device.md}) {
  //     ${css(...args)};
  //   }
  // `,
  // lg: (...args) => css`
  //   @media (max-width: ${device.lg}) {
  //     ${css(...args)};
  //   }
  // `,
  // xl: (...args) => css`
  //   @media (max-width: ${device.xl}) {
  //     ${css(...args)};
  //   }
  // `,
  // xxl: (...args) => css`
  //   @media (max-width: ${device.xxl}) {
  //     ${css(...args)};
  //   }
  // `,
}