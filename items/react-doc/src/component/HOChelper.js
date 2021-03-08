/**
 * 订阅器
 */
class Subscribes {
  subscribes = []
  getCallBackIndex(fun) {
    let index = -1;
    for(let i = 0;i < this.subscribes.length;i++) {
      if (this.subscribes[i] === fun) {
        index = i;
        break;
      }
    }
    return index;
  }
  addChangeListener(callback) {
    if (!this.subscribes.includes(fun => fun === callback)) {
      this.subscribes.push(callback)
    }
  }
  removeChangeListener(callback) {
    const index = this.getCallBackIndex(callback);
    if(index > -1) {
      this.subscribes.splice(index, 1)
    }
  }
}

class Comments extends Subscribes {
  constructor(comments) {
    super();
    this.comments = comments;
  }
  getComments() {
    return this.comments;
  }
  changeComments(item) {
    this.comments.push(item);
    this.subscribes.forEach(fun => fun());
  }
}

class BlogPostClass extends Subscribes {
  constructor(posts) {
    super();
    this.posts = posts;
  }
  getBlogPost(id) {
    return this.posts[id];
  }
  changePosts(item) {
    this.posts.unshift(item)
    this.subscribes.forEach(fun => fun());
  }
}

export {
  Comments,
  BlogPostClass,
}