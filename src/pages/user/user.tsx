import { NavBar, TabBar } from 'antd-mobile';
import { history } from 'umi';
import {
  LeftOutline,
  UserOutline,
  AppOutline,
  UnorderedListOutline,
  MessageFill,
  MessageOutline,
} from 'antd-mobile-icons';

import styles from './user.less';
// history
export default () => {
  const num = 1;
  const back = () => {
    history.goBack();
  };
  const left = <LeftOutline />;
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: 'todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'message',
      title: '我的消息',
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: 'personalCenter',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ];

  return (
    <div className={styles.app}>
      <div className={styles.top}>
        <NavBar backArrow={left} onBack={back}>
          消息（{num}）
        </NavBar>
      </div>
      <div className={styles.body}>首页</div>
      <div className={styles.bottom}>
        <TabBar>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
};
