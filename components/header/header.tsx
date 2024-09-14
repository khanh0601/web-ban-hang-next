  import style from './header.module.css'
import Link from 'next/link'
import Image from 'next/image';
export default function Header(){
    return (
      <header>
        <section className={style.header_top}>
          <div className={`grid container-fluid`}>
            <div className={style.header_top_com}>
              <div className={style.header_top_com_money}>
                <span className={` txt-white txt-16`}>USD</span>
                <img src='/images/ic-arrow-down.svg' className={style.header_top_ic_arrow}></img>
              </div>
              <div className={style.header_top_com_lang}>
                <span className={` txt-white txt-16`}>English</span>
                <img src='/images/ic-arrow-down.svg' className={style.header_top_ic_arrow}></img>
              </div>
            </div>
            <div className={`${style.header_top_body} `}>
              <p className={` txt-white txt-16`}>🔥  Only 11 days left until VALENTINE'S DAY!  🔥</p>
            </div>
            <div className={`${style.header_top_support} `}>
              <Link href='#' className={` txt-white txt-16 hover-line`}><span>Help & Information</span></Link>
              <Link href='#' className={` txt-white txt-16 hover-line`}><span>Connect with us</span></Link> 
            </div>

          </div>
        </section>
        <section className={style.header_mid}>
          <div className={` container-fluid grid`}>
            <div className={style.header_mid_search}>
              <input type="text" className={style.header_mid_search_input} placeholder="Hey, what are you looking for?"></input>
              <button className={style.header_mid_search_btn}>
                <img src='/images/ic-search.svg' className='img-fill'></img>
              </button>
            </div>
            <div className={style.header_mid_logo_wrap}>
              <img src='/images/logo.svg' className='img-basic'></img>
            </div>
            <div className={style.header_mid_user}>
              <Link href='#'>
                <div className={`${style.header_mid_user_cart}  hover-line` }>
                  <div className={style.header_mid_ic_wrap}>
                  <img src='/images/ic-user.svg' className='img-fill'></img>
                  </div>
                  <span className={`${style.header_mid_user_cart_txt} txt-16 txt-black txt-med `}>My Account</span>
                </div>
              </Link>
              <Link href='#'>
                <div className={`${style.header_mid_user_cart}  hover-line` }>
                  <div className={style.header_mid_ic_wrap}>
                  {/* <img src='/images/ic-wishlish.svg' className='img-fill'></img> */}
                  <svg height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.3483 6.80612L22.3539 6.81662L22.36 6.82692C22.5918 7.22254 22.767 7.6487 22.8805 8.09296L22.8812 8.09573C23.0017 8.55941 23.059 9.03724 23.0516 9.51626L23.0515 9.52385L23.0516 9.53144C23.0573 10.4391 22.8183 11.3315 22.3598 12.1149L22.3553 12.1225L22.3511 12.1303C22.1269 12.5366 21.8419 12.9116 21.5088 13.2391L21.5088 13.2391L21.5046 13.2433L12.5002 22.2477L3.49573 13.2433L3.49382 13.2414C3.15803 12.9082 2.86742 12.5323 2.62943 12.1235C2.40923 11.7236 2.2376 11.2989 2.1182 10.8583C2.00535 10.4241 1.94875 9.97663 1.94875 9.52702H1.94883L1.94867 9.51634C1.94135 9.03727 1.9987 8.5594 2.11915 8.09566L2.11919 8.09567L2.12106 8.08814C2.3458 7.18171 2.8196 6.35622 3.48891 5.70497L3.48895 5.705L3.4949 5.69907C3.98788 5.20774 4.57157 4.81683 5.21356 4.54802C6.50398 4.01908 7.95064 4.01889 9.24117 4.54745C9.83831 4.80068 10.388 5.15342 10.8669 5.59057L10.9176 5.65139L10.938 5.67579L10.9604 5.69824L12.0052 6.74302L12.5002 7.23799L12.9951 6.74302L14.0399 5.69824L14.0624 5.67579L14.0827 5.6514L14.1334 5.59058C14.6123 5.15343 15.162 4.80068 15.7591 4.54745C17.0497 4.01889 18.4963 4.01908 19.7867 4.54801C20.4287 4.81682 21.0124 5.20774 21.5054 5.69907L21.5053 5.69914L21.5135 5.707C21.8465 6.02835 22.1281 6.39907 22.3483 6.80612Z" stroke="black" stroke-width="1.4"/>
                  </svg>

                  </div>
                  <span className={`${style.header_mid_user_cart_txt} txt-16 txt-black txt-med hover-line`}>Wishlist</span>
                </div>
              </Link>
              <Link href='#'>
                <div className={`${style.header_mid_user_cart}  hover-line` }>
                  <div className={`${style.header_mid_ic_wrap}`}>
                  <img src='/images/ic-card.svg' className='img-fill '></img>
                  </div>
                  <span className={`${style.header_mid_user_cart_txt} txt-16 txt-black txt-med`}>2 items</span>
                </div>
              </Link>
            </div>
          </div>
          <div className={`${style.header_mid_menu} container-fluid`}>
            <Link href='#' className='txt-black txt-16 hover-line  txt-med'><span>Perfumes</span></Link>
            <Link href='#' className='txt-black txt-16 hover-line txt-med'><span>Brands</span></Link>
            <Link href='#' className='txt-black txt-16 hover-line txt-med'><span>Skincare</span></Link>
            <Link href='#' className='txt-black txt-16 hover-line txt-med'><span>Makeup</span></Link>
            <Link href='#' className='txt-black txt-16 hover-line txt-med'><span>Haircare</span></Link>
            <Link href='#' className='txt-black txt-16 hover-line txt-med'><span>Aromatherapy</span></Link>
            <Link href='#' className='txt-black txt-16 hover-line txt-med'><span>Candles</span></Link>
            <Link href='#' className='txt-black txt-16 hover-line txt-med'><span>Gifts</span></Link>
          </div>
        </section>
      </header>
    );
}