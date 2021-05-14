/**
 * 对狗的属性和行为的抽象
 * @class
 */
class Dog {
  /**
   * @author liuzhen
   * @param {String} name 狗的名字
   */
  constructor(name) {
    this.name = name;
  }
  
  /**
   * 修改狗的名字
   * @param {string} name 狗的名字
   */
  setName(name) {
    this.name = name;
  }

  /**
   * 获得狗的名字
   * @returns {string} 狗的名字
   */
  getName() {
    return this.name;
  }

  shout () {
    console.log('woof');
  }

  /**
   * 睡觉觉
   * @async
   * @param {Number} time 睡多少毫秒
   * @returns {Promise}
   */
  sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  /**
   * 睡觉后做事情
   * 
   * @async
   * @author liuzhen <liuzhen1010xyz@gmail.com>
   * @version 1.2.3
   * @param {Number} sleepTime 睡多久 default 1000
   * @param {sleepCallback} fun 睡晚后做什么
   */
  async sleepNextTodo(sleepTime = 1000, fun) {
    await this.sleep(sleepTime);
    const mood = sleepTime > 100000 ? 'happly' : 'unhapply'
    fun(mood);
  }
}

/**
 * @callback sleepCallback
 * @param {String} mood 睡醒后的心情: 'happly' | 'unhapply'
 */

const dog1 = new Dog('wangcai');
dog1.getName()
dog1.setName('sss')
dog1.sleep(1000)

dog1.sleepNextTodo(10000, (mood) => {
  console.log('I very ' + mood);
})

dog1.sleepNextTodo()


// 常用
// @async
// @author
// @callback
// @class
// @default
// @function
// @version
// @yields