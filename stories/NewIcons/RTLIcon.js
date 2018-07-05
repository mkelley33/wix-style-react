import React from 'react';
import {Duplicate} from 'wix-style-react/new-icons';
import s from './style.scss';

export default () => {
  return (
    <div className="rtl">
      <div className={s.iconList}>
        <div className={s.singleIconView}>
          <span><Duplicate size="3em"/></span>
          <span className={s.iconName}>Duplicate (size x 3, rtl)</span>
        </div>
      </div>
    </div>
  );
};
