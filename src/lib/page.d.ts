import { FC, ReactNode, ReactElement } from 'react';

interface Page extends FC {
  getLayout?: (page: ReactElement) => ReactNode;
}
