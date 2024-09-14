import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect } from 'react';
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
export default function  animGlobal(){
  function titleAnim(className:string){
    return {opacity: 0, yPercent: 60, duration: .6, stagger:.02, clearProps:'all'}
  }
  // gsap.registerPlugin(useGSAP);
  function clearProps(el:any) {
    gsap.set(el, {clearProps: 'all'})
  }
  const viewport = {
    w: window.innerWidth,
    h: window.innerHeight
  }
  const colapSection=(classNameTop:any, classNameBottom:any)=>{
    console.log(classNameTop)
    console.log(classNameBottom)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${classNameBottom}`,
        start: `top bottom`,
        end: 'top top',
        scrub: .2,
      }
    });

    tl.to(`.${classNameTop}`, { opacity:0,transformOrigin: 'top',scale:.8, duration: 1, ease: 'none' })
  }
  const  setupImgReveal=(wralEl:any, innerEl:any, scrollParams = {
    trigger: wralEl,
    start: 'top top+=65%',
    once: true,
    // markers:true,
  }, dur = 1.2, delay = 0.1) =>{
    if (!scrollParams) {
      return;
    }

    wralEl.style.overflow = 'hidden';
    wralEl.style.backgroundColor = 'transparent';
    wralEl.style.pointerEvents = 'none';
  
    // Set styles for inner element
    innerEl.style.clipPath = 'polygon(-1% 102%, -1% var(--col-1), 25% var(--col-1), 25% 102%, 25% var(--col-2), 50% var(--col-2), 50% 102%, 50% var(--col-3), 75% var(--col-3), 75% 102%, 75% var(--col-4), 101% var(--col-4), 101% 102%)';
    innerEl.style.setProperty('--col-1', '100%');
    innerEl.style.setProperty('--col-2', '100%');
    innerEl.style.setProperty('--col-3', '100%');
    innerEl.style.setProperty('--col-4', '100%');
  
    // Create GSAP timeline
    let tlImg = gsap.timeline({
      scrollTrigger: scrollParams,
      onComplete() {
        if (window.innerWidth > 767) {
          clearProps(wralEl);
          clearProps(innerEl);
        }
      }
    });
  
    // Define GSAP animations
    tlImg
      .from(innerEl, { scale: 1.4, duration: dur, ease: 'power1.out' })
      .to(innerEl, { '--col-1': '0%', duration: dur, ease: 'power1.out' }, '<=0')
      .to(innerEl, { '--col-2': '0%', duration: dur - delay, ease: 'power1.out' }, `<=${delay}`)
      .to(innerEl, { '--col-3': '0%', duration: dur - delay * 2, ease: 'power1.out' }, `<=${delay}`)
      .to(innerEl, { '--col-4': '0%', duration: dur - delay * 3, ease: 'power1.out' }, `<=${delay}`);
  }
  return {
    setupImgReveal,
    colapSection
  };

}
 function Cursor(){
  const parseRem = (input:number) => {
    return input / 10 * parseFloat(getComputedStyle(document.querySelector('html')).fontSize);
}
    useEffect(() => {
        const blob = document.getElementById('blob');
        const blobPath = document.getElementById('blob-path');
        let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
        let blobX = window.innerWidth / 2, blobY = window.innerHeight / 2;
        let vx = 0, vy = 0;
        const friction = 0.85;
        const attraction = 0.03;
        const maxDeformation = 5;
    
        const handleMouseMove = (event:any) => {
            if(!document.querySelector('.cursor').classList.contains('active')){
                document.querySelector('.cursor').classList.add('active');
            }
            mouseX = event.clientX;
            mouseY = event.clientY;
        };
        const reset= ()=>{
          document.querySelector('.cursor-default').classList.add('active');
          document.querySelectorAll('.cursor-not-default').forEach((el: HTMLElement)=>{
            el.classList.remove('active');
          })
        }
        const changeCursor= (className:string)=>{
          document.querySelector('.cursor-default').classList.remove('active');
          document.querySelectorAll('.cursor-not-default').forEach((el: HTMLElement)=>{
            el.classList.remove('active');
          })
          document.querySelector(`.${className}`).classList.add('active');
        }
        const updateCursor=()=>{
          const hoveredElements = document.querySelectorAll('[cursor-data]:hover');
          if(hoveredElements.length>0){
            let attr:string='';
            hoveredElements.forEach((element) => {
              attr= element.getAttribute('cursor-data');
            });
            switch (attr){
              case 'detail':
                changeCursor('cursor-detail')
                break;
              case 'btn':
                changeCursor('cursor-btn');
               let targetBtnInner = document.querySelector('[cursor-data="btn"]:hover span'); 
                mouseX= targetBtnInner.getBoundingClientRect().right + parseRem(20); 
                mouseY= targetBtnInner.getBoundingClientRect().top + targetBtnInner.getBoundingClientRect().height / 2 - 5 ; 
                break;
            }
          }
          else{
            reset();
          }
        }
        const animate = () => {
          updateCursor();
          const dx = mouseX - blobX;
          const dy = mouseY - blobY;
    
          vx += dx * attraction;
          vy += dy * attraction;
    
          vx *= friction;
          vy *= friction;
    
          blobX += vx;
          blobY += vy;
    
          const deformationX = Math.max(Math.min(vx, maxDeformation), -maxDeformation);
          const deformationY = Math.max(Math.min(vy, maxDeformation), -maxDeformation);
    
          // Create a new path with subtle deformation
          const pathData = `
            M50,10
            Q65,${10 + deformationY * dx / 20}, 70,30
            Q${70 + deformationX * dy / 20},45, 50,50
            Q30,45, 30,30
            Q35,${10 + deformationY * dx / 20}, 50,10
            Z
          `;
    
          blobPath.setAttribute('d', pathData);
          Array.from(document.querySelectorAll('.cursor-inner')).forEach((el: HTMLElement) => {
            el.style.transform = `translate(${blobX}px, ${blobY}px)`;
          });
          
          requestAnimationFrame(animate);
        };
    
        document.addEventListener('mousemove', handleMouseMove);
        animate();
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
return(
    <div className='cursor'>
      <div className='cursor-btn  cursor-not-default '>
            <div className='cursor-btn-wrap cursor-inner'>
            <svg width="100%"  viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10L0 0H12L6 10Z" fill="currentColor"/>
            </svg>

            </div>
          </div>
          <div className='cursor-default active'>
          <svg id="blob" width="100%"  viewBox="0 0 100 60" className='cursor-inner'>
            <path id="blob-path" fill="currentColor" d="M50,10 Q70,10 70,30 Q70,50 50,50 Q30,50 30,30 Q30,10 50,10 Z"/>
          </svg>
          </div>
          <div className='cursor-detail  cursor-not-default '>
            <div className='cursor-detail-wrap cursor-inner'>
              <p className='cursor-detail-wrap-txt'>View</p>
            </div>
          </div>
          
    </div>
)
}
export  {Cursor};