module.exports = {
  title: 'Ringkasan UPN',
  description: 'Kumpulan Materi untuk menghadapi Ujian Pengangkatan Notaris.',
  base: "/upn/",
  dest: 'docs',
  serviceWorker: true,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  
  // Theme Configuration
  themeConfig: {
    nav: [
      {text: 'KEMENKUMHAM', link: '/organisasi/'},
      {text: 'Notaris', items: [
        {text: 'Pengangkatan, Perpindahan ...', link: '/notaris/'},
        {text: 'Sikap & Prilaku Notaris', link: '/notaris/sikap.html'},
        
      ]},
      {text: 'Perjanjian', items: [
        {text: 'Teori tentang Perjanjian', link: '/perjanjian/'},
        {text: 'Perjanjian Bernama', link: '/perjanjian/bernama.html'},
        {text: 'perjanjian Tidak Bernama', link: '/perjanjian/tidakbernama.html'},
        {text: 'Legalisasi & Warmerking', link: '/perjanjian/legalisasi.html'},
      ]},
      {text: 'Badan Hukum', items: [
        {text: 'Perseroan Terbatas', link: '/badanhukum/'},
        {text: 'Yayasan', link: '/badanhukum/yayasan.html'},
        {text: 'perkumpulan', link: '/badanhukum/perkumpulan.html'},
      ]},
      {text: 'Jaminan', items: [
        {text: 'Jaminan Perorangan', link: '/jaminan/perorangan.html'},
        {text: 'Jaminan Kebendaan', link: '/jaminan/'},
        {text: 'Fidusia', link: '/jaminan/fidusia.html'},
      ]},
      {text: 'Harta Benda', items: [
        {text: 'Wasiat', link: '/hartabenda/'},
        {text: 'Waris', link: '/hartabenda/waris.html'},
        {text: 'Kepailitan', link: '/hartabenda/kepailitan.html'},
      ]},
      {text: 'TPA', link: '/tpa/'},      
    ],
    sidebarDepth: 3,
    sidebar: {
      '/notaris/':[
        '',
        'pindah',
        'perpanjangan',
        'pemberhentian',
        'pengawasan',
        'pembinaan',
        'sikap',
      ],

      '/perjanjian/': [
        '',
        'bernama',
        'tidakbernama',
        'legalisasi',
      ],

      '/badanhukum/': [
        '',
        'yayasan',
        'perkumpulan',
      ],

      '/jaminan/': [
        '',
        'perorangan',
        'fidusia',
      ],

      '/hartabenda/': [
        '',
        'waris',
        'kepailitan',
      ],

      '/tpa/': [
        '',
      ],

      '/': [
        '',
      ]
    }
    
  }
}