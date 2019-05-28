import React from 'react';
import ReactDOM from 'react-dom';
import ReactPixel from '../src/index';

ReactPixel.init('snapchat_pixel_id', {}, { debug: true });
ReactPixel.pageView();
ReactPixel.snaptr('track', 'PAGE_VIEW');

ReactDOM.render(
  <div>
    <h1>React Snapchat Pixel Tested</h1>
    <button
      onClick={() =>
        ReactPixel.track('VIEW_CONTENT', {
          content_name: 'Really Fast Running Shoes',
          content_category: 'Apparel & Accessories > Shoes',
          content_ids: ['1234'],
          content_type: 'product',
          value: 0.5,
          currency: 'USD'
        })
      }
    >
      Track View Content
    </button>
  </div>,
  document.getElementById('app')
);
