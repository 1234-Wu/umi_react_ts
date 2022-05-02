// wrappers 路由级别的权限校验
import { Redirect } from 'umi';

export default (props: any) => {
  let useAuth = () => {
    return {
      isLogin: true,
    };
  };
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
