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
        to: '',
      },
      {
        title: 'title',
        children: [
          { title: 'title', to: '' },
          { title: 'title', to: '' },
          { title: 'title', to: '' },
        ],
      },
    ],
  },
  {
    title: '반품',
    icon: { icon: 'tabler-box' },
    to: '',
  },
  {
    title: '거래원장조회',
    icon: { icon: 'tabler-list-search' },
    to: '',
  },
  {
    title: '수금',
    icon: { icon: 'tabler-report-money' },
    to: '',
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
        title: '공지사항',
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
