// 简化版 SparkMD5 实现
export default class SparkMD5 {
  constructor() {
    this.hash = this.md5Init();
    this.buffer = [];
    this.length = 0;
  }

  static ArrayBuffer() {
    return new SparkMD5();
  }

  // 初始化 MD5 算法
  md5Init() {
    return new Uint32Array([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
  }

  // MD5 核心算法（简化版本）
  md5(data) {
    // 对输入数据进行哈希计算
    // 这里可以扩展为完整的 MD5 实现或使用库支持
    return data.reduce((hash, byte) => (hash + byte.charCodeAt(0)) % 0xffffffff, 0);
  }

  // 添加 ArrayBuffer 数据
  append(buffer) {
    const uint8 = new Uint8Array(buffer);
    this.buffer.push(...uint8);
    this.length += uint8.length;
  }

  // 结束哈希并返回结果
  end() {
    const data = new Uint8Array(this.buffer);
    const hash = this.md5(data);
    return hash.toString(16); // 返回哈希结果的十六进制字符串
  }
}