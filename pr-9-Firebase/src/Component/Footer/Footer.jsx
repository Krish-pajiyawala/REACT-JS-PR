import { Container, Row, Col } from "react-bootstrap";
import {
  RiFacebookBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
import { ImYoutube, ImInstagram } from "react-icons/im";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="new-footer py-5">
      <Container >
        <Row>
          <Col md={3} sm={6} className="mb-4">
            <h6 className="footer-heading">ONLINE SHOPPING</h6>
            <ul className="footer-menu">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home</li>
              <li>Beauty</li>
              <li>Genz</li>
              <li>Gift Cards</li>
              <li>Myntra Insider</li>
            </ul>

            <h6 className="footer-heading mt-4">USEFUL LINKS</h6>
            <ul className="footer-menu">
              <li>Blog</li>
              <li>Careers</li>
              <li>Site Map</li>
              <li>Corporate Information</li>
              <li>Whitehat</li>
              <li>Cleartrip</li>
              <li>Myntra Global</li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h6 className="footer-heading">CUSTOMER POLICIES</h6>
            <ul className="footer-menu">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
              <li>Terms Of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
              <li>Grievance Redressal</li>
              <li>FSSAI Food Safety</li>
              <li>Connect App</li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h6 className="footer-heading">EXPERIENCE OUR APP</h6>

            <div className="d-flex gap-2 mb-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                className="app-btn"
                alt="Google Play"
              />
              <img
                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                className="app-btn"
                alt="App Store"
              />
            </div>

            <h6 className="footer-heading mt-4">KEEP IN TOUCH</h6>
            <div className="social-box">
              <RiFacebookBoxFill />
              <RiTwitterFill />
              <ImYoutube />
              <ImInstagram />

            </div>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <div className="d-flex guarantee-box mb-3">
              <div className="icon-circle">
                <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" />
              </div>
              <p>100% ORIGINAL products guaranteed</p>
            </div>

            <div className="d-flex guarantee-box">
              <div className="icon-circle ">
                <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" alt="" />
              </div>
              <p>Return within 14 days of receiving your order</p>
            </div>
          </Col>

        </Row>

        <hr />


        <h6 className="footer-title">POPULAR SEARCHES</h6>
        <p className="popular-items">
          Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones |
          Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags |
          Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops |
          Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan
          Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 |
          Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion
          Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes |
          Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes |
          Jewellery | Designers Sarees
        </p>

        {/* CONTACT INFO */}
        <p className="contact-text">
          In case of any concern, <a href="#">Contact Us</a>
        </p>

        {/* COPYRIGHT */}
        <div className="copyright-row">
          <p>© 2025 www.myntra.com. All rights reserved.</p>
          <p>A Flipkart company</p>
        </div>

        <hr />

        {/* REGISTERED OFFICE */}
        <Row className="office-row">
          <Col md={6} sm={12}>
            <h6 className="footer-title">Registered Office Address</h6>
            <p className="address">
              Buildings Alyssa,<br />
              Begonia and Clover situated in Embassy Tech Village,<br />
              Outer Ring Road,<br />
              Devarabeesanahalli Village,<br />
              Varthur Hobli,<br />
              Bengaluru – 560103, India
            </p>
          </Col>

          <Col md={6} sm={12} className="office-info-right">
            <p className="office-info">
              CIN: U72300KA2007PTC041799 <br />
              Telephone: <a href="tel:+918061561999">+91-80-61561999</a>
            </p>
          </Col>
        </Row>

        <hr />

        <h5 className="info-heading">ONLINE SHOPPING MADE EASY AT MYNTRA</h5>
        <p className="info-para">
          If you would like to experience the best of online shopping for men, women
          and kids in India, you are at the right place. Myntra is the ultimate
          destination for fashion and lifestyle, being host to a wide array of
          merchandise including clothing, footwear, accessories, jewellery, personal
          care products and more. It is time to redefine your style statement with
          our treasure-trove of trendy items. Our online store brings you the latest
          in designer products straight out of fashion houses. You can shop online at
          Myntra from the comfort of your home and get your favourites delivered
          right to your doorstep.
        </p>

        {/* SECOND TITLE */}
        <h5 className="info-heading">BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h5>
        <p className="info-para">
          Be it clothing, footwear or accessories, Myntra offers you the ideal combination
          of fashion and functionality for men, women and kids. You will realise that the
          sky is the limit when it comes to the types of outfits that you can purchase for
          different occasions.
        </p>

        {/* NUMBERED LIST */}
        <ol className="info-list">
          <li>
            <strong>Smart men’s clothing –</strong> At Myntra you will find myriad options
            in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and
            pyjama combinations for men. Wear your attitude with printed T-shirts.
            Create the back-to-campus vibe with varsity T-shirts and distressed jeans.
            Be it gingham, buffalo, or window-pane style, checked shirts are unbeatable
            smart. Team them up with chinos, cuffed jeans or cropped trousers for a
            smart casual look. Opt for a stylish layered look with biker jackets. Head
            out in cloudy weather with courage in water-resistant jackets. Browse through
            our innerwear section to find supportive garments which would keep you confident
            in any outfit.
          </li>

          <li>
            <strong>Trendy women’s clothing –</strong> Online shopping for women at Myntra is a
            mood-elevating experience. Look hip and stay comfortable with chinos and printed
            shorts this summer. Look hot on your date dressed in a little black dress, or opt
            for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic
            spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder,
            shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with
            skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear
            combination for the cool urbanite. Our grand sarees and lehenga-choli selections are
            perfect to make an impression at big social events such as weddings. Our salwar-kameez
            sets, kurtas and Patiala suits make comfortable options for regular wear.
          </li>

          <li>
            <strong>Fashionable footwear –</strong> While clothes maketh the man, the type of
            footwear you wear reflects your personality. We bring you an exhaustive lineup of
            options in casual shoes for men, such as sneakers and loafers. Make a power statement
            at work dressed in brogues and oxfords. Practice for your marathon with running shoes
            for men and women. Choose shoes for individual games such as tennis, football,
            basketball, and the like. Or step into the casual style and comfort offered by sandals,
            sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including
            pumps, heeled boots, wedges-heel, and pencil heels. Or enjoy the best of comfort and
            style with embellished and metallic flats.
          </li>

          <li>
            <strong>Stylish accessories –</strong> Myntra is one of the best online shopping sites
            for classy accessories that perfectly complement your outfits. You can select smart
            analogue or digital watches and match them with your belts and ties. Pick up spacious
            bags, backpacks, and wallets to store your essentials in style. Whether you prefer
            minimal jewellery or grand and sparkling pieces, you will find the perfect collection
            of ornaments in many impressive options.
          </li>
        </ol>

        <ol className="info-list" start="5">
          <li>
            <strong>Fun and frolic –</strong> Online shopping for kids at Myntra is a complete joy.
            Your little princess is going to love the wide variety of pretty dresses, ballerina
            shoes, headbands and clips. Delight your son by picking up sports shoes, superhero
            T-shirts, football jerseys and much more from our online store. Check out our lineup
            of toys with which you can create memories to cherish.
          </li>

          <li>
            <strong>Beauty begins here –</strong> You can also refresh, rejuvenate and reveal
            beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps,
            shower gels, skin care creams, lotions and other ayurvedic products are specially
            formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep
            your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose
            makeup to enhance your natural beauty.
          </li>
        </ol>

        <p className="info-para">
          Myntra is one of the best online shopping sites in India which could help transform your
          living spaces completely. Add colour and personality to your bedrooms with bed linen and
          curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and
          artificial plants are sure to breathe life into any corner of your home.
        </p>

        {/* TITLE */}
        <h5 className="info-heading">AFFORDABLE FASHION AT YOUR FINGERTIPS</h5>
        <p className="info-para">
          Myntra is one of the unique online shopping sites in India where fashion is accessible
          to all. Check out our new arrivals to view the latest designer clothing, footwear and
          accessories in the market. You can get your hands on the trendiest style every season in
          western wear. You can also avail the best of ethnic fashion during all Indian festive
          occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers,
          shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion
          gets unbelievably affordable.
        </p>

        {/* TITLE */}
        <h5 className="info-heading">MYNTRA INSIDER</h5>
        <p className="info-para">
          Every online shopping experience is precious. Hence, a cashless reward-based customer
          loyalty program called Myntra Insider was introduced to enhance your online experience.
          The program is applicable to every registered customer and measures rewards in the form
          of Insider Points.
        </p>

        <p className="info-para">
          There are four levels to achieve in the program, as the Insider Points accumulate. They
          are – Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner
          platform coupons, each tier comes with its own special perks.
        </p>

        {/* SUB-SECTION */}
        <h6 className="sub-heading">Insider</h6>
        <ul className="inside-list">
          <li>Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.</li>
          <li>Curated collections from celeb stylists.</li>
        </ul>


        <h6 className="sub-heading">Elite</h6>
        <ul className="inside-list">
          <li>VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.</li>
          <li>Exclusive early access to Limited Edition products</li>
        </ul>

        <h6 className="sub-heading">Icon</h6>
        <ul className="inside-list">
          <li>Chance to get on guest lists for special events.</li>

        </ul>


        <h5 className="fw-bold mb-3">
          Myntra Studio – The Personalised Fashion Feed You Wouldn’t Want To Miss Out On
        </h5>

        <p className="text-muted">
          The world wide web is evolving at a relentless pace, and with an accelerated
          growth each passing year, there is bound to be an overwhelming surge of
          online content. It was for this very reason that personalisation of search
          feeds was proposed as a solution to combat the overload of irrelevant
          information.
        </p>

        <p className="text-muted">
          Several social media platforms such as Facebook and Instagram along with
          various online shopping websites have chosen to help filter content,
          increasing user engagement, retention and customer loyalty.
        </p>

        <p className="text-muted">
          Myntra is one such online shopping website that joins the list of platforms
          that help curate a personalised fashion feed. Named the Myntra Studio, this
          personalised search feed brings you the latest men and women’s fashion
          trends, celebrity styles, branded content and daily updates from your
          favourite fashion labels.
        </p>

        <p className="text-muted">
          If you are wondering how impactful Myntra Studio can be, we are listing out
          five perks of having a rich, meaningful, and personalised fashion feed in
          your life.
        </p>

        <h6 className="fw-bold mt-4">1. Keep Up With What Your Favourite Fashion Icons Are Upto</h6>

        <p className="text-muted">
          The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion
          bloggers and stylists. The whole concept of building an outfit from scratch
          and showcasing it to a huge community of enthusiasts using the hashtag has
          helped individuals with understanding trends and making suitable for daily
          wear.
        </p>

        <p className="text-muted">
          Imagine if you could keep up with every piece of clothing and accessory worn
          by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin
          Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion
          trends, exploring details such as their outfit of the day. This way, you would
          not ever miss out on the latest celebrity fashion trends, all around the
          world.
        </p>

        <div className="mb-4">
          <h6 className="fw-bold">2. Quick Fashion Tip And Tricks</h6>
          <p className="text-muted">
            Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear,
            Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of
            everything in your wardrobe.
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-bold">3. Updates on What Is Trending and New Product Launches</h6>
          <p className="text-muted">
            Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would
            certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as <b>Puma, Coverstory, The Label Life</b> and many more.
          </p>
          <p className="text-muted">
            Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-bold">4. Explicit Step-By-Step Beauty Routines From Experts</h6>
          <p className="text-muted">
            Just like fashion, the beauty community keeps on growing, and with brands such as <b>Huda Beauty, MAC</b> and the latest <b>Kay Beauty by Katrina Kaif</b>,
            are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, DIY facial masks or other
            personal care beauty routines, Myntra Studio is here for you.
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-bold">5. Celebrity Confessions And A Look Into Their Lives</h6>
          <p className="text-muted">
            A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your
            most beloved celebrities in a matter of clicks.
          </p>
          <p className="text-muted">
            If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps
            achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that
            you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.
          </p>
        </div>

        <div className="mb-4">
          <h6 className="fw-bold">MYNTRA APP</h6>
          <p className="text-muted">
            Myntra, India’s no.1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends
            seem to change at lightning speed, yet the Myntra shopping app helps you keep up without any hiccups. In addition, Myntra has vowed to serve customers to the
            best of its ability by introducing its first-ever loyalty program. The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and
            other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never
            before!
          </p>
        </div>

        <h6 className="history-title">HISTORY OF MYNTRA</h6>
        <p className="history-text">
          Becoming India's no. 1 fashion destination is not an easy feat. Sincere
          efforts, digital enhancements and a team of dedicated personnel with an
          equally loyal customer base have made Myntra the online platform that it
          is today. The original B2B venture for personalized gifts was conceived
          in 2007 but transitioned into a full-fledged ecommerce giant within a
          span of just a few years. By 2012, Myntra had introduced 350 Indian and
          international brands to its platform, and this has only grown in number
          each passing year. Today Myntra sits on top of the online fashion game
          with an astounding social media following, a loyalty program dedicated
          to its customers, and tempting, hard-to-say-no-to deals.
        </p>

        <p className="history-text">
          The Myntra shopping app came into existence in the year 2015 to further
          encourage customers’ shopping sprees. Download the app on your Android
          or iOS device this very minute to experience fashion like never before.
        </p>

        <h6 className="history-title mt-4">
          SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
        </h6>
        <p className="history-text">
          Another reason why Myntra is the best of all online stores is the
          complete convenience that it offers. You can view your favourite brands
          with price options for different products in one place. A user-friendly
          interface will guide you through your selection process. Comprehensive
          size charts, product information and high-resolution images help you
          make the best buying decisions. You also have the freedom to choose your
          payment options, be it card or cash-on-delivery. The 14-day returns
          policy gives you more power as a buyer. Additionally, the try-and-buy
          option for select products takes customer-friendliness to the next
          level.
        </p>

        <p className="history-text">
          Enjoy the hassle-free experience as you shop comfortably from your home
          or your workplace. You can also shop for your friends, family and
          loved-ones and avail our gift services for special occasions.
        </p>

      </Container>
    </footer>
  );
};
export default Footer;
