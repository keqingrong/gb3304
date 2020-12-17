export declare interface DataItem {
  /** 名族名称 */
  name: string;
  /** 罗马字母拼写法 */
  romanization: string;
  /** 对外使用的罗马字母拼写法 */
  romanizationInternational?: string;
  /** 字母代码 */
  code: string;
  /** 数字代码 */
  digitalCode: string;
}

/**
 * 中国各民族名称的罗马字母拼写法和代码
 * Names of nationalities of China in romanization with codes
 */
export declare const data: DataItem[];

/**
 * 中国各民族名称
 * Names of nationalities of China
 */
export declare const names: string[];
