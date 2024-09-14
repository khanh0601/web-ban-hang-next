import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Home.module.css';
import Header from '../components/header/header';
import Slider from '../components/slider-gift/slider-gift';
import 'swiper/swiper-bundle.css';
import { Pagination,Navigation } from 'swiper/modules';
import Button from '../components/button/button';
import CardShop from '../components/card-shop/card-shop.js';
import Product from '../components/product/product';
import '../components/global/lenis';
import homeAnim  from '../components/global/homeAnim'; 
import * as Yup from "yup";
import { useFormik } from "formik";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import LoadingSpinner ,{ FirstLoading} from '../components/loading/loading';
import { Cursor } from '../components/global/globalAnim';
const shopInf=[
  {
    title: 'Women’s perfume',
    link: '#',
    linkImg: '/images/bg-shop1.jpg'
  },
  {
    title: 'men’s cologne',
    link: '#',
    linkImg: '/images/bg-shop2.jpg'
  },
  {
    title: 'Haircare',
    link: '#',
    linkImg: '/images/bg-shop3.jpg'
  },
  {
    title: 'skincare',
    link: '#',
    linkImg: '/images/bg-shop4.jpg'
  },
  {
    title: 'gift sets',
    link: '#',
    linkImg: '/images/bg-shop5.jpg'
  },
  {
    title: 'best sellers',
    link: '#',
    linkImg: '/images/bg-shop6.jpg'
  },
]
const products=[
  {
    id:1,
    linkImg: '/images/productnew1.jpg',
    title: 'Jo Malone Vetiver',
    shopName: 'Ipsa',
    tag: ['Best Seller','Trending'],
    link: '#',
    category:'woment',
    price: '51.74'
  },
  {
    id:2,
    linkImg: '/images/productnew2.jpg',
    title: 'Jo Malone Vetiver',
    shopName: 'Ipsa',
    tag: ['Best Seller','Trending'],
    link: '#',
    category:'woment',
    price: '51.74'
  },
  {
    id:3,
    linkImg: '/images/productnew3.jpg',
    title: 'Jo Malone Vetiver',
    shopName: 'Ipsa',
    tag: ['Best Seller','Trending'],
    link: '#',
    category:'woment',
    price: '51.74'
  },
  {
    id:4,
    linkImg: '/images/productnew4.jpg',
    title: 'Jo Malone Vetiver',
    shopName: 'Ipsa',
    tag: ['Best Seller','Trending'],
    link: '#',
    category:'woment',
    price: '51.74'
  },
  {
    id:5,
    linkImg: '/images/productnew5.jpg',
    title: 'Jo Malone Vetiver',
    shopName: 'Ipsa',
    tag: ['Best Seller','Trending'],
    link: '#',
    category:'woment',
    price: '51.74'
  },
  {
    id:6,
    linkImg: '/images/productnew1.jpg',
    title: 'Jo Malone Vetiver',
    shopName: 'Ipsa',
    tag: ['Best Seller','Trending'],
    link: '#',
    category:'woment',
    price: '51.74'
  },
  {
    id:7,
    linkImg: '/images/productnew2.jpg',
    title: 'Jo Malone Vetiver',
    shopName: 'Ipsa',
    tag: ['Best Seller','Trending'],
    link: '#',
    category:'woment',
    price: '51.74'
  },
  {
    id:8,
    linkImg: '/images/productnew3.jpg',
    title: 'Jo Malone Vetiver',
    shopName: 'Ipsa',
    tag: ['Best Seller','Trending'],
    link: '#',
    category:'woment',
    price: '51.74'
  },
  {
    id:9,
    linkImg: '/images/productnew4.jpg',
    title: 'Jo Malone Vetiver',
    shopName: 'Ipsa',
    tag: ['Best Seller','Trending'],
    link: '#',
    category:'woment',
    price: '51.74'
  },
  {
    id:10,
    linkImg: '/images/productnew1.jpg',
    title: 'Jo Malone Vetiver',
    shopName: 'Ipsa',
    tag: ['Best Seller','Trending'],
    link: '#',
    category:'woment',
    price: '51.74'
  },
  {
    id:11,
    linkImg: '/images/productnew2.jpg',
    title: 'Jo Malone Vetiver',
    shopName: 'Ipsa',
    tag: ['Best Seller','Trending'],
    link: '#',
    category:'woment',
    price: '51.74'
  }
]
const categories= [
  {
    title: "Fashions",
    description:'The "Electronics" category offers the latest gadgets and devices, from smartphones to smart home technology, enhancing your daily life.',
    link: '#',
    linkImg: '/images/fashion.jpg',
  },
  {
    title: "Accessories",
    description:'The "Electronics" category offers the latest gadgets and devices, from smartphones to smart home technology, enhancing your daily life.',
    link: '#',
    linkImg: '/images/phu_kien.jpg',
  },
  {
    title: "Clocks",
    description:'The "Electronics" category offers the latest gadgets and devices, from smartphones to smart home technology, enhancing your daily life.',
    link: '#',
    linkImg: '/images/dong_ho.jpg',
  },
  {
    title: "Helth",
    description:'The "Electronics" category offers the latest gadgets and devices, from smartphones to smart home technology, enhancing your daily life.',
    link: '#',
    linkImg: '/images/helth.jpg',
  },
  {
    title: "Electronics",
    description:'The "Electronics" category offers the latest gadgets and devices, from smartphones to smart home technology, enhancing your daily life.',
    link: '#',
    linkImg: '/images/dien_tu.jpg',
  },
  {
    title: "Beauty",
    description:'The "Electronics" category offers the latest gadgets and devices, from smartphones to smart home technology, enhancing your daily life.',
    link: '#',
    linkImg: '/images/lam_dep.jpg',
  },
  {
    title: "Shoes",
    description:'The "Electronics" category offers the latest gadgets and devices, from smartphones to smart home technology, enhancing your daily life.',
    link: '#',
    linkImg: '/images/giay_dep.jpg',
  },
  {
    title: "Fashions",
    description:'The "Electronics" category offers the latest gadgets and devices, from smartphones to smart home technology, enhancing your daily life.',
    link: '#',
    linkImg: '/images/fashion.jpg',
  },
]
interface formUserRegister{
  fullName: string,
  shopName?: string,
  email: string,
  password: string,
  address: string,
  phone: string,
  confirmPassword:string,
}
interface formUserLogin{
  email: string,
  password: string,
}
const validationSchema= Yup.object({
  fullName:Yup.string().required('Field is required'),
  email:Yup.string().email('Invalid email adress').required('Field is required'),
  address:Yup.string().required('Field is required'),
  phone:Yup.string().required('Field is required'),
  password : Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})
