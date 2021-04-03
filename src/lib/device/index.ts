import { useTheme } from '@material-ui/core/styles';

/**
 * device type of access users
 */
export enum DeviceType {
  desktop,
  tablet,
  mobile,
}

/**
 * 現在開いているデバイスのサイズを判定する
 * サイズの判定はMaterial-UI useThemeに依存
 */
export const deviceSize = (): DeviceType => {
  const theme = useTheme();
  if (window.innerWidth >= theme.breakpoints.values.lg) {
    return DeviceType.desktop;
  } else if (theme.breakpoints.values.md <= window.innerWidth && window.innerWidth < theme.breakpoints.values.lg) {
    return DeviceType.tablet;
  } else {
    return DeviceType.mobile;
  }
};

/**
 * DeviceTypeより指定した写真解像度のwidthを返す
 * desktop ... w1200
 * tablet  ... w1080
 * mobile  ... w600
 */
export const getImageWidth = (device: DeviceType, url: string): string => {
  switch (device) {
    case DeviceType.desktop:
      return `${url}=w${1200}`;
    case DeviceType.tablet:
      return `${url}=w${1080}`;
    case DeviceType.mobile:
      return `${url}=w${600}`;
    default:
      return `${url}`;
  }
};

/**
 * 画面を開いた際のデバイス種別を指定
 * useEffect内でのみ実行可能
 *
 */
export const deviceTypeByUa = (): DeviceType => {
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || (ua.indexOf('android') > 0 && ua.indexOf('mobile') > 0)) {
    return DeviceType.mobile;
  } else if (ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0) {
    return DeviceType.tablet;
  } else if (ua.indexOf('ipad') > -1 || (ua.indexOf('macintosh') > -1 && 'ontouchend' in document)) {
    return DeviceType.tablet;
  } else {
    return DeviceType.desktop;
  }
};
