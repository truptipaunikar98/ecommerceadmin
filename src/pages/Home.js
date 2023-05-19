import React from "react";
import Banner from "../components/Banner";
import SearchSocialBar from "../components/SearchSocialBar";

function Home() {
  const bannerHome=[
    "https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg",
    "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/294/859/original/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg",
  ];
   
  const bannerAbout=[
    "https://static.vecteezy.com/system/resources/thumbnails/006/828/785/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/294/859/original/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg",
  ];

  const bannerContact=[
    "https://thumbs.dreamstime.com/b/three-wooden-ball-contact-icon-against-blue-background-arranging-row-over-reflecting-floor-211477031.jpg",
    "https://maduraimart.in/images/contact-banner.jpg",
    "https://adhope.org.za/africa-diaspora-hope/wp-content/uploads/2015/10/contact-adhope-1.jpg",
  ];

  const bannerServices=[
    "https://loveinstore.com/assets/images/marketing-service-banner.jpg",
    "https://growkal.com/wp-content/uploads/2021/06/e-commerce-development-services.jpg",
    "https://easybuyng.com/wp-content/uploads/2018/05/ecommerce-banner.jpg"
  ];

  const bannerMens=[
    "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37041227.jpg",
    "https://i0.wp.com/3rdrailclothing.co.uk/wp-content/uploads/2016/08/AW16-Menswear-banner.png?fit=1500%2C720&ssl=1",
    "https://savillemenswearcork.files.wordpress.com/2015/03/mens-layering-autumnwinter-2015-banner.jpg",
  ];

  const bannerWomens=[
    "https://marketplace.canva.com/EAFGEeS4NT4/1/0/1600w/canva-pink-and-blue-modern-fashion-banner-scbyLcbiT_s.jpg",
    "https://i.pinimg.com/originals/75/1d/2b/751d2b30f041d6a7ec336dbdef797311.jpg",
    "https://thumbs.dreamstime.com/b/banner-half-face-brunette-profile-banner-half-face-brunette-profile-illustration-175321336.jpg",
  ];

 const bannerKids=[
  "https://manage.babycouture.in/public/banners/banner_1662555805.png",
    "https://media.centrepointstores.com/i/centrepoint/Web_en_HP_Qatar_SpecialOffer_Girls_28apr23?$banimg-d-rb$&$quality-standard$&fmt=auto",
    "https://apparelgroupglobal.com/en/wp-content/uploads/2022/08/kids-banner.jpg",
 ];

 const bannerFootwear=[
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2bbcfa99737217.5ef9be3dbb9a9.jpg",
  "https://www.shutterstock.com/image-vector/running-sport-shoes-banner-horizontal-260nw-701407561.jpg",
  "https://cdn.vectorstock.com/i/preview-1x/56/07/shoe-sell-social-media-banner-footwear-vector-45805607.jpg",
 ];

 const bannerEssential=[
  "https://as2.ftcdn.net/v2/jpg/02/28/52/25/1000_F_228522505_9JwtR186L8fUQFqyP7NbUYcp0XZSo1ao.jpg",
  "https://www.agessentialoils.com/wp-content/uploads/2019/09/Essential-oil-banner.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhAcpwICjY_b4uqBmLHb0jNV2i8tXiNFiUA&usqp=CAU"
 ];

 const bannerTrending=[
  "https://images.template.net/108411/fashion-store-banner-template-vub7l.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1dae9f63149899.5aa7a8c74c345.png",
    "https://www.fashiontrends.style/wp-content/uploads/2021/07/FashionTrends-Why-is-sustainable-fashion-so-important-Banner.png"
 ]
  return (
    <>
      <h2 className="mt-4 mx-4">Banner</h2>
      <div className="row generalShortCut px-4 ">
        <div className="col-3 mt-4 ">
         <Banner bannerImg={bannerHome} />
         <p className="text-center">Home</p>
        </div>
        <div className="col-3 mt-4">
         <Banner bannerImg={bannerAbout}/>
         <p className="text-center">About</p>
        </div>
        <div className="col-3 mt-4">
         <Banner bannerImg={bannerContact} />
         <p className="text-center">Contact</p>
        </div>
        <div className="col-3 mt-4">
        <Banner bannerImg={bannerServices} />
         <p className="text-center">Services</p>
        </div>
        <div className="col-3 mt-3">
        <Banner bannerImg={bannerMens} />
         <p className="text-center">Mens Wear</p>
        </div>
        <div className="col-3 mt-3">
        <Banner bannerImg={bannerWomens} />
         <p className="text-center">Womens Wear</p>
        </div>
        <div className="col-3 mt-3">
         <Banner bannerImg={bannerKids} />
         <p className="text-center">Kids Wear</p>
        </div>
        <div className="col-3 mt-3">
        <Banner bannerImg={bannerFootwear} />
         <p className="text-center">Foot Wear</p>
        </div>
        <div className="col-3 mt-3">
        <Banner bannerImg={bannerEssential} />
         <p className="text-center">Essential</p>
        </div>
        <div className="col-3 mt-3">
        <Banner bannerImg={bannerTrending} />
         <p className="text-center">Trending</p>
        </div>
      </div>
    </>
  );
}

export default Home;
