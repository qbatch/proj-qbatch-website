const fsNumber = "72px";
const fsxl = "64px";
const fsh1 = "56px";
const fsh2 = "40px";
const fsh3 = "32px";
const fslg = "24px";
const fssm = "20px";
const fcs = "18px"
const fsxs = "16px";
const fsx = "14px";
const fsXxs = "12px";

const theme = {
  name: 'theme',
  colors: {
    primaryColor: '#0054A6', // primary color for all components
    secondaryColor: '#002548',
    backgroundColor: '#F9FAFB',
    bodyText: '#667176',
    bodyTextVariant: '#2D2F31',
    labelColor: '#979797',
    borderColor: '#2E3846',
    dangerColor: '#ED1C24',
    gardientColor: '#2D2F31',
    onGradient: '#F6F7FA',
    dividerColor: '#D2D9DC',
    textMedium: '#5F737C',
    whiteColor: '#FFF',
    bodyLight: '#7C8EA1',
    disableColor: '#889095',
    highlightColor: '#FD3',
    textColor: '#FFDD33',
    footerBgColor: '#001B35'
  },
  fonts: {
    baseFontSizeH1: fsh1,
    baseFontSizeH2: fsh2,
    baseFontSizeH3: fsh3,
    baseFontSizeLg: fslg,
    baseFontSizeSm: fssm,
    baseFontSize: fsxs,
    BaseCustomFontSize:fcs,
    baseFontSizeMediumSmal: fsx,
    baseFontSizeXs: fsXxs,
    baseFontXl: fsxl,
    baseFontNumber: fsNumber
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
}

export default theme;
