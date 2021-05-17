// import React from 'react';

import adidas_store from "../images/adidas-store.jpg"
import levis_store from "../images/levis-store.jpg"
import vans_store from "../images/vans-store.jpg"
import offer_01 from "../images/offer-01.png"
import offer_02 from "../images/offer-02.png"


// import levis_banner from "../images/levis-banner.jpg"
import gift_01 from "../images/gift-01.png"
import gift_02 from "../images/gift-02.png"
import gift_03 from "../images/gift-03.png"
import gift_04 from "../images/gift-04.png"
import gift_05 from "../images/gift-05.png"
import videoPoster from "../images/featured-video.jpg"

import product_01 from "../images/product-01.png"
import product_02 from "../images/product-02.png"
import product_03 from "../images/product-03.png"
import product_04 from "../images/product-04.png"
import product_05 from "../images/product-05.png"
import product_06 from "../images/product-06.png"
import product_07 from "../images/product-07.png"
import product_08 from "../images/product-08.png"

// import {
//   // FaFacebookSquare,
//   // FaLinkedin,
//   // FaTwitterSquare,
//   FaRegHeart,
// } from 'react-icons/fa';

export const data = {
  icons: {ham: './images/ham-icon.png', dropDown: './images/dropDown.png', star: './images/star.png', emptyStar: './images/empty-star.png', subscribe: './images/subscribe.png'},
  headerData : {
    logo: './images/nav-logo.png',
    banner: {
      image: './images/hero.png',
      title:'find products and shops near you',
      text: 'enjoy a fairly new experience'
    },
    topSection : [
      {
        id: 1,
        url: '/contact',
        text: 'contact us',
        icon: './images/phone.png',
      },
      {
        id: 2,
        url: '/track',
        text: 'track order',
        icon: './images/cart.png',
      },
      {
        id: 3,
        url: '/find-store',
        text: 'find a store',
        icon: './images/location.png',
      },
    ],
    medSection : [
      {
        id: 1,
        url: '/cart',
        text: 'cart',
        icon: './images/cart-nav.png',
      },
      {
        id: 2,
        url: '/wishlist',
        text: 'wishlist',
        icon: './images/wishlist.png',
      },
      {
        id: 3,
        url: '/login',
        text: 'login',
        icon: './images/user.png',
      },
    ]
  },


  featuredVideo : {
    id: 1,
    url: 'https://player.vimeo.com/external/339135642.sd.mp4?s=b84b687d20122b0d48dca8255dbdd1b1f3df3094&profile_id=139&oauth2_token_id=57447761',
    posterImage: videoPoster,
  },


  footer : {
    logo: './images/footer-logo.png',
    first_text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    second_text: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla.",
    third_text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis",
    footerLinks: [
      {
        id: 1,
        text: 'about us',
        url: '/about-us',
      },
      {
        id: 2,
        text: 'contact us',
        url: '/contact-us',
      },
      {
        id: 3,
        text: 'track order',
        url: '/track-order',
      },
      {
        id: 4,
        text: 'Terms & Conditions',
        url: '/terms',
      },
      {
        id: 5,
        text: 'Privacy Policy',
        url: '/privacy',
      },
      {
        id: 6,
        text: 'sell with us',
        url: '/sell-with-us',
      },
      {
        id: 7,
        text: 'Shipping And Returns',
        url: '/shipping',
      }
    ],
    socials: [
      {
        id: 1,
        name: 'facebook',
        icon: './images/fb.png',
        url: '/facebook'
      },
      {
        id: 2,
        name: 'linkedin',
        icon: './images/linkedin.png',
        url: '/linkedin'
      },
      {
        id: 3,
        name: 'instagram',
        icon: './images/insta.png',
        url: '/instagram'
      },
      {
        id: 4,
        name: 'twitter',
        icon: './images/twitter.png',
        url: '/twitter'
      }
    ],
    info: {
      rights: '© 2021 yeshtery, all rights reserved.',
      imgs: ['./images/cash.png', './images/visa.png', './images/masterCard.png'],
      poweredBy: {
        logo: './images/nasnav.png',
      },
    },
  },


  offers : [
    {
      id: 1,
      text: "valentine's day offers! buy two get one free",
      url: '/',
    },
    {
      id: 2,
      text: "valentine's day offers! buy two get one free",
      url: '/',
    }
  ],


  navLinks : [
    {
      id: 1,
      url: '/new-arrivals',
      text: 'new arrivals',
      component: 'NewArrivals',
      active: false,
    },
    {
      id: 2,
      url: '/best-sellers',
      text: 'best sellers',
      component: 'BestSellers',
      active: false,
    },
    {
      id: 3,
      url: '/fashion',
      text: 'fashion',
      component: 'Fashion',
      active: false,
    },
    {
      id: 4,
      url: '/electronics',
      text: 'electronics',
      component: 'Electronics',
      active: false,
    },
    {
      id: 5,
      url: '/eyewear',
      text: 'eyewear',
      component: 'Eyewear',
      active: false,
    },
    {
      id: 6,
      url: '/watches',
      text: 'watches',
      component: 'Watches',
      active: false,
    },
    {
      id: 7,
      url: '/books',
      text: 'books',
      component: 'Books',
      active: false,
    },
    {
      id: 8,
      url: '/accessories',
      text: 'accessories',
      component: 'Accessories',
      active: false,
    },
    {
      id: 9,
      url: '/offers',
      text: 'offers',
      component: 'Offers',
      active: true,
    },
  ],


  categories : [
    {
      id: 1,
      name: 'fashion',
      text: 'keep up with the latest fashion trends', 
      img: './images/fashion.png',
      offers: [
        {
          id: 1,
          title: '2021 new year discounts',
          ads_img: offer_01,
          description: 'up to 50% sale on selected items during february.',
        },
        {
          id: 2,
          title: 'girls fashion discounts',
          ads_img: offer_02,
          description: 'up to 50% sale on selected items during february.',
        },
      ],
      brands: [
        {id: 1, title: "levi's", logo: './images/levis-logo.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 2, title: "adidas", logo: './images/adidas-logo.png' ,banner: './images/levis-banner.png', slogan: "Famous adidas products coming straight from the UK"},
        {id: 3, title: "courir", logo: './images/courir.png' ,banner: "./images/levis-banner.png", slogan: "Famous courir products coming straight from the UK"},
        {id: 4, title: "geox", logo: './images/geox.png' ,banner: "../images/levis-banner.png", slogan: "Famous Geox products coming straight from the UK"},
        {id: 5, title: "go sport", logo: './images/goSport.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 6, title: "vans", logo: './images/vans.png' ,banner: "./images/levis-banner.png", slogan: "Famous vans products coming straight from the UK"},
        {id: 7, title: "timberland", logo: './images/timberland.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 8, title: "rockport", logo: './images/rockport.png' ,banner: "./images/levis-banner.png", slogan: "Famous rockport products coming straight from the UK"},
      ],
      stores: [
        {id: 1, title: "adidas store", logo: './images/adidas.png' ,bg: adidas_store, branchs: ['UK', 'USA']},
        {id: 2, title: "levi's store", logo: './images/levis-logo.png' ,bg: levis_store, branchs: ['UK', 'USA']},
        {id: 3, title: "vans store", logo: './images/vans.png' ,bg: vans_store, branchs: ['UK', 'USA']},
      ],
      gifts: [
        {
          id: 1,
          offer: 'below 1,000',
          symbol: 'LE',
          image: gift_01,
        },
        {
          id: 2,
          offer: 'below 750',
          symbol: 'LE',
          image: gift_02,
        },
        {
          id: 3,
          offer: 'below 500',
          symbol: 'LE',
          image: gift_03,
        },
        {
          id: 4,
          offer: 'below 250',
          symbol: 'LE',
          image: gift_04,
        },
        {
          id: 5,
          offer: 'below 100',
          symbol: 'LE',
          image: gift_05,
        }
      ]
    },
    {
      id: 2,
      name: 'books',
      text: 'live another life in books.', 
      img: './images/books.png',
      offers: [
        {
          id: 1,
          title: '2021 new year discounts',
          ads_img: offer_01,
          description: 'up to 50% sale on selected items during february.',
        },
        {
          id: 2,
          title: 'girls books discounts',
          ads_img: offer_02,
          description: 'up to 50% sale on selected items during february.',
        },
      ],
      brands: [
        {id: 1, title: "levi's", logo: './images/levis-logo.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 2, title: "adidas", logo: './images/adidas-logo.png' ,banner: './images/levis-banner.png', slogan: "Famous adidas products coming straight from the UK"},
        {id: 3, title: "courir", logo: './images/courir.png' ,banner: "./images/levis-banner.png", slogan: "Famous courir products coming straight from the UK"},
        {id: 4, title: "geox", logo: './images/geox.png' ,banner: "../images/levis-banner.png", slogan: "Famous Geox products coming straight from the UK"},
        {id: 5, title: "go sport", logo: './images/goSport.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 6, title: "vans", logo: './images/vans.png' ,banner: "./images/levis-banner.png", slogan: "Famous vans products coming straight from the UK"},
        {id: 7, title: "timberland", logo: './images/timberland.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 8, title: "rockport", logo: './images/rockport.png' ,banner: "./images/levis-banner.png", slogan: "Famous rockport products coming straight from the UK"},
      ],
      stores: [
        {id: 1, title: "adidas store", logo: './images/adidas.png' ,bg: adidas_store, branchs: ['UK', 'USA']},
        {id: 2, title: "levi's store", logo: './images/levis-logo.png' ,bg: levis_store, branchs: ['UK', 'USA']},
        {id: 3, title: "vans store", logo: './images/vans.png' ,bg: vans_store, branchs: ['UK', 'USA']},
      ],
      gifts: [
        {
          id: 1,
          offer: 'below 1,000',
          symbol: 'LE',
          image: gift_01,
        },
        {
          id: 2,
          offer: 'below 750',
          symbol: 'LE',
          image: gift_02,
        },
        {
          id: 3,
          offer: 'below 500',
          symbol: 'LE',
          image: gift_03,
        },
        {
          id: 4,
          offer: 'below 250',
          symbol: 'LE',
          image: gift_04,
        },
        {
          id: 5,
          offer: 'below 100',
          symbol: 'LE',
          image: gift_05,
        }
      ]
    },
    {
      id: 3,
      name: 'electronics',
      text: 'find latest electronics devices.',
      img: './images/electronics.png',
      offers: [
        {
          id: 1,
          title: '2021 new year discounts',
          ads_img: offer_01,
          description: 'up to 50% sale on selected items during february.',
        },
        {
          id: 2,
          title: 'girls electronics discounts',
          ads_img: offer_02,
          description: 'up to 50% sale on selected items during february.',
        },
      ],
      brands: [
        {id: 1, title: "levi's", logo: './images/levis-logo.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 2, title: "adidas", logo: './images/adidas-logo.png' ,banner: './images/levis-banner.png', slogan: "Famous adidas products coming straight from the UK"},
        {id: 3, title: "courir", logo: './images/courir.png' ,banner: "./images/levis-banner.png", slogan: "Famous courir products coming straight from the UK"},
        {id: 4, title: "geox", logo: './images/geox.png' ,banner: "../images/levis-banner.png", slogan: "Famous Geox products coming straight from the UK"},
        {id: 5, title: "go sport", logo: './images/goSport.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 6, title: "vans", logo: './images/vans.png' ,banner: "./images/levis-banner.png", slogan: "Famous vans products coming straight from the UK"},
        {id: 7, title: "timberland", logo: './images/timberland.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 8, title: "rockport", logo: './images/rockport.png' ,banner: "./images/levis-banner.png", slogan: "Famous rockport products coming straight from the UK"},
      ],
      stores: [
        {id: 1, title: "adidas store", logo: './images/adidas.png' ,bg: adidas_store, branchs: ['UK', 'USA']},
        {id: 2, title: "levi's store", logo: './images/levis-logo.png' ,bg: levis_store, branchs: ['UK', 'USA']},
        {id: 3, title: "vans store", logo: './images/vans.png' ,bg: vans_store, branchs: ['UK', 'USA']},
      ],
      gifts: [
        {
          id: 1,
          offer: 'below 1,000',
          symbol: 'LE',
          image: gift_01,
        },
        {
          id: 2,
          offer: 'below 750',
          symbol: 'LE',
          image: gift_03,
        },
        {
          id: 3,
          offer: 'below 500',
          symbol: 'LE',
          image: gift_04,
        },
        {
          id: 4,
          offer: 'below 250',
          symbol: 'LE',
          image: gift_02,
        },
        {
          id: 5,
          offer: 'below 100',
          symbol: 'LE',
          image: gift_05,
        }
      ]
    },
    {
      id: 4,
      name: 'cosmetics',
      text: 'beautiful. colorful. you.',
      img: './images/cosmetics.png',
      offers: [
        {
          id: 1,
          title: '2021 new year discounts',
          ads_img: offer_01,
          description: 'up to 50% sale on selected items during february.',
        },
        {
          id: 2,
          title: 'girls fashion discounts',
          ads_img: offer_02,
          description: 'up to 50% sale on selected items during february.',
        },
      ],
      brands: [
        {id: 1, title: "levi's", logo: './images/levis-logo.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 2, title: "adidas", logo: './images/adidas-logo.png' ,banner: './images/levis-banner.png', slogan: "Famous adidas products coming straight from the UK"},
        {id: 3, title: "courir", logo: './images/courir.png' ,banner: "./images/levis-banner.png", slogan: "Famous courir products coming straight from the UK"},
        {id: 4, title: "geox", logo: './images/geox.png' ,banner: "../images/levis-banner.png", slogan: "Famous Geox products coming straight from the UK"},
        {id: 5, title: "go sport", logo: './images/goSport.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 6, title: "vans", logo: './images/vans.png' ,banner: "./images/levis-banner.png", slogan: "Famous vans products coming straight from the UK"},
        {id: 7, title: "timberland", logo: './images/timberland.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 8, title: "rockport", logo: './images/rockport.png' ,banner: "./images/levis-banner.png", slogan: "Famous rockport products coming straight from the UK"},
      ],
      stores: [
        {id: 1, title: "adidas store", logo: './images/adidas.png' ,bg: adidas_store, branchs: ['UK', 'USA']},
        {id: 2, title: "levi's store", logo: './images/levis-logo.png' ,bg: levis_store, branchs: ['UK', 'USA']},
        {id: 3, title: "vans store", logo: './images/vans.png' ,bg: vans_store, branchs: ['UK', 'USA']},
      ],
      gifts: [
        {
          id: 1,
          offer: 'below 1,000',
          symbol: 'LE',
          image: gift_02,
        },
        {
          id: 2,
          offer: 'below 750',
          symbol: 'LE',
          image: gift_05,
        },
        {
          id: 3,
          offer: 'below 500',
          symbol: 'LE',
          image: gift_04,
        },
        {
          id: 4,
          offer: 'below 250',
          symbol: 'LE',
          image: gift_01,
        },
        {
          id: 5,
          offer: 'below 100',
          symbol: 'LE',
          image: gift_03,
        }
      ]
    },
    {
      id: 5,
      name: 'foods',
      text: 'set your table. bon appetit.',
      img: './images/foods.png',
      offers: [
        {
          id: 1,
          title: '2021 new year discounts',
          ads_img: offer_01,
          description: 'up to 50% sale on selected items during february.',
        },
        {
          id: 2,
          title: 'girls fashion discounts',
          ads_img: offer_02,
          description: 'up to 50% sale on selected items during february.',
        },
      ],
      brands: [
        {id: 1, title: "levi's", logo: './images/levis-logo.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 2, title: "adidas", logo: './images/adidas-logo.png' ,banner: './images/levis-banner.png', slogan: "Famous adidas products coming straight from the UK"},
        {id: 3, title: "courir", logo: './images/courir.png' ,banner: "./images/levis-banner.png", slogan: "Famous courir products coming straight from the UK"},
        {id: 4, title: "geox", logo: './images/geox.png' ,banner: "../images/levis-banner.png", slogan: "Famous Geox products coming straight from the UK"},
        {id: 5, title: "go sport", logo: './images/goSport.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 6, title: "vans", logo: './images/vans.png' ,banner: "./images/levis-banner.png", slogan: "Famous vans products coming straight from the UK"},
        {id: 7, title: "timberland", logo: './images/timberland.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 8, title: "rockport", logo: './images/rockport.png' ,banner: "./images/levis-banner.png", slogan: "Famous rockport products coming straight from the UK"},
      ],
      stores: [
        {id: 1, title: "adidas store", logo: './images/adidas.png' ,bg: adidas_store, branchs: ['UK', 'USA']},
        {id: 2, title: "levi's store", logo: './images/levis-logo.png' ,bg: levis_store, branchs: ['UK', 'USA']},
        {id: 3, title: "vans store", logo: './images/vans.png' ,bg: vans_store, branchs: ['UK', 'USA']},
      ],
      gifts: [
        {
          id: 1,
          offer: 'below 1,000',
          symbol: 'LE',
          image: gift_04,
        },
        {
          id: 2,
          offer: 'below 750',
          symbol: 'LE',
          image: gift_01,
        },
        {
          id: 3,
          offer: 'below 500',
          symbol: 'LE',
          image: gift_02,
        },
        {
          id: 4,
          offer: 'below 250',
          symbol: 'LE',
          image: gift_05,
        },
        {
          id: 5,
          offer: 'below 100',
          symbol: 'LE',
          image: gift_03,
        }
      ]
    },
    {
      id: 6,
      name: 'babys',
      text: 'anything for your newborn',
      img: './images/babys.png',
      offers: [
        {
          id: 1,
          title: '2021 new year discounts',
          ads_img: offer_01,
          description: 'up to 50% sale on selected items during february.',
        },
        {
          id: 2,
          title: 'girls fashion discounts',
          ads_img: offer_02,
          description: 'up to 50% sale on selected items during february.',
        },
      ],
      brands: [
        {id: 1, title: "levi's", logo: './images/levis-logo.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 2, title: "adidas", logo: './images/adidas-logo.png' ,banner: './images/levis-banner.png', slogan: "Famous adidas products coming straight from the UK"},
        {id: 3, title: "courir", logo: './images/courir.png' ,banner: "./images/levis-banner.png", slogan: "Famous courir products coming straight from the UK"},
        {id: 4, title: "geox", logo: './images/geox.png' ,banner: "../images/levis-banner.png", slogan: "Famous Geox products coming straight from the UK"},
        {id: 5, title: "go sport", logo: './images/goSport.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 6, title: "vans", logo: './images/vans.png' ,banner: "./images/levis-banner.png", slogan: "Famous vans products coming straight from the UK"},
        {id: 7, title: "timberland", logo: './images/timberland.png' ,banner: "./images/levis-banner.png", slogan: "Famous Levi's products coming straight from the UK"},
        {id: 8, title: "rockport", logo: './images/rockport.png' ,banner: "./images/levis-banner.png", slogan: "Famous rockport products coming straight from the UK"},
      ],
      stores: [
        {id: 1, title: "adidas store", logo: './images/adidas.png' ,bg: adidas_store, branchs: ['UK', 'USA']},
        {id: 2, title: "levi's store", logo: './images/levis-logo.png' ,bg: levis_store, branchs: ['UK', 'USA']},
        {id: 3, title: "vans store", logo: './images/vans.png' ,bg: vans_store, branchs: ['UK', 'USA']},
      ],
      gifts: [
        {
          id: 1,
          offer: 'below 1,000',
          symbol: 'LE',
          image: gift_05,
        },
        {
          id: 2,
          offer: 'below 750',
          symbol: 'LE',
          image: gift_04,
        },
        {
          id: 3,
          offer: 'below 500',
          symbol: 'LE',
          image: gift_03,
        },
        {
          id: 4,
          offer: 'below 250',
          symbol: 'LE',
          image: gift_02,
        },
        {
          id: 5,
          offer: 'below 100',
          symbol: 'LE',
          image: gift_01,
        }
      ]
    },
  ],


  products : [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_01,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_02,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_03,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_04,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_05,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_06,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 7,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_07,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 8,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_08,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 9,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_04,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "geox", img: "./images/geox.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'books', text: 'live anothre life in books', img: './images/books.png'},
      store: {title: "geox", img: "./images/geox.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 10,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_06,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'electronics', text: 'find latest electronic devices', img: './images/electronics.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 11,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_08,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'cosmetics', text: 'beautiful. colorful. you', img: './images/cosmetics.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 12,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_04,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. icorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'foods', text: 'set your table. bon appetit.', img: './images/foods.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 13,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_02,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amuthentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 3,
      pickup: 'genena mall',
    },
    {
      id: 14,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_03,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. rial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 15,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_05,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable xtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 16,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_08,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring blo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 17,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_06,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'fashion', text: 'keep up with the latest fashion trends', img: './images/fashion.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 18,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_04,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'books', text: 'live anothre life in books', img: './images/books.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 19,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_08,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring torial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'books', text: 'live anothre life in books', img: './images/books.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
      id: 20,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      image: product_02,
      price: {symbol: 'LE', value: 9.999},
      brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
      description:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottlaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      category: {title: 'books', text: 'live anothre life in books', img: './images/books.png'},
      store: {title: "levi's", img: "./images/levis-logo.png"},
      rate: 4,
      pickup: 'genena mall',
    },
    {
    id: 21,
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "../images/product-01.png",
    price: { symbol: "LE", value: 9.999},
    brand: {title: "levi's", img: "./images/levis-logo.png", slogan: "Famous Levi's products coming straight from the UK"},
    description:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtapeal church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    category: {title: "babys", text: "anything for your newborn", img: "./images/babys.png"},
    store: {title: "levi's", img: "./images/levis-logo.png"},
    rate: 4,
    pickup: "genena mall"
  },
  ],
}