import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mountRemoteComponent } from '@/utils/loadComponent';

const CategoryMemu = () => {
  const navigate = useNavigate();
  const onMenuClick = () => {
    $('.hero__categories ul').slideToggle(400);
  };

  return (
    <div className="hero__categories">
      <div className="hero__categories__all" onClick={onMenuClick}>
        <i className="fa fa-bars" />
        <span>All Departments</span>
      </div>
      {mountRemoteComponent({ module: 'product', component: 'CategoryList', props: { navigate } })}

    </div>
  );
};

export default CategoryMemu;
