
JavaScript 中的二进制数据是以非标准方式实现的。
基本的二进制对象是 ArrayBuffer —— 对固定长度的连续内存空间的引用。
如要操作 ArrayBuffer，我们需要使用“视图”对象。
单位是字节(b)
DataView 是在 ArrayBuffer 上的一种特殊的超灵活“未类型化”视图。它允许以任何格式访问任何偏移量（offset）的数据。
我们可以通过 .buffer 来访问 Buffer。
BufferSource：任何类型的二进制数据
ArrayBufferView：视图总称






## API
```
# 基本
new ArrayBuffer(byte)

# 视图对象，以 n 位为单位读取
TypedArray
  无 concat、splice
  有 set(fromArr, [offset]) 用于复制、subarray([begin, end])以改对象为模板创建新视图

new TypedArray(buffer, [byteOffset], [length]);
new TypedArray(object);
new TypedArray(typedArray);
new TypedArray(length);
new TypedArray();

new Uint8Array() # 8位正整数
new Uint16Array() # 16位正整数
new Uint32Array() # 32位正整数
new Uint8ClampedArray() # 8位正整数，溢出保留两端
new Int8Array() # 8位整数
new Int16Array() # 16位整数
new Int32Array() # 32位整数
new Float32Array() # 32位浮点数
new Float64Array() # 64位浮点数

# DataView
new DataView(buffer, [byteOffset], [byteLength])
// 各种 get set 方法

# 解码编码字符串
let decoder = new TextDecoder([label], [options]);
let str = decoder.decode([input], [options]);

```
