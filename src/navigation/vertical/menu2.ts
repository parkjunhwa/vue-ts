export default [
  { heading: 'Menu' },
  {
    title: '주문',
    icon: { icon: 'tabler-shopping-cart' },
    children: [
      {
        title: '주문등록',
        to: 'pages-published-order-reg',
      },
      {
        title: '주문내역조회',
        to: 'pages-published-order-list',
      },
      {
        title: '주문내역조회(임시)',
        to: 'pages-published-order-view',
      },
    ],
  },
  {
    title: '반품',
    icon: { icon: 'tabler-box' },
    children: [
      {
        title: '반품등록',
        to: 'pages-published-return-reg',
      },
      {
        title: '반품내역조회',
        to: 'pages-published-return-list',
      },
      {
        title: '반품내역조회(임시)',
        to: 'pages-published-return-view',
      },
    ],
  },
  {
    title: '거래원장',
    icon: { icon: 'tabler-list-search' },
    children: [
      {
        title: '거래원장조회',
        to: 'pages-published-eledger-list',
      },
    ],
  },
  {
    title: '수금',
    icon: { icon: 'tabler-report-money' },
    children: [
      {
        title: '카드수금등록',
        to: 'pages-published-collectpay-vwrite',
      },
      {
        title: '수금내역조회',
        to: 'pages-published-collectmoneylist',
      },
    ],
  },
  {
    title: '공지관리',
    icon: { icon: 'tabler-message-circle-2' },
    children: [
      {
        title: '공지사항',
        to: 'pages-published-notice-list',
      },
      {
        title: '공지사항(임시)',
        to: 'pages-published-notice-view',
      },
    ],
  },
  {
    title: '현황통계',
    icon: { icon: 'tabler-shopping-cart' },
    to: '',
  },
  {
    title: '마스터관리',
    icon: { icon: 'tabler-server' },
    to: '',
  },
  {
    title: '시스템관리',
    icon: { icon: 'tabler-settings' },
    to: '',
  },
]
