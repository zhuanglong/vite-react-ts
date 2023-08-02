import React from 'react';

function PageTitle({ children, title }: { children: React.ReactNode; title?: string }) {
  document.title = title || '';
  return children;
}

export default PageTitle;
