import React from 'react';

import { Comments, BlogPostClass } from './HOChelper';
import { CommentList,  BlogPost} from './HOC-before';


function withSubscription(WrappedComponent, selectData, DataSource) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }
    componentDidMount() {
      // 订阅更改
      DataSource.addChangeListener(this.handleChange);
    }
  
    componentWillUnmount() {
      // 清除订阅
      DataSource.removeChangeListener(this.handleChange);
    }
  
    handleChange() {
      // 当数据源更新时，更新组件状态
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }
    render() {
      return (
        <WrappedComponent data={this.state.data} {...this.props} />
      );
    }
  }
}



const Comment = (props) => {
  return (<div>{props.comment.value}</div>)
}
class CommentList2 extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
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
const CommentListWithSubscription = withSubscription(
  CommentList2,
  (DataSourceComments) => DataSourceComments.getComments(),
  DataSourceComments
);


const DataSourceBlogPost = new BlogPostClass(['cat', 'dog', 'brid']);
setTimeout(() => {
  DataSourceBlogPost.changePosts('pig')
}, 1300);

const TextBlock = (props) => (<b>{props.text}</b>)

class BlogPost2 extends React.Component {
  
  render() {
    return <TextBlock text={this.props.data} />;
  }
}
const BlogPostWithSubscription = withSubscription(
  BlogPost2,
  (DataSourceBlogPost, props) => {
    return DataSourceBlogPost.getBlogPost(props.id)
  },
  DataSourceBlogPost
);

const With = () => {
  return (<>
    <CommentList />
    <BlogPost id="1" />
    <hr/>
    <CommentListWithSubscription/>
    <BlogPostWithSubscription id="1"/>
  </>)
}

export default With;