import { Button } from 'antd-mobile';
import { history, Link } from 'umi';

export default function TestPage(props: any) {
  // match，当前路由和 url match 后的对象，包含 params、path、url 和 isExact 属性
  // location，表示应用当前处于哪个位置，包含 pathname、search、query 等属性
  // history，同 api#history 接口
  // route，当前路由配置，包含 path、exact、component、routes 等
  // routes，全部路由信息
  console.log('🚀 ~ file: login.tsx ~ line 5 ~ TestPage ~ props', props);
  function loginClick() {
    // 跳转指定路由
    history.push('/user');

    // 带参数跳转指定路由
    // history.push('/user?a=b')

    // history.push({
    //   pathname: '/user',
    //   query: {
    //     a: 'b'
    //   }
    // })
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Page login</h1>
      <Button onClick={loginClick} color="primary">
        登陆
      </Button>
      <br />
      <Link to={'/user'}>to login</Link>
    </div>
  );
}
