import React from "./react.mjs";

function initToken() {
  const nodeTemp = [];
  return function (node) {
    if (node == null) {
      return nodeTemp.pop();
    } else if (node.type === 'tagStart') {
      node.type = 'element';
      nodeTemp.push(node);
    } else if (node.type === 'text') {
      node.type = 'text';
      nodeTemp[nodeTemp.length - 1].children.push(node);
    } else if (node.type === 'tagEnd') {
      if (nodeTemp.length === 1) return;
      let current = nodeTemp.pop();
      nodeTemp[nodeTemp.length - 1].children.push(current);
    }
  }
}

// 解析为抽象语法树
class Parser {
  constructor() {
    this.currentStatus = 'start';
    this.currentText = '';
    this.attrKeyText = '';
    this.attrValueText = '';
    this.arrtibute = {};
    this.token = initToken();
  }
  init(html = '') {
    for (const char of html) {
      this.parse(char);
    }
    return this.token(null);
  }
  // 解析开始
  start(char) {
    if (/\s/.test(char)) {
      return 'whitespace';
    } else if ('<' === char) {
      return 'tagStart';
    }
    throw new Error('未知类型');
  }
  // 解析
  parse(char) {
    this.currentStatus = this[this.currentStatus](char);
  }
  // 文本空白
  whitespace(char) {
    if (/\s/.test(char)) {
      return 'whitespace';
    } else if (char === '<') {
      return 'tagStart';
    } else if (/\S/.test(char)) {
      this.currentText += char;
      return 'text';
    }
    throw new Error('未知类型');
  }
  // text
  text(char) {
    if ('<' === char) {
      let tagNode = {
        type: 'text',
        tagName: this.currentText.trim(),
      };
      this.currentText = '';
      this.token(tagNode);
      return 'tagStart';
    } else {
      this.currentText += char;
      return 'text';
    }
  }
  // 标签开始
  tagStart(char) {
    if (/[a-zA-Z]/.test(char)) {
      this.currentText += char;
      return 'tagStart';
    } else if (char === '/') {
      return 'closeTagStart';
    } else if (char === ' ') {
      return 'tagInnerWhiteSpace';
    } else if (char === '>') {
      return this.tagEnd(char);
    }
  }
  tagEnd(char) {
    let tagNode = {
      type: 'tagStart',
      tagName: this.currentText,
      attr: this.arrtibute,
      children: [],
    };
    this.currentText = '';
    this.arrtibute = {};
    this.token(tagNode);
    return 'whitespace';
  }
  // 关闭标签
  closeTagStart(char) {
    if (/[a-zA-Z]/.test(char)) {
      this.currentText += char;
      return 'closeTagStart';
    } else if (/\s/.test(char)){
      // 忽略
      return 'closeTagStart';
    } else if (char === '>') {
      let tagNode = {
        type: 'tagEnd',
        tagName: this.currentText,
      };
      this.currentText = '';
      this.token(tagNode);
      return 'whitespace';
    }
  }
  // 标签内空白
  tagInnerWhiteSpace(char) {
    if (/\s/.test(char)) {
      return 'tagInnerWhiteSpace';
    } else if (char === '>'){
      return this.tagEnd(char);
    } else if (/[a-zA-Z]/.test(char)) {
      return this.attrKey(char);
    }
  }
  // 标签名
  attrKey(char) {
    if (/[a-zA-Z]/.test(char)) {
      this.attrKeyText += char;
      return 'attrKey';
    } else if (char === '=') {
      // 这里忽略就行了
      return 'attrKey';
    } else if (char === '"') {
      return 'attrValue';
    }
  }
  // 标签值
  attrValue(char) {
    if (char === '"') {
      this.arrtibute[this.attrKeyText] = this.attrValueText;
      this.attrKeyText = '';
      this.attrValueText = '';
      return 'tagInnerWhiteSpace';
    } else {
      this.attrValueText += char;
      return 'attrValue';
    }
  }
}

function create(node) {
  if (node.type === 'text') {
    return node.tagName;
  }
  return React.create(
    node.tagName,
    node.attr,
    ...node.children.map(node => create(node)),
  )
}

function babel(html) {
  const parser = new Parser();
  const ast = parser.init(html);
  console.log(ast);

  return create(ast);
}
export default babel;
