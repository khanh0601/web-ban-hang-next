import style from './card-shop.module.css'
import Link from 'next/link'
export default function CardShop({title, link, linkImg}){
  return(
    <div className={style.card_shop} style={{ '--imgBg': `url(${linkImg})` }}>
      <div className={style.card_shop_name} >
        {title}
      </div>
      <Link href={link} className={`${style.card_shop_link} hover-under txt-med txt-16 txt-white`}>
        <p>Shop now</p>
      </Link>
    </div>
  )
}