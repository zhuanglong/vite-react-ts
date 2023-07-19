import { Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import { AppOutline, MessageOutline, UserOutline } from 'antd-mobile-icons';

import './MainLayout.style.scss';

export default function MainLayout() {
  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/message',
      title: '消息',
      icon: <MessageOutline />,
    },
    {
      key: '/mine',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const setRouteActive = (path: string) => {
    navigate(path);
  };

  return (
    <div className="MainLayout-root">
      {location.pathname === '/' && <Navigate replace to="/home" />}
      <Outlet />
      <div className="tabbar">
        <TabBar safeArea activeKey={location.pathname} onChange={setRouteActive}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
}
