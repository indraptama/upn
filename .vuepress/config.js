module.exports = {
  title: 'Ringkasan UPN',
  description: 'Kumpulan Materi untuk menghadapi Ujian Pengangkatan Notaris.',

  themeConfig: {
    base: '/upn/',
    dest: 'docs',
    serviceWorker: true,
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
        {text: 'Jaminan Kebendaan', link: '/jaminan/'},
        {text: 'Jaminan Perorangan', link: '/jaminan/perorangan.html'},
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