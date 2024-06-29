import {
  Abhaya_Libre,
  Abril_Fatface,
  Alegreya,
  Gentium_Plus,
  Noto_Sans,
  Noto_Serif_JP,
} from '@next/font/google';

const abhayaLibre = Abhaya_Libre({
  weight: ['700'],
  display: 'swap',
  variable: '--font-abhaya-libre',
});
const notoSerifJp = Noto_Serif_JP({
  weight: ['400', '500', '900'],
  display: 'swap',
  variable: '--font-jp',
});
const gentiumBasic = Gentium_Plus({
  weight: ['400'],
  display: 'swap',
  style: ['italic'],
  variable: '--font-gentium-basic',
});
const notoSans = Noto_Sans({
  weight: ['100', '200'],
  display: 'swap',
  variable: '--font-noto-sans',
});
const alegreya = Alegreya({
  weight: ['400'],
  display: 'swap',
  variable: '--font-alegreya',
});
const abril = Abril_Fatface({
  weight: ['400'],
  display: 'swap',
  variable: '--font-abril',
});

export const fonts = [
  abhayaLibre.variable,
  notoSerifJp.variable,
  gentiumBasic.variable,
  notoSans.variable,
  alegreya.variable,
  abril.variable,
];
