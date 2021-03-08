import React from 'react';

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

/**
 * 组件
 */
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

const DataSourceComments = new Comments([
  {
    id: '1',
    value: 'apple'
  },
  {
    id: '2',
    value: 'banana'
  }
]);

setTimeout(() => {
  DataSourceComments.changeComments({
    id: '3',
    value: 'orange'
  });
}, 2000);

const Comment = (props) => {
  return (<div>{props.comment.value}</div>)
}
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // 假设 "DataSourceComments" 是个全局范围内的数据源变量
      comments: DataSourceComments.getComments()
    };
  }

  componentDidMount() {
    // 订阅更改
    DataSourceComments.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // 清除订阅
    DataSourceComments.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // 当数据源更新时，更新组件状态
    this.setState({
      comments: DataSourceComments.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
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

const DataSourceBlogPost = new BlogPostClass(['cat', 'dog', 'brid']);
setTimeout(() => {
  DataSourceBlogPost.changePosts('pig')
}, 1300);



const TextBlock = (props) => (<div>{props.text}</div>)
class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSourceBlogPost.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSourceBlogPost.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSourceBlogPost.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSourceBlogPost.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}

const With = () => {
  return (<>
    <CommentList />
    <BlogPost id="1" />
  </>)
}

export default With;