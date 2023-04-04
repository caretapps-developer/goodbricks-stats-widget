import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { sampleDescriptionHtml } from './sample-description';

const campaign = {
  coverFeePercentage: 3,
  coverFees: true,
  currencyPrefix: '$',
  daysLeft: 36,
  description: sampleDescriptionHtml,
  donations: [
    {
      amount: 50,
      anonymous: true,
      name: 'A Good Brick (Anonymous)',
      timeFromNow: '2021-01-23T09:03:06Z',
    },
    {
      amount: 50,
      anonymous: true,
      name: 'A Good Brick (Anonymous)',
      timeFromNow: '2021-01-23T09:03:06Z',
    },
    {
      amount: 5,
      anonymous: true,
      name: 'A Good Brick (Anonymous)',
      timeFromNow: '2021-01-23T06:58:57Z',
    },
    {
      amount: 40,
      anonymous: false,
      name: 'Maliha Safdar',
      timeFromNow: '2021-01-23T02:17:32Z',
    },
    {
      amount: 10,
      anonymous: true,
      name: 'A Good Brick (Anonymous)',
      timeFromNow: '2021-01-22T23:12:16Z',
    },
    {
      amount: 5,
      anonymous: true,
      name: 'A Good Brick (Anonymous)',
      timeFromNow: '2021-01-22T23:04:36Z',
    },
    {
      amount: 50,
      anonymous: true,
      name: 'A Good Brick (Anonymous)',
      timeFromNow: '2021-01-22T22:16:41Z',
    },
    {
      amount: 1000,
      anonymous: true,
      name: 'A Good Brick (Anonymous)',
      timeFromNow: '2021-01-22T21:48:48Z',
    },
    {
      amount: 142,
      anonymous: true,
      name: 'A Good Brick (Anonymous)',
      timeFromNow: '2021-01-22T20:32:55Z',
    },
    {
      amount: 20,
      anonymous: false,
      name: 'Muhamed Idriss ',
      timeFromNow: '2021-01-22T18:08:01Z',
    },
  ],
  donorCount: 1370,
  featureImageUrl: 'https://s3.us-west-2.amazonaws.com/cdn.goodbricks.org/static/media/icsd/icsd-expansion.jpg',
  featureVideoUrl: 'https://www.youtube.com/embed/videoseries?list=PLb7-wnSTI_wY8ejWTSb1JuWZ4MGNyCKUH',
  goal: 1400000,
  hideRecentDonations: true,
  hideSupporters: true,
  name: 'ICSD Expansion',
  organization: {
    backUrl: 'http://icsd.org',
    email: null,
    logo: 'https://i.ibb.co/qnxpPYR/icsd-logo-v2.jpg',
    name: 'Islamic Center Of San Diego',
    publicId: 'icsd.org',
    url: 'http://icsd.org',
  },
  percentage: 60,
  pledgePercentage: 75,
  raised: 1414,
  taxDeductible: true,
  title: 'ICSD Expansion - It is your Sadaqah Jariah',
  zakatEligible: false,
};

if (document.getElementById('stats-widget-root')) {
  ReactDOM.render(<App campaign={campaign} />, document.getElementById('stats-widget-root'));
}

window.StatsWidget = {
  mount: (props) => {
    const el = document.getElementById('stats-widget');
    ReactDOM.render(<App campaign={props.campaign} />, el);
  },
  unmount: () => {
    const el = document.getElementById('stats-widget');
    ReactDOM.unmountComponentAtNode(el);
  },
};
