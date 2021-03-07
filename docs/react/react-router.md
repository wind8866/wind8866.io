BrowserRouter

- BrowserRouter：路由器声明、包裹根节点
- HashRouter：路由器声明、包裹根节点，hash路由
- Switch：包裹Switch，路由切换
- Route：指向路由，包裹页面
  - path：路径
  - exact：完整匹配
- Link：路由跳转
  - to
- useRouteMatch()：取得当前页面路由
- useParams()：能取到topicId？


问题
- [ ] Link、NavLink、Redirect区别
- [ ] 写出一个示例最好包含所有的API
- [ ] 继续整理完成API

## API
- Hooks
  - useHistory：访问历史记录
  - useLocation：每当 URL 发生更改时，它就返回一个新位置
  - useParams：返回一个包含 URL 参数的键/值对的对象
  - useRouteMatch：匹配当前页面的URL
- `<BrowserRouter>`
  - basename：基本URL
  - getUserConfirmation：是否确认跳转到xxx
  - forceRefresh：页面跳转向服务器发送请求
  - keyLength：Location.key 的长度，感觉是框架自己使用
  - children：要呈现的子元素
- 
