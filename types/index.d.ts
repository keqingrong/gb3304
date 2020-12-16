declare interface DataItem {
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

export {
  DataItem,
};
