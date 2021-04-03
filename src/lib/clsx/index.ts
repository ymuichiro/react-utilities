/*
 Reactにおいてクラス名を処理する関数群
*/

/** 渡された複数のクラス名を結合する */
export const join = (...names: (string | undefined)[]): string => {
  return names.filter(e => e !== '' && e !== undefined).join(' ');
};

/** 第一引数条件に応じてクラス名を切り替える */
export const boolSwitch = (flag: boolean, trueClsx: string, falseClsx: string): string => {
  return flag ? trueClsx : falseClsx;
};

