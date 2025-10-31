import localFont from 'next/font/local';

const axiforma = localFont({
  src: [
    {
      path: '../../public/fonts/axiforma/Axiforma-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-ThinItalic.woff',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-SemiBoldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-ExtraBoldItalic.woff',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-Heavy.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/axiforma/Axiforma-HeavyItalic.woff',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-axiforma',
  display: 'swap',
});

export default axiforma;
