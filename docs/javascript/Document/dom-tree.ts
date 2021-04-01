
/**
 * event 接口
 */
interface EventTarget {

}

/**
 * Node 接口
 */
interface Node extends EventTarget {

}

/**
 * Text 类
 */
class Text implements Node {

}

/**
 * 文档对象
 */
class ELement implements Node {

}

/**
 * HTML
 */
class HTMLElement extends Element {

}

/**
 * input
 */
class HTMLInputElement extends HTMLElement {

}

/**
 * body
 */
class HTMLBodyElement extends HTMLElement {

}

/**
 * a
 */
class HTMLAnchorElement extends HTMLElement {

}

export {
    Text
}