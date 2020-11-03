export default  [
    {
      name: '首页',
      path:'/home',
      children: [
        {
          name:'页面一',
          path:'/home/page1'
        },
        {
          name:'页面一',
          path:'/home/page2'
        }
      ]
    },
    {
      name: 'CSS学习',
      path:'/home',
      children: [
        {
          name:'test1',
          path:'/home/page1'
        },
        {
          name:'test2',
          path:'/home/page2'
        }
      ]
    }
  ]