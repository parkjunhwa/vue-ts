export default [
  { heading: 'Menu(MR)' },
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
    icon: { icon: 'tabler-chart-area-line' },
    children: [
      {
        title: '지점/담당자별 목표대비 실적',
        to: 'pages-published-report01',
      },
      {
        title: '처방처 원내외 판매현황',
        to: 'pages-published-report02',
      },
      
      {
        title: '유통별실적조회',
        to: 'pages-published-report03',
      },
      {
        title: '실적조회(실시간)',
        to: 'pages-published-report04',
      },
    ],
  },
  {
    title: '마스터관리',
    icon: { icon: 'tabler-server' },
    children: [
      {
        title: '제품마스터',
        to: 'pages-published-mt-product-list',
      },
      {
        title: '거래처마스터',
        to: 'pages-published-mt-company-list',
      },
      
      {
        title: '거래처마스터 상세',
        to: 'pages-published-mt-company-vwrite',
      },
      {
        title: '사용자마스터',
        to: 'pages-published-mt-user-list',
      },
      {
        title: '도매상마스터',
        to: 'pages-published-mt-wos-vwrite',
      },
      {
        title: '단가마스터',
        to: 'pages-published-price-sys',
      },
    ],
  },
  {
    title: '시스템관리',
    icon: { icon: 'tabler-settings' },
    children: [
      {
        title: '메뉴관리',
        to: 'pages-published-menu-sys',
      },
      {
        title: '코드관리',
        to: 'pages-published-code-sys',
      },
      {
        title: '공지사항',
        to: 'pages-published-notice-sys-list',
      },
      {
        title: '공지사항(쓰기)',
        to: 'pages-published-notice-sys-write',
      },
      {
        title: '공지사항(보기)',
        to: 'pages-published-notice-sys-view',
      },
    ],
  },
]
