import React from 'react';
import lottie from 'lottie-web';

import bangbangtangIcon from '@/assets/icons/bangbangtang.svg';
import Polite_Chicky from '@/assets/lotties/Polite_Chicky.json';
import Aniki_Hamster from '@/assets/lotties/Aniki_Hamster.json';

import './AssetsDemo.scss';

export default function AssetsDemo() {
  function getImg(name: string) {
    // 动态获取不能用路径别名
    return new URL(`../../assets/icons/${name}.svg`, import.meta.url).href;
  }

  React.useEffect(() => {
    const lottie1 = lottie.loadAnimation({
      container: document.getElementById('lottie1')!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: Polite_Chicky,
    });
    const lottie2 = lottie.loadAnimation({
      container: document.getElementById('lottie2')!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: Aniki_Hamster,
    });

    return () => {
      lottie1.destroy();
      lottie2.destroy();
    };
  }, []);

  return (
    <div className="AssetsDemo-page">
      <div className="fonts-wrapper">
        <h3 className="title">Fonts</h3>
        <div>Hello React! 你好 React！123</div>
        <div>Hello React! 你好 React！123</div>
        <div>Hello React! 你好 React！123</div>
      </div>
      <div className="icon-font-wrapper">
        <h3 className="title">Icon Font</h3>
        <i className="iconfont icon-zhongyingwen" />
        <i className="iconfont icon-suoxiao" />
        <i className="iconfont icon-fangda" />
        <i className="iconfont icon-contentright" />
        <i className="iconfont icon-zhuti" />
      </div>
      <div className="icons-wrapper">
        <h3 className="title">Icons</h3>
        <img src={bangbangtangIcon} alt="icon" />
        <img src={getImg('baomihua')} alt="icon" />
        <img src={getImg('sanmingzhi')} alt="icon" />
        <span className="bg-img" />
      </div>
      <div className="lotties-wrapper">
        <h3 className="title">Lotties</h3>
        <div id="lottie1" />
        <div id="lottie2" />
      </div>
    </div>
  );
}
