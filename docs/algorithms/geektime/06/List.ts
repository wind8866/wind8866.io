interface List<T> {
  // 查找值
  findByValue(value: T): any
  // 按索引取值
  findByIndex(index: number): any
  // 向第 index 元素后插入数据
  insertToIndex(value: T, index: number): void
  // 删除某个值
  remove(value: T): boolean
  // 插入到头部
  insertToHead(value: T): void
  // 插入到尾部
  insertToTail(value: T): void
  // 将链表的值转化为数组
  toString(): string
}

export default List