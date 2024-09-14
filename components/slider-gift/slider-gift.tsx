import React from 'react';
import style from './slider-gift.module.css'
import Link from 'next/link'
import Button from '../button/button'
export default function Slider({label, title, backgroundImg, link='#'}:{label:string, title:string, backgroundImg:string, link?:string}){
    return (
      <div className={style.gift_slide}>
        <div className={style.gift_slide_body}>
          <h2 className={`${style.gift_slide_body_label} txt-16 txt-black`}>{label}</h2>
          <h1 className={`${style.gift_slide_body_title}  f-yeseva`}>{title}</h1>
          {/* <Link href={link} className={style.gift_btn}>SHOP NOW</Link> */}
          <Button link={link} title='SHOP NOW' bgColor='#000' bgColorHover='transparent' color='#fff' colorHover='black'  borderCl='#000'></Button>
        </div>
        <style jsx>{`
        .${style.gift_slide} {
          background-image: url('${backgroundImg}');
          background-size: cover;
          background-position: right center;
        }
      `}</style>
      </div>
      
    )
}