import { string } from 'yup'
import React from 'react'
import style from './button.module.css'
import Link from 'next/link'
export default function Button ( {bgColor, bgColorHover,title,borderCl='transparent', link='#', color='#fff', colorHover='#fff', width='max-content'}:{bgColor?:string, bgColorHover?:string,title:string, borderCl?:string, link?:string, color?:string, colorHover?:string, width?:string}){
    return (
      <div className={style.btn_wrap} cursor-data='btn'>
        <Link href={link} className={style.btn} style={{'--bgColor': bgColor, '--bgColorHover': bgColorHover, '--borderCl': borderCl,'--color': color, '--colorHover': colorHover, '--width': width} as React.CSSProperties}>
         <span> {title}</span>
        </Link>
      </div>
        )
}