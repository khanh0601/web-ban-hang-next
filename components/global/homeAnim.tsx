import animGlobal from './globalAnim';
import styles from '../../styles/Home.module.css'
import styleProduct from '../../components/product/product.module.css'
import stylesHeader from '../header/header.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
export default function homeAnim(){
  console.log('first gsap')
  const { setupImgReveal, colapSection} = animGlobal();
  const homeHero = ()=>{
      let tlHero= gsap.timeline({
        scrollTrigger: {
          trigger: `.${stylesHeader.header_top}`,
          start: 'top top+=10%',
          end: 'bottom bottom',
        }
      })  
      tlHero
      .from(`.${stylesHeader.header_top}`, {yPercent: -100, opacity:0, duration: .5, clearProp: 'all'})
      .from(`.${stylesHeader.header_mid_search}`,{yPercent: 40, opacity:0, duration: .5, clearProp: 'all'},'<=.2')
      .from(`.${stylesHeader.header_mid_logo_wrap}`,{yPercent: 40, opacity:0, duration: .5, clearProp: 'all'},'<=0')
      .from(`.${stylesHeader.header_mid_user_cart}`,{yPercent: 40, opacity:0, duration: .4, stagger: .03, clearProp: 'all'},'<=0')
      .from(`.${stylesHeader.header_mid_menu} a`,{yPercent: 40, opacity:0, duration: .4, stagger: .03, clearProp: 'all'},'<=0')
      .from(`.${styles.promotion} `,{yPercent: 40, opacity:0, duration: .4, stagger: .03, clearProp: 'all'},'<=0')
      .from(`.${styles.promotion} .txt-16 `,{yPercent: 40, opacity:0, duration: .4, stagger: .03, clearProp: 'all'},'<=.2')
      .from(`.${styles.gift_swiper}  `,{yPercent: 20, opacity:0, duration: .6, stagger: .03, clearProp: 'all'},'<=.0')
      .from(`.${styles.brand_main}  `,{yPercent: 20, opacity:0, duration: .5, stagger: .03, clearProp: 'all'},'<=.1')
  }
  const homeCate=()=> {
    document.querySelectorAll(`.${styles.categories_item}`).forEach((el)=>{
      setupImgReveal(el.querySelector(`.${styles.categories_item_img}`),el.querySelector(`.${styles.categories_item_img} img`))
    })
  }
  const homeRecomment=()=> {
    document.querySelectorAll(`.home-swiper-recom .swiper-slide`).forEach((el,index)=>{
      console.log(el.querySelector(`.${styleProduct.productImg_wrap}`))
      if(index<=5){
        setupImgReveal(el.querySelector(`.${styleProduct.productImg_wrap}`),el.querySelector(`.${styleProduct.productImg_wrap} img`))
      }
    })
  }
  const homeArrival=()=> {
    document.querySelectorAll(`.home-swiper-arrival .swiper-slide`).forEach((el,index)=>{
      console.log(el.querySelector(`.${styleProduct.productImg_wrap}`))
      if(index<=5){
        setupImgReveal(el.querySelector(`.${styleProduct.productImg_wrap}`),el.querySelector(`.${styleProduct.productImg_wrap} img`))
      }
    })
  }
  const homeContact = ()=>{
    console.log(document.querySelector(`.${styles.register_img} img`))
    if(document.querySelector(`.${styles.register_img_wrap} img`)){
    setupImgReveal(document.querySelector(`.${styles.register_img_wrap}`), document.querySelector(`.${styles.register_img_wrap} img`))

    }
  }
  colapSection(`${styles.gift_wrap}`,`${styles.categories_wrap}`);
  colapSection(`${styles.categories_wrap}`,`${styles.recomment_wrap}`);
  colapSection(`${styles.recomment_wrap}`,`${styles.collection_wrap}`);
  colapSection(`${styles.story_wrap}`,`${styles.register_wrap}`);
  homeHero();
  homeCate();
  homeRecomment();
  homeArrival();
  homeContact();
  document.querySelectorAll(`.${styles.story_item}`).forEach((item)=>{
    setupImgReveal(item.querySelector(`.${styles.story_item_img}`),item.querySelector(`.${styles.story_item_img} img`))
  })
}