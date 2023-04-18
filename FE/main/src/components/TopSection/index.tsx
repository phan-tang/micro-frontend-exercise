import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { mountRemoteComponent } from '@/utils/loadComponent';
import CategoryMenu from './CategoryMenu';

const TopSection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const heroBannerProps = {
    title: 'FRESH FRUIT',
    content: 'Vegetable <br/>100% Organic',
    buttonTitle: 'SHOP NOW',
    buttonLink: '/shop',
    description: 'Free Pickup and Delivery Available'
  };

  return (
    <section className="hero">
      <div className="row">
        <div className="col-lg-3">
          <CategoryMenu />
        </div>
        <div className="col-lg-9">
          <div className="hero__search">
            {mountRemoteComponent({
              module: 'product', component: 'Search', props: {
                navigate,
                searchParams: {
                  categoryId: Number(searchParams.get('category')),
                }
              }
            })}

            <div className="hero__search__phone">
              <div className="hero__search__phone__icon">
                <i className="fa fa-phone" />
              </div>
              <div className="hero__search__phone__text">
                <h5>704-768-7449</h5>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className='hero__item set-bg'>
            {mountRemoteComponent({ module: 'shared', component: 'HeroBanner', props: heroBannerProps })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
