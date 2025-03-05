export default [
  { heading: 'Menu(WOS)' },
  {
    title: '주문',
    icon: { icon: 'tabler-shopping-cart' },
    children: [
      {
        title: '주문등록',
        to: 'pages-published-wos-order-reg',
      },
      {
        title: '주문내역조회',
        to: 'pages-published-wos-order-list',
      },
      {
        title: '주문내역조회(임시)',
        to: 'pages-published-wos-order-view',
      },
    ],
  },
  {
    title: '반품',
    icon: { icon: 'tabler-box' },
    children: [
      {
        title: '반품등록',
        to: 'pages-published-wos-return-reg',
      },
      {
        title: '반품내역조회',
        to: 'pages-published-wos-return-list',
      },
      {
        title: '반품내역조회(임시)',
        to: 'pages-published-wos-return-view',
      },
    ],
  },
  {
    title: '거래원장',
    icon: { icon: 'tabler-list-search' },
    children: [
      {
        title: '거래원장조회',
        to: 'pages-published-wos-eledger-list',
      },
    ],
  },
  {
    title: '공지관리',
    icon: { icon: 'tabler-message-circle-2' },
    children: [
      {
        title: '공지사항',
        to: 'pages-published-wos-notice-list',
      },
      {
        title: '공지사항(임시)',
        to: 'pages-published-wos-notice-view',
      },
    ],
  },
]
