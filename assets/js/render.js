const jsProductList = document.querySelector('.js-slider .slider-list');
const figmaProductList = document.querySelector('.figma-slider .slider-list');
const webProductList = document.querySelector('.web-slider .slider-list');
const psdProductList = document.querySelector('.psd-slider .slider-list');

const skillFrontendList = document.querySelector('.fontend-list');
// const skillFrontendFBList = document.querySelector('.fontend-framework-library-list');
const skillBackendList = document.querySelector('.backend-list');
const skillDatabaseList = document.querySelector('.database-list');

const inspirationSlider = document.querySelector('.inspirationSlider');
const detectiveStoreSlider = document.querySelector('.detectiveStoreSlider');
const classicStoreSlider = document.querySelector('.classicStoreSlider');
const favoriteFilmList = document.querySelector('.favorite-film-list');

const render = {
  init: function () {
    this.jsProductListData = [{
      url: 'https://thangnv-199.github.io/my-game/',
      name: 'game',
      imageSrc: './assets/images/game.png',
    }, {
      url: 'https://thangnv-199.github.io/tetris/',
      name: 'tetris',
      imageSrc: './assets/images/tetris.jpg',
    }, {
      url: 'https://thangnv-199.github.io/fuckky-bird/',
      name: 'flappy bird',
      imageSrc: './assets/images/flappy-bird.png',
    }, {
      url: 'https://thangnv-199.github.io/wheel-fortune/',
      name: 'Vòng quay may mắn',
      imageSrc: './assets/images/wheel-fortune.png',
    }, {
      url: 'https://thangnv-199.github.io/my-paint/',
      name: 'paint',
      imageSrc: './assets/images/paint.png',
    }, ];

    this.webProductListData = [{
      url: './pages/web/tiki/index.html',
      name: 'tiki',
      imageSrc: './assets/images/tiki.png',
    }, {
      url: './pages/web/shopee/index.html',
      name: 'shopee',
      imageSrc: './assets/images/shopee.png',
    }, {
      url: './pages/web/inHype.covid/index.html',
      name: 'inHype',
      imageSrc: './assets/images/inHype.png',
    }, {
      url: './pages/web/love-travel/index.html',
      name: 'love travel',
      imageSrc: './assets/images/love-travel.png',
    }, {
      url: './pages/web/setsail/index.html',
      name: 'setsail',
      imageSrc: './assets/images/setsail.png',
    }, {
      url: './pages/web/sns/index.html',
      name: 'sns',
      imageSrc: './assets/images/sns.png',
    }, ];

    this.figmaProductListData = [{
      url: './pages/figma/covid-19/index.html',
      name: 'covid',
      imageSrc: './assets/images/figma-covid.png',
    }, {
      url: './pages/figma/thousand-sunny/index.html',
      name: 'thousand-sunny',
      imageSrc: './assets/images/figma-thousand-sunny.png',
    }, {
      url: './pages/figma/trafalgar/index.html',
      name: 'trafalgar',
      imageSrc: './assets/images/figma-trafalgar.png',
    }, {
      url: './pages/figma/trafico/index.html',
      name: 'trafico',
      imageSrc: './assets/images/figma-trafico.png',
    }, {
      url: './pages/figma/warehouse/index.html',
      name: 'warehouse',
      imageSrc: './assets/images/figma-warehouse.png',
    }, ];

    this.psdProductListData = [{
      url: './pages/psd/octavian2/index.html',
      name: 'octavian2',
      imageSrc: './assets/images/octavian2.png',
    }, {
      url: './pages/psd/golden/index.html',
      name: 'golden',
      imageSrc: './assets/images/golden.png',
    }, {
      url: './pages/psd/focal-resume/index.html',
      name: 'focal',
      imageSrc: './assets/images/focal.png',
    }, {
      url: './pages/psd/cube/index.html',
      name: 'Cuda',
      imageSrc: './assets/images/psd-cube.jpg',
    }, ];

    this.skillFrontendData = [{
      name: 'Javascript',
      process: 90,
    }, {
      name: 'HTML & CSS',
      process: 80,
    }, {
      name: 'Reactjs',
      process: 75,
    }, {
      name: 'Bootstrap, Material-ui, Tailwind',
      process: 80,
    },];

    // this.skillFrontendFBData = [{
    //   name: 'React',
    //   process: 75,
    // }, {
    //   name: 'Bootstrap, Material-ui, Tailwind',
    //   process: 80,
    // },];

    this.skillBackendData = [{
      name: 'Nodejs',
      process: 60,
    }, ];

    this.skillDatabaseData = [{
      name: 'MongoDB',
      process: 75,
    }, ];

    this.inspirationSliderData = [{
        name: 'Bill Gates',
        imageSrc: './assets/images/bill-gates.jpg',
        url: 'https://vi.wikipedia.org/wiki/Bill_Gates',
        description: '“ Đừng so sánh bản thân với người khác. Làm như vậy là bạn đang tự xúc phạm mình đấy”'
      }, {
        name: 'Mark Zuckerberg',
        imageSrc: './assets/images/mark-zuckerberg.jpg',
        url: 'https://vi.wikipedia.org/wiki/Mark_Zuckerberg',
        description: '“ Trong một thế giới đang thay đổi rất nhanh chóng, lộ trình duy nhất đưa bạn đến thất bại là không dám mạo hiểm” '
      }, {
        name: 'Thomas Edison',
        imageSrc: './assets/images/thomas-edison.jpg',
        url: 'https://vi.wikipedia.org/wiki/Thomas_Edison',
        description: '“ Thiên tài 1% là cảm hứng và 99% là mồ hôi” '
      },
      {
        name: 'Abraham Lincoln',
        imageSrc: './assets/images/abraham-lincoln.jpg',
        url: 'https://vi.wikipedia.org/wiki/Abraham_Lincoln',
        description: '“Nếu cho tôi 6 tiếng để đốn hạ một cái cây, tôi sẽ dành 4 tiếng đầu tiên để mài rìu” '
      },
      {
        name: 'Albert Einstein',
        imageSrc: './assets/images/albert-einstein.jpg',
        url: 'https://vi.wikipedia.org/wiki/Albert_Einstein',
        description: '“Kẻ nào chưa từng mắc phải lỗi lầm cũng là kẻ chưa bao giờ thử làm việc gì cả”  '
      },
      {
        name: 'Helen Keller',
        imageSrc: './assets/images/hellen-keller.jpg',
        url: 'https://vi.wikipedia.org/wiki/Helen_Keller',
        description: '“ Hãy quay về phía mặt trời và bạn sẽ không thấy bóng tối” '
      },
      {
        name: 'Walt Disney',
        imageSrc: './assets/images/walt-disney.jpg',
        url: 'https://vi.wikipedia.org/wiki/Walt_Disney',
        description: '“ Cách để bắt đầu đó là ngừng nói suông và bắt tay vào công việc”'
      },
      {
        name: 'Bill Gates',
        imageSrc: './assets/images/bill-gates.jpg',
        url: 'https://vi.wikipedia.org/wiki/Bill_Gates',
        description: '“Nếu bạn sinh ra trong nghèo khó đó không phải là lỗi của bạn. Nhưng nếu bạn chết trong nghèo khó thì đó là lỗi của bạn”'
      },
      {
        name: 'Oprah Winfrey',
        imageSrc: './assets/images/Oprah-Winfrey.jpg',
        url: 'https://vi.wikipedia.org/wiki/Oprah_Winfrey',
        description: '“Đừng đặt ra giới hạn cho chính mình”'
      }
    ];

    this.favoriteFilmData = [{
      name: 'Naruto',
      url: '#!',
      description: `Naruto là câu chuyện về Uzumaki Naruto,
                một ninja trẻ với ước mơ trở thành Hokage, người lãnh đạo của làng Lá để 
                tìm kiếm sự công nhận từ mọi người. 12 năm trước, hồ ly 9 đuôi tấn công 
                làng Lá, Hokage Đệ Tứ đã đánh bại và phong ấn hồ ly 9 đuôi vào con trai 
                của chính mình - Naruto nhằm kết thúc cuộc tấn công đẫm máu này. Sau trận 
                chiến đó, Naruto bị mất cả cha lẫn mẹ, cậu bị mọi người xa lánh vì mang 
                trong mình con quái vật đã giết chết biết bao người dân làng Lá. Sau khi vượt 
                qua kỳ thi tốt nghiệp, Naruto cùng hai người bạn đồng hành là Uchiha Sasuke và 
                Haruno Sakura được thầy Kakashi dẫn dắt, tạo nên đội 7 trứ danh, chính thức bắt 
                đầu cuộc phiêu lưu. Khi xem Naruto, khán giả sẽ được chứng kiến quá trình trưởng 
                thành hàng ngày của cậu bé thông qua những tập phim, những trận chiến đấu cùng 
                thầy cô và các đồng đội.`,
      imageSrc: './assets/images/naruto.jpg',
    }, {
      name: 'One Piece',
      url: '#!',
      description: `Đảo Hải Tặc là chuyện về cậu bé Monkey D. Luffy thông minh, 
                hóm hỉnh và hay tìm hiểu những điều mới lạ. Một ngày cậu ăn nhầm trái “ác quỷ” 
                bị biến thành người cao su và không bao giờ biết hơi. 
                Trong lúc khám phá những điều thú vị trong cuộc sống, 
                cậu tìm thấy thông tin về sự tồn tại kho báu: Đảo  Hảo tặc. 
                Cậu lên kế hoạch và ước mơ có ngày chiếm hữu được kho báu. 
                10 năm sau sự việc ăn nhầm trái “ác quỉ” và ước mơ có được kho báu, 
                Monkey D. Luffy  rời quê hương, hội đủ 10 thành viên lập thành nhóm cướp 
                biển lập thành “Hải tặc mũ rơm”. 
                Khi đó cuộc phiêu lưu tìm kiếm kho báu bắt đầu. 
                Trong hành trình tìm kiếm, đội “Hải tặc mũ rơm” phải chống lại rất nhiều 
                băng nhóm hải tặc xấu khác cũng muốn độc chiếm Đảo Hải Tặc. 
                Hải quân của chính phủ cũng muốn loại những băng nhóm xấu. 
                Băng “Hải tặc mũ rơm” phải trải qua nhiều khó khăn không lùi bước 
                để trở thành vua Hảo tặc và có được kho báu “Đảo Hải tặc”`,
      imageSrc: './assets/images/onepiece.jpg',
    }, {
      name: 'Thám tử lừng danh Conan',
      url: '#!',
      description: ` Truyện xoay quanh thám tử trung học Kudo Shinichi bị biến 
            thành một đứa bé khi điều tra một tổ chức bí ẩn và phá nhiều vụ án khi 
            đóng giả làm em của người bạn thân thời thơ ấu và các nhân vật khác.`,
      imageSrc: './assets/images/conana.jpg',
    }, ];

    this.detectiveStoreSliderData = [{
        name: 'Đề thi đẫm máu',
        imageSrc: './assets/images/de-thi-dam-mau.jpg',
        url: 'https://tiki.vn/de-thi-dam-mau-tieu-thuyet-trinh-tham-tai-ban-2020-p54308767.html?itm_campaign=SRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.30702_Y.230853_Z.607637_CN.%25C4%2590e-Thi-%25C4%2590am-Mau---Tieu-Thuyet-Trinh-Tham-%2528Tai-Ban-2020%2529&itm_medium=CPC&itm_source=tiki-ads&spid=59236489',
        description: `Một tên sát thủ có sở thích uống chất hỗn hợp máu nạn nhân với sữa tươi, hắn có căn bệnh gì đặc biệt hay là con quỷ hút máu bất tử nghìn năm trong truyền thuyết?
        Trong thành phố C liên tiếp xảy ra 4 vụ cưỡng hiếp giết người, nạn nhân đều là những cô gái trí thức từ 25 - 35 tuổi, đây rốt cuộc là giết người trả thù hay đơn giản là cưỡng dâm?
        Hàng loạt cái chết bí ẩn thảm khốc của những người sống trong trường Đại học J liên tiếp xảy ra. Ở hiện trường vụ án, hung thủ đều để lại gợi ý cho vụ án tiếp theo, nhằm gợi ý gì?`
      }, {
        name: 'Mười tội ác',
        imageSrc: './assets/images/muoi-toi-ac.jpg',
        url: 'https://dtruyen.com/muoi-toi-ac-bong-ma-dem-mua/',
        description: 'Bốn cảnh sát với những năng lực và tuyệt kỹ đặc biệt, họ được tuyển chọn từ mọi đội cảnh sát trong cả nước và lập thành đội chuyên án. Nhiệm vụ của họ là tiến hành phá những vụ án đặc biệt, những vụ án mà phạm nhân là những kẻ có nhân cách vô cùng méo mó, lệch lạc.'
      }, {
        name: 'Bạch dạ hành',
        imageSrc: './assets/images/bach-da-hanh.jpg',
        url: 'https://tiki.vn/bach-da-hanh-tai-ban-2019-p21162548.html?itm_campaign=SRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.9143_Y.67463_Z.230244_CN.Bach-Da-Hanh-%2528Tai-Ban-2019%2529&itm_medium=CPC&itm_source=tiki-ads&spid=40834931',
        description: `Osuke, chủ một tiệm cầm đồ bị sát hại tại một ngôi nhà chưa hoàn công, một triệu yên mang theo người cũng bị cướp mất.
        Sau đó một tháng, nghi can Fumiyo được cho rằng có quan hệ tình ái với nạn nhân và đã sát hại ông để cướp một triệu yên, cũng chết tại nhà riêng vì ngộ độc khí ga. Vụ án mạng ông chủ tiệm cầm đồ rơi vào bế tắc và bị bỏ xó.
        Nhưng với hai đứa trẻ mười một tuổi, con trai nạn nhân và con gái nghi can, vụ án mạng năm ấy chưa bao giờ kết thúc. Sinh tồn và trưởng thành dưới bóng đen cái chết của bố mẹ, cho đến cuối đời, Ryoji vẫn luôn khao khát được một lần đi dưới ánh mặt trời, còn Yukiho cứ ra sức vẫy vùng rồi mãi mãi chìm vào đêm trắng.
    `
      }, {
        name: 'Phía sau nghi can X',
        imageSrc: './assets/images/sach-Phia-Sau-Nghi-Can-X.jpg',
        url: 'https://tiki.vn/phia-sau-nghi-can-x-tai-ban-2019-p17336364.html?itm_campaign=SRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.35798_Y.273253_Z.688479_CN.FBT-ads&itm_medium=CPC&itm_source=tiki-ads&spid=72578633',
        description: ` “Việc nghĩ ra một bài toán vô cùng khó và việc giải bài toán đó, việc nào khó hơn?”
    Khi nhấn chuông cửa nhà nghi can chính của một vụ án mới, điều tra viên Kusanagi không biết rằng anh sắp phải đương đầu với một thiên tài ẩn dật. Kusanagi càng không thể ngờ rằng, chỉ một câu nói vô thưởng vô phạt của anh đã kéo người bạn thân, Manabu Yukawa, một phó giáo sư vật lý tài năng, vào vụ án. Và điều làm sững sờ nhất, đó là vụ án kia chẳng qua cũng chỉ như một bài toán cấp ba đơn giản, tuy nhiên ấn số X khi được phơi bày ra lại không đem đến hạnh phúc cho bất cứ ai…`
      },
      {
        name: 'Sherlock Home',
        imageSrc: './assets/images/sherlock-home.jpg',
        url: 'https://tiki.vn/sherlock-holmes-toan-tap-hop-3-tap-p370811.html?itm_campaign=SRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.10056_Y.67064_Z.227879_CN.Sherlock-Holmes-Toan-Tap-%2528Hop-3-Tap%2529&itm_medium=CPC&itm_source=tiki-ads&spid=12499956',
        description: `Sherlock Holmes là một thám tử tư ở Luân Đôn nổi tiếng nhờ trí thông minh, khả năng suy diễn logic và quan sát tinh tường trong khi phá những vụ án mà cảnh sát phải bó tay.`
      },
      {
        name: 'Sự im lặng của bầy cừu',
        imageSrc: './assets/images/su-im-lang-cua-bay-cuu.jpg',
        url: 'https://tiki.vn/su-im-lang-cua-bay-cuu-tai-ban-p8885995.html?itm_campaign=SRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.9975_Y.66842_Z.226003_CN.Su-im-lang-cua-bay-cuu-%2528tai-ban%2529&itm_medium=CPC&itm_source=tiki-ads&spid=12513256',
        description: `Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham thích trò đùa trí tuệ, những tiết lộ nửa chừng hắn chỉ dành cho kẻ nào thông minh, những cái nhìn xuyên thấu thân phận và suy tư của cô mà đôi khi cô muốn lảng trá Clarice Starling đã dấn thân vào cuộc điều tra án giết người lột da hàng loạt như thế, để rồi trong tiếng bức bối của chiếc đồng hồ đếm ngược về cái chết, cô phải vật lộn để chấm dứt tiếng kêu bao lâu nay vẫn đeo đẳng giấc mơ mình: tiếng kêu của bầy cừu sắp bị đem đi giết thịt.`
      },
      {
        name: 'Mật mã Da vinci',
        imageSrc: './assets/images/mat-ma-da-vinci.jpg',
        url: 'https://tiki.vn/phia-sau-nghi-can-x-tai-ban-2019-p17336364.html?itm_campaign=SRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.35798_Y.273253_Z.688479_CN.FBT-ads&itm_medium=CPC&itm_source=tiki-ads&spid=72578633',
        description: `Mật mã Da Vinci (tiếng Anh: The Da Vinci Code) là một tiểu thuyết của nhà văn người Mỹ Dan Brown được xuất bản năm 2003 bởi nhà xuất bản Doubleday Fiction. Đây là một trong số các quyển sách bán chạy nhất thế giới với trên 40 triệu quyển được bán ra (tính đến tháng 3 năm 2006), và đã được dịch ra 44 ngôn ngữ.
    `
      },
    ];

    this.classicStoreSliderData = [{
      name: 'Tam quốc diễn nghĩa',
      imageSrc: './assets/images/tam-quoc.jpg',
      url: 'https://tiki.vn/tam-quoc-dien-nghia-tron-bo-6-tap-tai-ban-2021-p136596503.html?itm_campaign=SRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.84771_Y.756267_Z.1488679_CN.Product-Ads-03%252F11%252F2021&itm_medium=CPC&itm_source=tiki-ads&spid=136596504',
      description: `Tam Quốc diễn nghĩa của La Quán Trung là một trong những kiệt tác của văn học thế giới. Ngay từ khi được dịch sang chữ quốc ngữ vào đầu thế kỷ XX, tiểu thuyết này đã được bạn đọc Việt Nam đón nhận nồng nhiệt; từ đó đến nay có vô vàn ấn bản Tam Quốc ra đời, mỗi ấn bản lại mang một màu sắc khác nhau. `
    }, {
      name: 'Không gia đình',
      imageSrc: './assets/images/khong-gia-dinh.jpg',
      url: 'https://tiki.vn/khong-gia-dinh-bia-cung-tai-ban-2018-p2450381.html?itm_campaign=SRC_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.9420_Y.68088_Z.233123_CN.Khong-gia-dinh-%2528Bia-cung%2529&itm_medium=CPC&itm_source=tiki-ads&spid=57486554',
      description: 'Không Gia Đình là một chuyến phiêu lưu mà Rêmi là nhân vật chính. Em nghèo khổ, em cô độc, em không có người thân. Cuộc đời Rêmi gắn liền với gánh xiếc rong, với những thử thách mà em gặp phải trên đường đời trải rộng khắp nước Pháp tươi đẹp. Rêmi lớn lên trong đau khổ, lang thang mọi nơi, bị tù đày... nhưng dù trong hoàn cảnh nào, em vẫn đứng thẳng lưng, ngẩng cao đầu, giữ phẩm chất làm người - điều em đã học từ cụ Vitali trong cuộc đời lang bạt của mình.'
    }, {
      name: 'Bố già',
      imageSrc: './assets/images/bo-gia.jpg',
      url: 'https://tiki.vn/bo-gia-mario-puzo-p520313.html?spid=238671',
      description: 'Từ một kẻ nhập cư tay trắng đến ông trùm tột đỉnh quyền uy, Don Vito Corleone là con rắn hổ mang thâm trầm, nguy hiểm khiến kẻ thù phải kiềng nể, e dè, nhưng cũng được bạn bè, thân quyến xem như một đấng toàn năng đầy nghĩa khí. Nhân vật trung tâm ấy đồng thời cũng là hiện thân của một pho triết lí rất “đời” được nhào nặn từ vốn sống của hàng chục năm lăn lộn giữa chốn giang hồ bao phen vào sinh ra tử, vì thế mà có ý kiến cho rằng “Bố Già là sự tổng hòa của mọi hiểu biết. Bố Già là đáp án cho mọi câu hỏi”.'
    }, {
      name: 'Thép đã tôi thế đấy',
      imageSrc: './assets/images/thep-da-toi-the-day.jpg',
      url: 'https://tiki.vn/thep-da-toi-the-day-dinh-ti-p463348.html?spid=172060',
      description: 'Thép Đã Tôi Thế Đấy không phải là một tác phẩm văn học chỉ nhìn đời mà viết. Tác giả sống nó rồi mới viết nó. Nhân vật trung tâm Pa-ven chính là tác giả: Nhi-ca-lai A-xtơ-rốp- xki. Là một chiến sĩ cách mạng tháng Mười, ông đã sống một cách nồng cháy nhất, như nhân vật Pa-ven của ông. Cũng không phải một cuốn tiểu thuyết tự thuật thường vì hứng thú hay lợi ích cá nhân mà viết. A-xtơ-rốp-xki viết Thép Đã Tôi Thế Đấy trên giường bệnh, trong khi bại liệt và mù, bệnh tật tàn phá chín phần mười cơ thể.'
    }, {
      name: 'Đồi gió hú',
      imageSrc: './assets/images/doi-gio-hu.jpg',
      url: 'https://tiki.vn/doi-gio-hu-tai-ban-p2496281.html?spid=2496329',
      description: 'Đồi gió hú, câu chuyện cổ điển về tình yêu ngang trái và tham vọng chiếm hữu, cuốn tiểu thuyết dữ dội và bí ẩn về Catherine Earnshaw, cô con gái nổi loạn của gia đình Earnshaw, với gã đàn ông thô ráp và điên rồ mà cha cô mang về nhà rồi đặt tên là Heathcliff, được trình diễn trên cái nền những đồng truông, quả đồi nước Anh cô quạnh và ban sơ không kém gì chính tình yêu của họ. '
    }, ];
  },

  renderSlider: function (data, container) {
    let html = '';
    for (let i = 0; i < data.length; i++) {
      html += `
            <div class="slider-item">
                <a target="_blank" href="${data[i].url}" class="slider-link">
                    <img src="${data[i].imageSrc}" alt="">
                </a>
                <a target="_blank" href=${data[i].url} class="slider-title">${data[i].name}</a>
            </div>
        `
    }
    container.innerHTML += html;
  },

  renderSkillField: function (data, container) {
    const html = data.map(({
      process,
      name
    }) => (`
            <div class="skill-field">
                <div class="skill-process" style="--process: ${process}%">
                    <span>${name}</span>
                    <span>${process}%</span>
                </div>
            </div>
        `)).join('');
    container.innerHTML = html;
  },

  renderCard: function (data, container) {
    const html = data.map(({
      name,
      imageSrc,
      url,
      description,
    }) => (`
            <div class="card-item">
                <a target="_blank" href="${url}" class="card-link">
                    <div class="card-image">
                        <img src="${imageSrc}" alt="">
                    </div>
                    <div class="card-content">
                        <h3 class="card-name">${name}</h3>
                        <p class="card-description">${description}</p>
                    </div>
                </a>
            </div>
        `)).join('');
    container.innerHTML = html;
  },

  start: function () {
    this.init();
    this.renderSlider(this.jsProductListData, jsProductList);
    this.renderSlider(this.webProductListData, webProductList);
    this.renderSlider(this.figmaProductListData, figmaProductList);
    this.renderSlider(this.psdProductListData, psdProductList);
    this.renderSkillField(this.skillFrontendData, skillFrontendList);
    // this.renderSkillField(this.skillFrontendFBData, skillFrontendFBList);
    this.renderSkillField(this.skillBackendData, skillBackendList);
    this.renderSkillField(this.skillDatabaseData, skillDatabaseList);
    this.renderCard(this.inspirationSliderData, inspirationSlider);
    this.renderCard(this.detectiveStoreSliderData, detectiveStoreSlider);
    this.renderCard(this.classicStoreSliderData, classicStoreSlider);
    this.renderCard(this.favoriteFilmData, favoriteFilmList);

  },
}

render.start();