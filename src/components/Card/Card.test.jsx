import React from 'react';
import TestRenderer from 'react-test-renderer';

import Card from './Card';

describe('Card', () => {
  it('should render correctly with no tag', () => {
    const tree = TestRenderer.create(
      <Card
        key="id123"
        title="title"
        tags={['Available']}
        image="//cdn.shopify.com/s/files/1/0260/5524/5923/products/SUSUMU_02copy_4488d8f1-6536-49ef-a310-adec11d2213d_500x.jpg?v=1613558884"
        url="https://shop.avantarte.com/products/the-sinner-at-dusk-1"
        price={4000.0}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with coming soon tag', () => {
    const tree = TestRenderer.create(
      <Card
        key="id123"
        title="title"
        tags={['Coming soon']}
        image="//cdn.shopify.com/s/files/1/0260/5524/5923/products/SUSUMU_02copy_4488d8f1-6536-49ef-a310-adec11d2213d_500x.jpg?v=1613558884"
        url="https://shop.avantarte.com/products/the-sinner-at-dusk-1"
        price={4000.0}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const tree = TestRenderer.create(
      <Card
        key="id123"
        title="title"
        tags={['Sold Out']}
        image="//cdn.shopify.com/s/files/1/0260/5524/5923/products/SUSUMU_02copy_4488d8f1-6536-49ef-a310-adec11d2213d_500x.jpg?v=1613558884"
        url="https://shop.avantarte.com/products/the-sinner-at-dusk-1"
        price={4000.0}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
