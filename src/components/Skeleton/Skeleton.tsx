import { CSSProperties } from 'react';
import { Skeleton as AntdSkeleton } from 'antd-mobile';
import clsx from 'clsx';

import './Skeleton.scss';

interface PropsType {
  className?: string;
  style?: CSSProperties;
  titleAnimated?: boolean;
  paragraphAnimated?: boolean;
  lineCount?: number;
}

export default function Skeleton(props: PropsType) {
  const { style, className, titleAnimated, paragraphAnimated, lineCount } = props;
  return (
    <div className={clsx('Skeleton-root', className)} style={style}>
      <AntdSkeleton.Title animated={titleAnimated || false} />
      <AntdSkeleton.Paragraph animated={paragraphAnimated || false} lineCount={lineCount} />
    </div>
  );
}