const validationSchemaVendor= Yup.object({
  fullName:Yup.string().required('Field is required'),
  shopName:Yup.string().required('Field is required'),
  email:Yup.string().email('Invalid email adress').required('Field is required'),
  address:Yup.string().required('Field is required'),
  phone:Yup.string().required('Field is required'),
  password : Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})
const validationSchemaLogin= Yup.object({
  email:Yup.string().email('Invalid email adress').required('Field is required'),
  password : Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .required('Password is required'),
})
export default function Home() {
  const [formUser, setFormUser] = useState(true);
  const [formLogin, setFormLogin] = useState(false);
  const [formVendor, setFormVendor] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  const onSignInHandle = (e:any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1000)
    setFormUser(false);
    setFormLogin(true);
    setFormVendor(false)
  }
  const onUserHandle = (e:any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1000)
    setFormUser(true);
    setFormLogin(false);
    setFormVendor(false)
  }
  const onVendorHandle = (e:any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1000)
    setFormUser(false);
    setFormLogin(false);
    setFormVendor(true)
  }
  const initialValues:formUserRegister={
    email:'',
    password:'',
    fullName:'',
    address:'',
    phone:'', 
    confirmPassword:''
  }
  const initialValuesVendor:formUserRegister={
    email:'',
    password:'',
    fullName:'',
    shopName:'',
    address:'',
    phone:'', 
    confirmPassword:''
  }
  const initialValuesLogin: formUserLogin={
    email:'',
    password:'',
  }
