import style from  './product.module.css'
import Link from 'next/link'
import Button from '../button/button'
export default function Product({title,shopName, category, price,tag=[], id=0, linkImg}:{title?:string, shopName?:string, category?:string, price?:string, tag?:any, id?:number, linkImg?:string}){
    return (
        
        <div className={style.product_wrap}>
              <div className={style.product}>
            <Link href={`/product/${id}`} cursor-data='detail'>
                <div className={style.product_top}>
                    <p className={style.category}>{category}</p>
                    <div className={style.like}>
                      <svg width="100%" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.4037 2.93664L18.4123 2.95183L18.4215 2.9667C18.5958 3.2508 18.7269 3.55555 18.8116 3.87194L18.8127 3.87606C18.9035 4.20978 18.9466 4.55313 18.9411 4.89702L18.9409 4.90838L18.941 4.91974C18.9453 5.56622 18.7672 6.20483 18.4212 6.76892L18.4145 6.78L18.408 6.79125C18.2401 7.08158 18.0254 7.35191 17.7724 7.58927L17.7724 7.58924L17.7663 7.59511L10.4093 14.6176L3.05224 7.59511L3.05224 7.59511L3.04946 7.59247C2.79291 7.34946 2.57187 7.07664 2.39124 6.78139C2.22443 6.49138 2.09474 6.1844 2.0044 5.86696C1.91993 5.55595 1.87755 5.23539 1.87755 4.91313V4.90513L1.87742 4.89714C1.87192 4.55317 1.91503 4.20975 2.00586 3.87595L2.00593 3.87597L2.00883 3.86479C2.17681 3.21811 2.53248 2.62303 3.0423 2.14952L3.04235 2.14958L3.05103 2.14132C3.42909 1.78165 3.87909 1.49318 4.37716 1.29393C5.37918 0.902272 6.50469 0.902023 7.50687 1.29319C7.96344 1.47827 8.38242 1.73368 8.74736 2.04756L8.77085 2.07446L8.80078 2.10874L8.8337 2.14017L9.71878 2.985L10.4093 3.64407L11.0997 2.985L11.9848 2.14017L12.0177 2.10875L12.0476 2.07447L12.0711 2.04756C12.4361 1.73368 12.8551 1.47827 13.3116 1.29319C14.3138 0.90202 15.4393 0.90227 16.4414 1.29394C16.9394 1.49318 17.3894 1.78166 17.7675 2.14132L17.7733 2.14688L17.7793 2.15235C18.0299 2.38319 18.2401 2.64797 18.4037 2.93664Z" stroke="currentColor" stroke-width="1"/>
                        </svg>
                    </div>
                </div>
                  <div className={style.productImg_wrap}><img src={linkImg} alt={title} className={style.productImg}/></div>
                  <div className={style.product_title}>{title}</div>
                  <p className={style.name_shop}>by {shopName}</p>
                  <p className={style.name_tag}>{tag.map((item:string,index:number)=>{
                      return <span key={index} className={style.tag}>{item}</span>
                  })}</p>
                  <p className={style.price_wrap}>from <span className={style.price}>${price}</span></p>
              </Link>
                  <Button  title='ADD TO BAG' bgColor='#fff' bgColorHover='#000' color='#000' borderCl='#C4C4C4' colorHover='#fff' width='100%'/>
              </div>
        </div>
    )
}