// components/LoadingSpinner.js
import { useEffect } from 'react';
import style from './loading.module.css'
const LoadingSpinner = () => {
  useEffect(() => {
    const M = Math,
      PI = M.PI,
      TWOPI = PI * 2,
      HALFPI = PI / 2,
      canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      width = (canvas.width = 350),
      height = (canvas.height = 350),
      cx = width / 2,
      cy = height / 2,
      count = 40,
      sizeBase = 0.1,
      sizeDiv = 5
    let tick:number = 0;

    ctx.translate(cx, cy);

    const loop=() => {
      requestAnimationFrame(loop);
      ctx.clearRect(-width / 2, -height / 2, width, height);
      ctx.fillStyle = '#000';
      let angle = tick / 8,
        radius = -50 + M.sin(tick / 15) * 100,
        size;

      for (let i = 0; i < count; i++) {
        angle += PI / 64;
        radius += i / 30;
        size = sizeBase + i / sizeDiv;

        ctx.beginPath();
        ctx.arc(M.cos(angle) * radius, M.sin(angle) * radius, size, 0, TWOPI, false);
        ctx.fillStyle = 'hsl(0, 0%, 0%)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(M.cos(angle) * -radius, M.sin(angle) * -radius, size, 0, TWOPI, false);
        ctx.fillStyle = 'hsl(0, 0%, 0%)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(M.cos(angle + HALFPI) * radius, M.sin(angle + HALFPI) * radius, size, 0, TWOPI, false);
        ctx.fillStyle = 'hsl(0, 0%, 0%)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(M.cos(angle + HALFPI) * -radius, M.sin(angle + HALFPI) * -radius, size, 0, TWOPI);
        ctx.fillStyle = 'hsl(0, 0%, 0%)';
        ctx.fill();
      }

      tick++;
    }

    loop();
    document.getElementById(`${style.loading_spinner}`).appendChild(canvas);
  }, []);

  return (<div id={style.loading_spinner} >
    <div className={style.loading_spinner_overlay}></div>
  </div>)
};
const FirstLoading = ({ setFirstLoad }) => {
  useEffect(() => {
    const height = window.innerHeight; // Height of the viewport
    const width = window.innerWidth; // Width of the viewport
    const scale = (Math.sqrt(height * height + width * width)) / width;
    const angleRad = Math.atan2(height, width);
    const angleDeg = angleRad * (180 / Math.PI);

    // Apply transform styles to the divider
    const divider = document.querySelector(`.${style.divider}`);
    if (divider) {
      (divider as HTMLElement).style.transform = `rotate(-${angleDeg}deg) scaleX(${scale})`;
    }

    let i = 0;
    const increaseWidth = () => {
      if (i <= 100) {
        document.documentElement.style.setProperty('--divider-width', `${i}%`);
        i++;
        requestAnimationFrame(increaseWidth);
      } else {
        const wrap = document.querySelector(`.${style.loading_first_page}`);
       
        setTimeout(()=>{
          if (wrap) {
            (wrap as HTMLElement).classList.add(style.active);
        document.documentElement.style.setProperty('--divider-width', `0%`);
          }
          setFirstLoad(true);
          },300)
      }
    };

    increaseWidth();

    // Cleanup function if needed
    return () => {
      document.documentElement.style.setProperty('--divider-width', '0%');
    };
  }, [setFirstLoad]);

  return (
    <div className={style.loading_first_page}>
      <div className={style.loading_first_page_wrap}>
        <div className={style.loading_first_page_top}></div>
        <div className={style.divider}></div>
        <div className={style.loading_first_page_bottom}></div>
      </div>
    </div>
  );
};

export {FirstLoading};
export default LoadingSpinner;
