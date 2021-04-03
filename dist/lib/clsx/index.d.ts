/** 渡された複数のクラス名を結合する */
export declare const join: (...names: (string | undefined)[]) => string;
/** 第一引数条件に応じてクラス名を切り替える */
export declare const boolSwitch: (flag: boolean, trueClsx: string, falseClsx: string) => string;
