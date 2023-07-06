import './H5Rem.style.scss';

export default function H5Rem() {
  return (
    <div className="H5Rem-root">
      <div className="p1">px字体大小</div>
      <div className="p2">px2rem字体大小</div>
      <div style={{ fontSize: $px2rem(16) }}>$px2rem字体大小</div>
    </div>
  );
}
