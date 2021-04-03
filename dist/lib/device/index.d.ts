/**
 * device type of access users
 */
export declare enum DeviceType {
    desktop = 0,
    tablet = 1,
    mobile = 2
}
/**
 * 現在開いているデバイスのサイズを判定する
 * サイズの判定はMaterial-UI useThemeに依存
 */
export declare const deviceSize: () => DeviceType;
/**
 * DeviceTypeより指定した写真解像度のwidthを返す
 * desktop ... w1200
 * tablet  ... w1080
 * mobile  ... w600
 */
export declare const getImageWidth: (device: DeviceType, url: string) => string;
/**
 * 画面を開いた際のデバイス種別を指定
 * useEffect内でのみ実行可能
 *
 */
export declare const deviceTypeByUa: () => DeviceType;
