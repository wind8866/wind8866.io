import React from 'react';

import { Comments, BlogPostClass } from './HOChelper';

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