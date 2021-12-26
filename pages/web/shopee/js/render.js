const bannerSlider1List = document.querySelector('.banner-slider');
const bannerSlider2List = document.querySelector('.mall-slider');
const featureList = document.querySelector('.feature-list');
const superSaleList = document.querySelector('.super-sale-body');
const directoryList = document.querySelector('.directory-list');
const flashSaleList = document.querySelector('.flash-sale-list');
const mallDirectoryList = document.querySelector('.mall-directory-list');
const searchTrendingList = document.querySelector('.search-trending-list');
const searchTopList = document.querySelector('.search-top-list');
const suggestionsList = document.querySelector('.suggestions-list');

const render = {
    init: function() {

        this.bannerSlider1Data = [{
            imageSrc: './images/banner/ef1f3dfe1379a24a2c73cf905cc34489_xxhdpi.jpg',
        },{
            imageSrc: './images/banner/a378f4f6d63accde4d7e9048fb086c8e_xxhdpi.png',
        },{
            imageSrc: './images/banner/060c52b47c84122675d6711ee9b826ff_xxhdpi.jpg',
        },{
            imageSrc: './images/banner/b25e4e1377bb5cad4058017969aa2338_xxhdpi.png',
        },{
            imageSrc: './images/banner/af8321993462ccb67a65d6e5b46a9d59_xxhdpi.png',
        },{
            imageSrc: './images/banner/d335e7eb20a43f3790133a9b649e6a74_xxhdpi.png',
        },{
            imageSrc: './images/banner/7d2662cd0d8af65b22fb1f8b4d1f9711_xxhdpi.png',
        },{
            imageSrc: './images/banner/ca0df6c6915d5f80400da92d9dec98d4_xxhdpi.png',
        },{
            imageSrc: './images/banner/575cf81a3a17f5dd1deef0c7a9ec0717_xxhdpi.png',
        },{
            imageSrc: './images/banner/d413726db2afa497f129d969969b2504_xxhdpi.png',
        },];

        this.bannerSlider2Data = [{
            imageSrc: './images/mall/4c6b0c55a2a31381dcd8b89a24a0be87.png',
        },{
            imageSrc: './images/mall/8b2267a08c1f2a5f6002cfd213513a3b.png',
        },{
            imageSrc: './images/mall/3692fa6d9f959adf9d2be9fc7a250549.png',
        },{
            imageSrc: './images/mall/9a6305154aa423fc78f75c78054283c1.png',
        },{
            imageSrc: './images/mall/372ed65a039c6506e4d47e9b0832a4b2.png',
        },];

        this.featureData = [{
            imageSrc: './images/feature/4e32311e7d872547962d1867d39c9027_xhdpi.png',
            name: 'Tech Zone - Siêu thị điện tử',
        },{
            imageSrc: './images/feature/9da9a3acb5520d601f86a90434f455a5_xhdpi.png',
            name: 'Hoàn Xu 20% - Đơn Từ 0Đ',
        },{
            imageSrc: './images/feature/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi.png',
            name: 'Gì Cũng Rẻ - Từ 1K',
        },{
            imageSrc: './images/feature/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi.png',
            name: 'Nạp Thẻ, Hóa Đơn & E-voucher',
        },{
            imageSrc: './images/feature/07ee4296b0a33885418670f2e3ffeca0_xhdpi.png',
            name: 'Freeship Xtra',
        },{
            imageSrc: './images/feature/7971053d6c5db79f83079c7a3d7e6408_xhdpi.png',
            name: 'Hàng Hiệu -50% - Voucher -50%',
        },{
            imageSrc: './images/feature/29961f92098bc9153b88332110a91c87_xhdpi.png',
            name: 'Hàng Quốc Tế - Deal Đồng Giá',
        },{
            imageSrc: './images/feature/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi.png',
            name: 'Shopee Premium',
        },];

        this.superSaleData = [{
            title: 'mua đi chờ chi',
            products: [{
                imageSrc: './images/super-sale/7356f27652c4573ac5709b0f064e680d_tn.png',
                price: '125.000',
            },{
                imageSrc: './images/super-sale/5258d1d03cbfe08d1f1a0ebab62eb25a_tn.jpg',
                price: '10.000',
            },{
                imageSrc: './images/super-sale/de84cc03a96e836588e6202fcb9e7271_tn.jpg',
                price: '1.000',
            },]
        },{
            title: 'thương hiệu nổi bật',
            products: [{
                imageSrc: './images/super-sale/18b38b2ddc70de803a4f7cf179e2f17f.jpg',
                description: 'GIẢM GIÁ SIÊU HOT',
            },{
                imageSrc: './images/super-sale/ebfc36c2b6ca5a3783bc8aecced3924c.jpg',
                description: 'GIẢM ĐẾN 40%',
            },{
                imageSrc: './images/super-sale/5b75f5f495c802123d32d939e2654c78.jpg',
                description: 'ƯU ĐÃI ĐẾN 50%',
            },]
        },];

        this.directoryData = [[{
            imageSrc: './images/directory/687f3967b7c2fe6a134a2c11894eea4b_tn.png',
            name: 'Thời trang Nam',
        },{
            imageSrc: './images/directory/75ea42f9eca124e9cb3cde744c060e4d_tn.png',
            name: 'Thời trang Nữ',
        },], [{
            imageSrc: './images/directory/31234a27876fb89cd522d7e3db1ba5ca_tn.png',
            name: 'Điện thoại và Phụ kiện',
        },{
            imageSrc: './images/directory/099edde1ab31df35bc255912bab54a5e_tn.png',
            name: 'Mẹ và Bé',
        },], [{
            imageSrc: './images/directory/978b9e4cb61c611aaaf58664fae133c5_tn.png',
            name: 'Thiết bị điện tử',
        },{
            imageSrc: './images/directory/24b194a695ea59d384768b7b471d563f_tn.png',
            name: 'Nhà cửa & Đời sông',
        },], [{
            imageSrc: './images/directory/c3f3edfaa9f6dafc4825b77d8449999d_tn.png',
            name: 'Máy tính & Laptop',
        },{
            imageSrc: './images/directory/c765998fda99b2be9eb6e348df29af28_tn.png',
            name: 'Sắc đẹp',
        },], [{
            imageSrc: './images/directory/ec14dd4fc238e676e43be2a911414d4d_tn.png',
            name: 'Máy ảnh & Máy quay phim',
        },{
            imageSrc: './images/directory/bf87b50b463f646bb7fb8a1a606d9ed2_tn.png',
            name: 'Sức Khỏe',
        },], [{
            imageSrc: './images/directory/86c294aae72ca1db5f541790f7796260_tn.png',
            name: 'Đồng hồ',
        },{
            imageSrc: './images/directory/48630b7c76a7b62bc070c9e227097847_tn.png',
            name: 'Giày dép Nữ',
        },], [{
            imageSrc: './images/directory/74ca517e1fa74dc4d974e5d03c3139de_tn.png',
            name: 'Giầy dép Nam',
        },{
            imageSrc: './images/directory/fa6ada2555e8e51f369718bbc92ccc52_tn.png',
            name: 'Túi ví Nữ',
        },], [{
            imageSrc: './images/directory/7abfbfee3c4844652b4a8245e473d857_tn.png',
            name: 'Thiết bị gia dụng',
        },{
            imageSrc: './images/directory/8e71245b9659ea72c1b4e737be5cf42e_tn.png',
            name: 'Phụ kiện & Trang sức Nữ',
        },], [{
            imageSrc: './images/directory/6cb7e633f8b63757463b676bd19a50e4_tn.png',
            name: 'Thể thao & Du lịch',
        },{
            imageSrc: './images/directory/c432168ee788f903f1ea024487f2c889_tn.png',
            name: 'Bách hóa Online',
        },], [{
            imageSrc: './images/directory/3fb459e3449905545701b418e8220334_tn.png',
            name: 'Ôtô & Xe máy, Xe đạp',
        },{
            imageSrc: './images/directory/36013311815c55d303b0e6c62d6a8139_tn.png',
            name: 'Nhà sách Online',
        },], [{
            imageSrc: './images/directory/18fd9d878ad946db2f1bf4e33760c86f_tn.png',
            name: 'Balo & Túi, ví Nam',
        },{
            imageSrc: './images/directory/4540f87aa3cbe99db739f9e8dd2cdaf0_tn.png',
            name: 'Thời trang Trẻ em',
        },],  [{
            imageSrc: './images/directory/ce8f8abc726cafff671d0e5311caa684_tn.png',
            name: 'Đồ chơi',
        },{
            imageSrc: './images/directory/cd8e0d2e6c14c4904058ae20821d0763_tn.png',
            name: 'Giặt giũi , chăm sóc nhà cửa',
        },],  [{
            imageSrc: './images/directory/cdf21b1bf4bfff257efe29054ecea1ec_tn.png',
            name: 'Chăm sóc Thú cưng',
        },{
            imageSrc: './images/directory/b0f78c3136d2d78d49af71dd1c3f38c1_tn.png',
            name: 'Voucher & Dịch vụ',
        },], ]
        
        this.flashSaleData = [{
            imageSrc: './images/flash-sale/96b8f944fc824a559a63270197c8fb26_tn.png',
            price: '249.000',
            process: 55,
            selled: 22,
        },{
            imageSrc: './images/flash-sale/f8725bfdae5d96aca87972f119ed244e_tn.png',
            price: '115.000',
            process: 20,
            selled: 11,
        },{
            imageSrc: './images/flash-sale/fe56769aefa49a342686021495802f04_tn.jpg',
            price: '559.000',
            process: 10,
            selled: 5,
        },{
            imageSrc: './images/flash-sale/0d650616ef5c994ba5b571b0a6645a75_tn.jpg',
            price: '625.000',
            process: 80,
            selled: 120,
        },{
            imageSrc: './images/flash-sale/3d094110b8e93bd5a17bf6b9660de9a4_tn.png',
            price: '210.000',
            process: 90,
            selled: 226,
        },{
            imageSrc: './images/flash-sale/5d4456042ddb88f20e402eb1e9a28278_tn.png',
            price: '139.000',
            process: 5,
            selled: 2,
        },{
            imageSrc: './images/flash-sale/96b8f944fc824a559a63270197c8fb26_tn.png',
            price: '249.000',
            process: 55,
            selled: 22,
        },{
            imageSrc: './images/flash-sale/f8725bfdae5d96aca87972f119ed244e_tn.png',
            price: '115.000',
            process: 20,
            selled: 11,
        },{
            imageSrc: './images/flash-sale/fe56769aefa49a342686021495802f04_tn.jpg',
            price: '559.000',
            process: 10,
            selled: 5,
        },{
            imageSrc: './images/flash-sale/0d650616ef5c994ba5b571b0a6645a75_tn.jpg',
            price: '625.000',
            process: 80,
            selled: 120,
        },{
            imageSrc: './images/flash-sale/3d094110b8e93bd5a17bf6b9660de9a4_tn.png',
            price: '210.000',
            process: 90,
            selled: 226,
        },{
            imageSrc: './images/flash-sale/5d4456042ddb88f20e402eb1e9a28278_tn.png',
            price: '139.000',
            process: 5,
            selled: 2,
        },{
            imageSrc: './images/flash-sale/96b8f944fc824a559a63270197c8fb26_tn.png',
            price: '249.000',
            process: 55,
            selled: 22,
        },{
            imageSrc: './images/flash-sale/f8725bfdae5d96aca87972f119ed244e_tn.png',
            price: '115.000',
            process: 20,
            selled: 11,
        },{
            imageSrc: './images/flash-sale/fe56769aefa49a342686021495802f04_tn.jpg',
            price: '559.000',
            process: 10,
            selled: 5,
        },{
            imageSrc: './images/flash-sale/0d650616ef5c994ba5b571b0a6645a75_tn.jpg',
            price: '625.000',
            process: 80,
            selled: 120,
        },{
            imageSrc: './images/flash-sale/3d094110b8e93bd5a17bf6b9660de9a4_tn.png',
            price: '210.000',
            process: 90,
            selled: 226,
        },{
            imageSrc: './images/flash-sale/5d4456042ddb88f20e402eb1e9a28278_tn.png',
            price: '139.000',
            process: 5,
            selled: 2,
        },];

        this.mallDirectoryData = [{
            imageSrc: './images/mall/35ca32eec1092349c69c358afe63a66d_xhdpi.png',
            description: 'Mua là có quà',
        },{
            imageSrc: './images/mall/c106fc3d8353f04ae19374860bcc9824_xhdpi.png',
            description: 'Sale xuân cực chất',
        },{
            imageSrc: './images/mall/644c7e9312abdf78a3ce145955dcab0d_xhdpi.png',
            description: 'Siêu deal Vivo',
        },{
            imageSrc: './images/mall/1baeb539eb985312868b2117287c3e3e_xhdpi.png',
            description: 'Phụ kiện nửa giá',
        },{
            imageSrc: './images/mall/49c78ceb76f332efb94ca2f8dbb6fa38_xhdpi.png',
            description: 'Sale chạm đỉnh',
        },{
            imageSrc: './images/mall/c4667bd62018422f2e8b681ba93d97bb_xhdpi.png',
            description: 'Sale cùng Anker',
        },{
            imageSrc: './images/mall/afa79df0b9180752fdb943d1bff44926_xhdpi.png',
            description: 'Lễ hội Xiaomi',
        },{
            imageSrc: './images/mall/bf65be35afcfbdd766956c188a9c315f_xhdpi.png',
            description: 'Đỉnh cao công nghệ',
        },];

        this.searchTrendingData = [{
            imageSrc: './images/search-trending/159f76f5cb15bf8237048feabacfd572.jpg',
            name: 'Chuột không dây',
            total: 17,
        },{
            imageSrc: './images/search-trending/782257a56b4685aeabf47fc6b6c44221.jpg',
            name: 'Sạc dự phòng',
            total: 120,
        },{
            imageSrc: './images/search-trending/e418a1847d6e48dc5a7c3df9f6d48068.jpg',
            name: 'Bàn phím cơ',
            total: 55,
        },{
            imageSrc: './images/search-trending/c54773012fd728f974fd0fd5cab25aa0.jpg',
            name: 'Sạc dự phòng',
            total: 228,
        },{
            imageSrc: './images/search-trending/302f014b1c4262c751c880a6359de127.jpg',
            name: 'Tai nghe chống ồn',
            total: 420,
        },];

        this.searchTopData = [{
            imageSrc: './images/search-top/be42a4c5ac0ee524780c93ada9cbfc10_tn.jpg',
            name: 'Chuột không dây chơi game',
            selledPerMonth: 7,
        },{
            imageSrc: './images/search-top/5c659a8ea33f6094c26066b1995b21d0_tn.jpg',
            name: 'Chuột không dây',
            selledPerMonth: 23,
        },{
            imageSrc: './images/search-top/1c23ccb76031614584cbdd977e31bd7a_tn.jpg',
            name: 'ốp lưng iphone',
            selledPerMonth: 167,
        },{
            imageSrc: './images/search-top/8824e9807942671de4dde9c65c716579_tn.jpg',
            name: 'bông tẩy trang 3 lớp',
            selledPerMonth: 112,
        },{
            imageSrc: './images/search-top/e2554cef6590565127bca9f0322945be_tn.jpg',
            name: 'quần lót nữ cotton',
            selledPerMonth: 45,
        },{
            imageSrc: './images/search-top/46f4a1c42ce6c897c179817f956bea8f_tn.jpg',
            name: 'quần ống rộng nữ',
            selledPerMonth: 88,
        },{
            imageSrc: './images/search-top/fe539311a61b11fc3ebde5b4685d4028_tn.jpg',
            name: 'Kẹp Tóc Càng Cua Đơn Giản Cho Nữ',
            selledPerMonth: 7,
        },{
            imageSrc: './images/search-top/18d5c5e9d7c3563a35c954c2c854988c_tn.jpg',
            name: 'Bút Kẻ Mắt Chống Nước',
            selledPerMonth: 56,
        },{
            imageSrc: './images/search-top/6f4fa3d76aa02512a125724ef593d70c_tn.jpg',
            name: 'Bộ Chăn Ga Gối Cotton',
            selledPerMonth: 67,
        },{
            imageSrc: './images/search-top/569f5566d9c55f4b3fa34d70e0d5acc3_tn.jpg',
            name: `Nước Tẩy Trang L'Oreal Paris 3 In 1`,
            selledPerMonth: 43,
        },{
            imageSrc: './images/search-top/e75ede508e8ef1468768a98f1541ba4b_tn.jpg',
            name: 'Tai Nghe Nhét Tai',
            selledPerMonth: 29,
        },{
            imageSrc: './images/search-top/f33e59022b194e24be0f5e695444a4ed_tn.jpg',
            name: 'Áo Sweater',
            selledPerMonth: 76,
        },{
            imageSrc: './images/search-top/ce3aedb12a4bdd13b7ebb1988b171eef_tn.jpg',
            name: 'Bút Mực Gel',
            selledPerMonth: 46,
        },{
            imageSrc: './images/search-top/88caf78233a0b901155210a61cf19751_tn.jpg',
            name: 'Dây Sạc Iphone',
            selledPerMonth: 22,
        },{
            imageSrc: './images/search-top/db3fb9563d3779ed850b7b735aba8c09_tn.jpg',
            name: 'Quần Lót Nam Co Dãn',
            selledPerMonth: 84,
        },{
            imageSrc: './images/search-top/40e1e90a778449ec9504e5500fdc83d2_tn.jpg',
            name: 'Áo Hoodie',
            selledPerMonth: 48,
        },{
            imageSrc: './images/search-top/9b50956e409cb753747748a3bbad49a9_tn.jpg',
            name: 'Áo Khoác Bomber Unisex',
            selledPerMonth: 56,
        },{
            imageSrc: './images/search-top/99348069fb99f1dccbfe596a8050f4c4_tn.jpg',
            name: 'Khẩu Trang Kháng Khuẩn',
            selledPerMonth: 68,
        },];

        this.suggestionsData = [{
            imageSrc: './images/suggestions/4f295be74920f7e205ee0ca3677647e4_tn.jpg',
            name: 'Quần lót váy, quần ren ngủ mùa hè D2',
            selled: '8',
            sale: 15,
            price: '29.900',
        },{
            imageSrc: './images/suggestions/d2a01fe2c300b11a414fb0b3209199c5_tn.jpg',
            name: '[bG26]Quần baggy jean lưng phối thun nút cài ống rộng dài 100cm',
            selled: '2',
            sale: 25,
            price: '144.900',
        },{
            imageSrc: './images/suggestions/50bbac749f225c90ac598cbc51d4c330_tn.jpg',
            name: 'Tai nghe chụp tai headphone gaming LexTech Inphic có Mic chuyên game LED RGB tương thích PC Laptop Điện thoại TG2',
            selled: '2.5',
            sale: 20,
            price: '249.900',
        },{
            imageSrc: './images/suggestions/131d9a05f43d1be23c80727c4111cb21_tn.jpg',
            name: 'Tai Nghe Gaming Headphone HAVIT H2232D, Driver 50, Đèn RGB, Mic Khử Ồn, Đa Tương Thích - Chính Hãng BH 12 Tháng Dizigear',
            selled: '3.1',
            sale: 30,
            price: '9.900',
        },{
            imageSrc: './images/suggestions/33409bb9fb6f59350801ecf916875aab_tn.jpg',
            name: '[Mã 11LSSALE giảm 100% đơn 50k]  Chảo chống dính size 18cm sâu lòng hấp thụ nhiệt nhanh thích hợp với mọi loại bếp',
            selled: '1.4',
            sale: 50,
            price: '199.000',
        },{
            imageSrc: './images/suggestions/f3d55363372ebe45cbfefcc4e4bae68c_tn.jpg',
            name: '[siêu rẻ] NỆM TRẢI SÀN, ĐỆM, TOPPER HÀNG XUẤT NHẬT 1Mx2M, 1M4x2M, 1M6x2M',
            selled: '3.4',
            sale: 10,
            price: '299.000',
        },{
            imageSrc: './images/suggestions/cff58da4da84d23f964046f3e8228fd5_tn.jpg',
            name: ' [HÀNG QCCC] - Váy ulzzang tiểu thư tay dài vintage - M26 - jannahouse',
            selled: '1',
            sale: 5,
            price: '150.000',
        },{
            imageSrc: './images/suggestions/cd90519363566ce58b6100f29e3ab076_tn.jpg',
            name: 'Tai nghe mèo có micro đàm thoại, Tai nghe bluetooth chơi game cao cấp, Headphone tai thỏ cute có đèn led, livestream',
            selled: '3.4',
            sale: 20,
            price: '154.000',
        },{
            imageSrc: './images/suggestions/d2fede81e676d42509c93f2cdc25e0c4_tn.jpg',
            name: 'Giày 𝐕𝐀𝐍𝐒 Caro Slip-on lười nam nữ [ Full box bill ] Giày sneaker lười hot nhất 2021',
            selled: '2.1',
            sale: 25,
            price: '79.000',
        },{
            imageSrc: './images/suggestions/5611cd9e27232e90f1998f657c599ce4_tn.jpg',
            name: 'Tai nghe gaming có mic Beauty - Tai nghe chùm tai có dây - Hàng Chính Hãng - Bảo hành 6 tháng',
            selled: '4',
            sale: 30,
            price: '69.000',
        },{
            imageSrc: './images/suggestions/c57c9abf9628d2aff70178e7704e2b36_tn.jpg',
            name: 'Tai nghe gaming chụp tai có mic có đèn LED cho máy tính, điện thoại (Bảo hành 6 tháng)',
            selled: '4.2',
            sale: 40,
            price: '129.000',
        },{
            imageSrc: './images/suggestions/5ff3982f8572b703a72b767f496f9aac_tn.jpg',
            name: 'Đế kê tay chống mỏi - giá đỡ tay chống mỏi khi dùng máy tính - Xoay 180 độ tiện lợi',
            selled: '8.6',
            sale: 5,
            price: '180.000',
        },];
    },

    renderFeature: function(data, container) {
        const html = data.map(({ imageSrc, name }) =>(`
            <li class="feature-item">
                <a href="#!" class="feature-link">
                    <div class="feature-image">
                        <img src="${imageSrc}" alt="">
                    </div>
                    <span class="feature-name">${name}</span>
                </a>
            </li>
        `)).join('');
        container.innerHTML = html;
    },

    renderDirectory: function(data, container) {
        const html = data.map(column =>(`
            <li class="directory-item">
                ${column.map(({imageSrc, name}) => (`
                    <a href="#!" class="directory-link">
                        <div class="directory-image">
                            <img src="${imageSrc}" alt="">
                        </div>
                        <span class="directory-name">${name}</span>
                    </a>
                `)).join('')}
            </li>
        `)).join('');
        container.innerHTML = html;
    },

    renderSuperSale: function(data, container) {
        const html = data.map(({ title, products }) =>(`
            <div class="super-sale-content">
                <div class="super-sale-content-head">
                    <p class="super-sale-title">${title}</p>
                    <a href="#!" class="super-sale-more">
                        Xem thêm
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
                <ul class="super-sale-list">
                    ${ products.map(({ imageSrc, price, description }) => (`
                        <li class="super-sale-item">
                            <a href="#!" class="super-sale-link">
                                <div class="super-sale-image">
                                    <img src="${imageSrc}" alt="">
                                </div>
                                <span class="super-sale-price">
                                    ${ price ? `<sup>đ</sup> ${price}` : description }
                                </span>
                            </a>
                        </li>
                    `)).join('') }
                </ul>
            </div>
        `)).join('');
        container.innerHTML = html;
    },

    renderFlashSale: function(data, container) {
        data.sort(() => 0.5 - Math.random());
        const html = data.map(({ imageSrc, price, selled, process }) =>(`
            <li class="flash-sale-item">
                <a href="#!" class="flash-sale-link">
                    <span class="sale-logo">
                        <span class="sale-percent">10%</span>
                        <span class="sale-text">giảm</span>
                    </span>
                    <div class="flash-sale-image">
                        <img src="${imageSrc}" alt="">
                    </div>
                    <p class="flash-sale-price">
                        <sup>đ</sup>
                        ${price}
                    </p>
                    <div class="flash-sale-process">
                        <span>đã bán ${selled}</span>
                        <div class="process-bar" style="--process: ${process}%"></div>
                    </div>
                </a>
            </li>
        `)).join('');
        container.innerHTML = html;
    },

    renderMallDirectory: function(data, container) {
        const html = data.map(({ imageSrc, description }) =>(`
            <li class="mall-directory-item">
                <a href="#!" class="mall-directory-link">
                    <div class="mall-directory-image">
                        <img src="${imageSrc}" alt="">
                    </div>
                    <p class="mall-directory-description">
                        ${description}
                    </p>
                </a>
            </li>
        `)).join('');
        container.innerHTML = html;
    },

    renderSearchTrending: function(data, container) {
        const html = data.map(({ imageSrc, name, total }) =>(`
            <li class="search-trending-item">
                <a href="#!" class="search-trending-link">
                    <div class="search-trending-content">
                        <p class="search-trending-name">${name}</p>
                        <p class="search-trending-description">${total}k+ sản phẩm</p>
                    </div>
                    <div class="search-trending-image">
                        <img src="${imageSrc}" alt="">
                    </div>
                </a>
            </li>
        `)).join('');
        container.innerHTML = html;
    },

    renderTopTrending: function(data, container) {
        data.sort(() => 0.5 - Math.random());
        const html = data.map(({ imageSrc, name, selledPerMonth }) =>(`
            <li class="search-top-item">
                <a href="#!" class="search-top-link">
                    <div class="search-top-image">
                        <img class="search-top-logo" src="./images/06720e49514cbd94b7552496b4de454a.png" alt="">
                        <img src="${imageSrc}" alt="">
                        <p class="search-top-description">Bán ${selledPerMonth}k+ / tháng</p>
                    </div>
                    <p class="search-top-name">${name}</p>
                </a>
            </li>
        `)).join('');
        container.innerHTML = html;
    },

    renderSuggestions: function(data, container) {
        data.sort(() => 0.5 - Math.random());
        const html = data.map(({ imageSrc, name, selled, price, sale }) =>(`
            <a href="#!" class="product">
                <span class="sale-logo">
                    <span class="sale-percent">${sale}%</span>
                    <span class="sale-text">giảm</span>
                </span>
                <div class="product-image">
                    <img src="${imageSrc}" alt="">
                </div>
                <div class="product-info">
                    <p class="product-name">${name}</p>
                    <div class="product-footer">
                        <span class="product-price">
                            <sup>đ</sup>
                            ${price}
                        </span>
                        <span class="product-selled">Đã bán ${selled}k</span>
                    </div>
                </div>
                <div href="#!" class="product-search">
                    Tìm sản phẩm tương tự
                </div>
            </a>
        `)).join('');
        container.innerHTML = html;
    },

    renderBanner: function (data, container) {
        const html = data.map(({imageSrc}) => (`
            <a href="#!" style="display: block;">
                <img src="${imageSrc}" alt="">
            </a>
        `)).join('');
        container.innerHTML = html;
    },

    start: function() {
        this.init();
        this.renderFeature(this.featureData, featureList);
        this.renderDirectory(this.directoryData, directoryList);
        this.renderSuperSale(this.superSaleData, superSaleList);
        this.renderFlashSale(this.flashSaleData, flashSaleList);
        this.renderMallDirectory(this.mallDirectoryData, mallDirectoryList);
        this.renderSearchTrending(this.searchTrendingData, searchTrendingList);
        this.renderTopTrending(this.searchTopData, searchTopList);
        this.renderSuggestions(this.suggestionsData, suggestionsList);
        this.renderBanner(this.bannerSlider1Data, bannerSlider1List);
        this.renderBanner(this.bannerSlider2Data, bannerSlider2List);
    },
}

render.start();