const handleSubmit=(values:formUserRegister)=>{
    console.log(values)
}
const handleSubmitLogin=(values:formUserRegister)=>{
  console.log(values)
  console.log('login')

}
const handleSubmitVedor=(values:formUserRegister)=>{
  console.log('vendor')
  console.log(values)
}
useEffect(()=>{
  const inputs = document.querySelectorAll(`.${styles.input}`);
  console.log(inputs)
  inputs.forEach((input)=>{
    input.addEventListener('blur',(e:any)=>{
      if(e.target.value === ''){
        input.classList.remove(`${styles.active}`)
      }
      else{
        input.classList.add(`${styles.active}`)
      }
      return ()=>{
        inputs.forEach((input)=>{
          input.removeEventListener('blur',()=>{})
      });
      }
    })
  })
},[])
useEffect(()=>{
  homeAnim();
},[firstLoad])
  return (
    <React.Fragment>
       <Head>
      <title>Homepage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      { <FirstLoading setFirstLoad={setFirstLoad}/>}
    {firstLoad &&
    <div>
    <Cursor/>
    <Header/>
    <main>
      <section className={styles.promotion}>
        <div className={`container-fluid ${styles.promotion_container}`}>
          <Link href='#'>
            <div className={`${styles.promotion_main}`}>
              <div className={`${styles.promotion_main_txt} txt-16 txt-black txt-bold hover-under d-flex`}>25% OFF - SITEWIDE - <p className='txt-med'>click here</p></div>
            </div>
          </Link>
          <span className={`${styles.promotion_main_or} txt-16 txt-bold`}>OR</span>
          <Link href='#'>
            <div className={`${styles.promotion_main}`}>
            <div className={`${styles.promotion_main_txt} txt-16 txt-black txt-bold hover-under d-flex`}>FREE SHIPPING $100 MIN - <p className='txt-med'>click here</p></div>
            </div>
          </Link>
        </div>
      </section>
      <div className={styles.gift_wrap}>
      <div className='sticky-block'></div>

      <section className={styles.gift}>
        <div className='container'>
          <div className='gift-wrap'>

            <Swiper
           
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                modules={[ Pagination]}
                className={styles.gift_swiper}
              >
                <SwiperSlide><Slider label='Find the Perfect Gift in Our' title='VARIETY GIFT SETS' backgroundImg='/images/banner-gift-valentin.jpg'/></SwiperSlide>
                <SwiperSlide><Slider label='Find the Perfect Gift in Our' title='Valentine’s Day Gifts for Her' backgroundImg='/images/banner-gift-valentin.jpg'/></SwiperSlide>
                <SwiperSlide> <Slider label='Find the Perfect Gift in Our' title='Valentine’s Day Gifts for Kids' backgroundImg='/images/banner-gift-valentin.jpg'/></SwiperSlide>
              </Swiper>
          </div>
        </div>
        <div className={styles.brand}>
            <div className='container'>
              <div className={styles.brand_main}>
                <div className={styles.brand_content}>
                  <div className={`${styles.brand_content_title} f-yeseva`}>up to 80% off.</div>
                  <Button title='SEarch for brand' bgColor='#000' color='#fff' borderCl='#000' colorHover=''/>
                </div>
              </div>
            </div>
      </div>
      </section>
      </div>
      <div className={styles.categories_wrap}>
      <div className='sticky-block'></div>
        <section className={styles.categories}>
          <div className='container'>
          <div className={`bg-black ${styles.categories_inner}`}>
            <div className={styles.collection_head}>
                      <h2 className={`${styles.title_main} txt-white`}>What will you get</h2>
                      <span className={`${styles.des_main} txt-des`}>Our product is avaiable and high standards to suit your choice</span>
                      <Button title='SEE MORE ' bgColor='tranparent' bgColorHover='#fff' borderCl='#898989' color='#fff' colorHover='#000'/>
                    </div>
              <div className={styles.categories_grid}>
                {categories.map((item, index)=>{
                  return(
                    <div className={`${styles.categories_item} hover-line `} cursor-data='detail'>
                    <Link href={item.link}>
                    <div className='line-active'> <div className='line-glad line-inner'></div></div>
                      <div className={styles.categories_item_img}> 
                        <img className='img-basic img-fill' src={item.linkImg}></img>
                      </div>
                      <div className={styles.categories_item_content}>
                        <div className={styles.categories_item_content_inner}>
                          <h3 className={`${styles.categories_item_content_title}  txt-white `}>{item.title}</h3>
                          <p className= {`${styles.categories_item_content_des} txt-des txt-white`}>{item.description}</p>
                        </div>
                      </div>
                    </Link>
                    </div>
                  )
                })}
              </div>
          </div>
          </div>
          
        </section>
      </div>
      <div className={styles.recomment_wrap}>
      <div className='sticky-block'></div>

        <section className={styles.recomment}>
          <div className='container'>
            <h2 className={`${styles.title_main}`}>Recommended for you</h2>
            <div className={styles.shop_collection_main}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[ Navigation]}
                    className='home-swiper-recom home-swiper'
                    >
                  <div className={styles.product_main}>
                      {products.map((item, index)=>{
                        return(
                          <SwiperSlide>
                          <div className={styles.product_item}>
                            <Product key={index} linkImg={item.linkImg} title={item.title} shopName={item.shopName} tag={item.tag} id={item.id} category={item.category} price={item.price}/>
                          </div></SwiperSlide>
                        )
                      })}
                  </div>
              </Swiper>
            </div>
            <div className={styles.recomment_button_wrap}>
                <Button title='SEE MORE' link='#' width='max-content' bgColor='transparent' bgColorHover='#000' color='#000' colorHover='#fff' borderCl='#898989' />
            </div>
          </div>
          <div className='container'>
            <h2 className={`${styles.title_main}`}>NEW Arrivals!</h2>
            <div className={styles.shop_collection_main}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[ Navigation]}
                    className='home-swiper-arrival home-swiper'
                    >
                  <div className={styles.product_main}>
                      {products.map((item, index)=>{
                        return(
                          <SwiperSlide>
                          <div className={styles.product_item}>
                            <Product key={index} linkImg={item.linkImg} title={item.title} shopName={item.shopName} tag={item.tag} id={item.id} category={item.category} price={item.price}/>
                          </div></SwiperSlide>
                        )
                      })}
                  </div>
              </Swiper>
            </div>
        </div>
        </section>
      </div>
      <div className={styles.collection_wrap}>
        <section className={styles.collection}>
              <div className='container'>
                <div className={styles.collection_head}>
                  <h2 className={`${styles.title_main}`}>Shop Our COLLECTION</h2>
                  <span className={`${styles.des_main}`}>Our delicious, limited-edition collection</span>
                  <Button title='Shop All' bgColor='tranparent' bgColorHover='#000' borderCl='#898989' color='#000000' colorHover='white'/>
                </div>
                <div className={styles.collection_main}>
                {shopInf.map((item, index) => (
                <div key={index} className={styles.collection_item}>
                  <CardShop title={item.title} link={item.link} linkImg={item.linkImg} />
                </div>
                ))}
                </div>
              </div>
        </section>
      </div>
      <div className={styles.story_wrap}>
      <div className='sticky-block'></div>

      <section className={styles.story}>
            <div className={`${styles.story_container} container grid`}>
              <div className={styles.story_head}>
                <div className={styles.story_head_inner}>
                  <h3 className={styles.story_head_title}>Core of our business</h3>
                  <p className={styles.story_head_des}>Sustainable production using natural material, respect for nutural, supporting local community and economy - these are the fundamental principles guiding  all our business endeavos</p>
                  <Button title='Register Now' bgColor='#000' bgColorHover='transparent' borderCl='#000' color='#fff' colorHover='#000'/>
                </div>
              </div>
              <div className={styles.story_item}>
                <div className={styles.story_item_img}>
                  <img className='img-basic img-fill' src='/images/thumbnail.jpg'></img>
                </div>
                <div className={styles.story_item_content}>
                  <h4 className={styles.story_item_content_title}>Sustainable production</h4>
                  <p className={styles.story_item_content_des}>We are committed to sustainable production using natural materials and supporting local communities and economies</p>
                </div> 
              </div>
              <div className={styles.story_item}>
                <div className={styles.story_item_img}>
                  <img className='img-basic img-fill' src='/images/thumbnail2.jpg'></img>
                </div>
                <div className={styles.story_item_content}>
                  <h4 className={styles.story_item_content_title}>Sustainable production</h4>
                  <p className={styles.story_item_content_des}>We are committed to sustainable production using natural materials and supporting local communities and economies</p>
                </div> 
              </div>
              <div className={styles.story_item}>
                <div className={styles.story_item_img}>
                  <img className='img-basic img-fill' src='/images/thumbnail.jpg'></img>
                </div>
                <div className={styles.story_item_content}>
                  <h4 className={styles.story_item_content_title}>Sustainable production</h4>
                  <p className={styles.story_item_content_des}>We are committed to sustainable production using natural materials and supporting local communities and economies</p>
                </div> 
              </div>
              <div className={styles.story_item}>
                <div className={styles.story_item_img}>
                  <img className='img-basic img-fill' src='/images/thumbnail2.jpg'></img>
                </div>
                <div className={styles.story_item_content}>
                  <h4 className={styles.story_item_content_title}>Sustainable production</h4>
                  <p className={styles.story_item_content_des}>We are committed to sustainable production using natural materials and supporting local communities and economies</p>
                </div> 
              </div>
            </div>
      </section>

      </div>
      <div className={styles.register_wrap}>
            <section className={styles.register}>
              <div className='container grid'>
                
                <div className={styles.register_form}>
                  {loading && <LoadingSpinner/>}
                  {formUser && <div className={styles.register_form_inner}>
                    <div className={styles.register_head}>
                    <h3 className={styles.register_head_title}>Sign up </h3>
                    <p className={styles.register_head_des}>Get the latest news and offers</p>
                    </div>
                    <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                        <div className={styles.register_form_input}>
                          <Field type='text' placeholder='Enter your full name' name='fullName' className={styles.input} ></Field>
                          <ErrorMessage name="fullName" component="div" className={styles.errors_input} />
                          <div className={styles.line}></div>
                        </div>
                        <div className={styles.register_form_input}>
                          <Field  type='text' placeholder='Enter your email' name='email' className={styles.input}></Field>
                          {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                          <ErrorMessage name="email" component="div" className={styles.errors_input} />
                          <div className={styles.line}></div>
                        </div>
                        <div className={styles.register_form_input}>
                          <Field type='text' placeholder='Enter your phone' id='phone' name='phone' className={styles.input}></Field>
                          <ErrorMessage name="phone" component="div" className={styles.errors_input}/>
                          <div className={styles.line}></div>
                        </div>
                        <div className={styles.register_form_input}>
                          <Field type='text' placeholder='Enter your address' id='address' name='address' className={styles.input}></Field>
                          <ErrorMessage name="address" component="div" className={styles.errors_input}/>
                          <div className={styles.line}></div>
                        </div>
                        <div className={styles.register_form_input}>
                          {/* <input type='text' placeholder='Enter your password' name='password'/> */}
                          <Field type='password' id='password' name='password' placeholder='Enter your password' className={styles.input}></Field>
                          <ErrorMessage name="password" component="div" className={styles.errors_input}/>
                          <div className={styles.line}></div>
                        </div>
                        <div className={styles.register_form_input}>
                          <Field type='password' placeholder='Confirm your password' name='confirmPassword' className={styles.input}></Field>
                          <ErrorMessage name="confirmPassword" component="div" className={styles.errors_input} />
                          <div className={styles.line}></div>
                        </div>
                        
                        <div className={styles.register_form_button}>
                        <input type='submit' value='Submit' className={styles.input_submit}/> 
                        </div>
                    </form>
                        )}
                    </Formik>
                    <div className={styles.register_form_link_wrap}>
                    <Link href='#' className={`${styles.register_form_link} hover-under`}  onClick={onSignInHandle}> <p>Sign In</p></Link>
                    <Link href='#' className={`${styles.register_form_link} hover-under`} onClick={onVendorHandle}> <p>Become a partner</p></Link>
                    </div>
                  </div>}
                  { formLogin && 
                  <div className={styles.register_form_inner}>
                  <div className={styles.register_head}>
                  <h3 className={styles.register_head_title}>Sign in </h3>
                  <p className={styles.register_head_des}>Get the latest news and offers</p>
                  </div>
                  <Formik
                  initialValues={initialValuesLogin}
                  validationSchema={validationSchemaLogin}
                  onSubmit={handleSubmitLogin}>
                  {({ handleSubmit, errors, touched }) => (
                      <form onSubmit={handleSubmit}>
                      <div className={styles.register_form_input}>
                        <Field  type='text' placeholder='Enter your email' name='email' className={styles.input}></Field>
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                        <ErrorMessage name="email" component="div" className={styles.errors_input} />
                        <div className={styles.line}></div>
                      </div>
                      <div className={styles.register_form_input}>
                        {/* <input type='text' placeholder='Enter your password' name='password'/> */}
                        <Field type='password' id='password' name='password' placeholder='Enter your password' className={styles.input}></Field>
                        <ErrorMessage name="password" component="div" className={styles.errors_input}/>
                        <div className={styles.line}></div>
                      </div>
                      <div className={styles.register_form_button}>
                      <input type='submit' value='Login' className={styles.input_submit}/> 
                      </div>
                  </form>
                      )}
                  </Formik>
                  <div className={styles.register_form_link_wrap}>
                  <Link href='#' className={`${styles.register_form_link} hover-under`}  onClick={onSignInHandle}> <p>Sign Up</p></Link>
                  <Link href='#' className={`${styles.register_form_link} hover-under`} onClick={onVendorHandle}> <p>Become a partner</p></Link>
                  </div>
                  </div>
                  }
                  {formVendor &&
                  <div className={styles.register_form_inner}>
                  <div className={styles.register_head}>
                  <h3 className={styles.register_head_title}>Become a partner </h3>
                  <p className={styles.register_head_des}>Get the latest news and offers</p>
                  </div>
                  <Formik
                  initialValues={initialValuesVendor}
                  validationSchema={validationSchemaVendor}
                  onSubmit={handleSubmitVedor}>
                  {({ handleSubmit, errors, touched }) => (
                      <form onSubmit={handleSubmit}>
                      <div className={styles.register_form_input}>
                        <Field type='text' placeholder='Enter your shop name' name='shopName' className={styles.input} ></Field>
                        <ErrorMessage name="shopName" component="div" className={styles.errors_input} />
                        <div className={styles.line}></div>
                      </div>
                      <div className={styles.register_form_input}>
                        <Field type='text' placeholder='Enter your full name' name='fullName' className={styles.input} ></Field>
                        <ErrorMessage name="fullName" component="div" className={styles.errors_input} />
                        <div className={styles.line}></div>
                      </div>
                      <div className={styles.register_form_input}>
                        <Field  type='text' placeholder='Enter your email' name='email' className={styles.input}></Field>
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                        <ErrorMessage name="email" component="div" className={styles.errors_input} />
                        <div className={styles.line}></div>
                      </div>
                      <div className={styles.register_form_input}>
                        <Field type='text' placeholder='Enter your phone' id='phone' name='phone' className={styles.input}></Field>
                        <ErrorMessage name="phone" component="div" className={styles.errors_input}/>
                        <div className={styles.line}></div>
                      </div>
                      <div className={styles.register_form_input}>
                        <Field type='text' placeholder='Enter your address' id='address' name='address' className={styles.input}></Field>
                        <ErrorMessage name="address" component="div" className={styles.errors_input}/>
                        <div className={styles.line}></div>
                      </div>
                      <div className={styles.register_form_input}>
                        {/* <input type='text' placeholder='Enter your password' name='password'/> */}
                        <Field type='password' id='password' name='password' placeholder='Enter your password' className={styles.input}></Field>
                        <ErrorMessage name="password" component="div" className={styles.errors_input}/>
                        <div className={styles.line}></div>
                      </div>
                      <div className={styles.register_form_input}>
                        <Field type='password' placeholder='Confirm your password' name='confirmPassword' className={styles.input}></Field>
                        <ErrorMessage name="confirmPassword" component="div" className={styles.errors_input} />
                        <div className={styles.line}></div>
                      </div>
                      
                      <div className={styles.register_form_button}>
                      <input type='submit' value='Submit' className={styles.input_submit}/> 
                      </div>
                  </form>
                      )}
                  </Formik>
                  <div className={styles.register_form_link_wrap}>
                  <Link href='#' className={`${styles.register_form_link} hover-under`}  onClick={onSignInHandle}> <p>Sign In</p></Link>
                  <Link href='#' className={`${styles.register_form_link} hover-under`} onClick={onUserHandle}> <p>Sign Up</p></Link>
                  </div>
                </div>}
                </div>
                <div className={styles.register_img}>
                  <div className={styles.register_img_wrap}>
                  <img src="/images/img-form.jpg" alt=""  className='img-basic img-fill'/>
                  </div>
                </div>
              </div>
            </section>
      </div>
    </main>
  </div>
    }
    </React.Fragment>
  );
}
