import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.css'
import { IoIosArrowUp } from 'react-icons/io'
import { CiInstagram } from 'react-icons/ci'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { RiMovie2Fill } from 'react-icons/ri'
const Footer = () => {
  return (
    <div className={`${styles.outercontainer}`}>
   <div className={`${styles.container}`}>
    <div className={`${styles.container1}` }>
   <Image   className={`${styles.img}` }  src="/images/logoFarsi.svg" width={120}height={120} />
   <span  className={`${styles.spn1}` }>بازگشت به بالا<IoIosArrowUp /></span>
   </div>
   <div className={`${styles.container2}` } >
    <span className={`${styles.spn2}` }>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
    <span className={`${styles.spn3}` }>|</span>
    <span className={`${styles.spn4}` }>
۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
</span>
   </div>
   <div  className={`${styles.imgcontainer1}` }  >
    <div className={`${styles.spnimg}` }>
       <Image   className={`${styles.img1}` }  src="/images/expressDelivery.svg" width={85}height={85} /> 
       <span   className={`${styles.spanname}` } >امکان تحویل اکسپرس</span>
    </div>
  <div className={`${styles.spnimg}` }>
<Image   className={`${styles.img1}` }  src="/images/cashOnDelivery.svg" width={85}height={85} />
<span   className={`${styles.spanname}` } >  امکان پرداخت در محل</span>
  </div>
  <div className={`${styles.spnimg}` }>
<Image   className={`${styles.img1}` }  src="/images/support.svg" width={85}height={85} />
<span   className={`${styles.spanname}` } > 7روز هفته24ساعته</span>
  </div>
  <div className={`${styles.spnimg}` }>
<Image   className={`${styles.img1}` }  src="/images/daysReturn.svg" width={85}height={85} />
<span   className={`${styles.spanname}` } > هفت روز ضمانت بازگشت کالا</span>
  </div>
   </div>
   <div className={`${styles.containermenu}` } >
    <div className={`${styles.containermenu1}` }>
<p className={`${styles.p}` }>با دیجی‌کالا</p>
<a href="#" className={`${styles.a}` }>اتاق خبر دیجی‌کالا </a>
<a href="#"  className={`${styles.a}` } >فروش در دیجی‌کالا </a>
<a href="#"  className={`${styles.a}` }  >فرصت‌های شغلی </a>
<a href="#" className={`${styles.a}` } >گزارش تخلف در دیجی‌کالا</a>
<a href="#" className={`${styles.a}` } >تماس با دیجی‌کالا</a>
<a href="#" className={`${styles.a}` } >درباره دیجی‌کالا</a>
</div>
<div className={`${styles.containermenu2}` }>
<p className={`${styles.p}` }>خدمات مشتریان </p>
<a href="#" className={`${styles.a}` }>پاسخ به پرسش های متداول</a>
<a href="#"  className={`${styles.a}` } > رویه های بازگرداندن کالا  </a>
<a href="#"  className={`${styles.a}` }  > شرایط استفاده </a>
<a href="#" className={`${styles.a}` } >  حریم خصوصی </a>
<a href="#" className={`${styles.a}` } > گزارش باگ </a>
</div>
<div className={`${styles.containermenu3}` }>
<p className={`${styles.p}` }>  راهنمای خرید از دیجی‌کالا</p>
<a href="#" className={`${styles.a}` }>نحوه ثبت سفارش</a>
<a href="#"  className={`${styles.a}` } > رویه  ارسال سفارش   </a>
<a href="#"  className={`${styles.a}` }  >  شیوه های پرداخت </a>
</div>

<div className={`${styles.containermenu4}` }>
<p className={`${styles.p}` }>همراه ما باشید!</p>
<div className={`${styles.icon4}` }>
  <CiInstagram />
<FaTwitter />
<FaLinkedin />
<RiMovie2Fill />
</div>
<div>
<p className={`${styles.bama}` } >با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
</div>
<div className={`${styles.containermenusabt}` } >
<input  className={`${styles.input1}` }  type="text" placeholder='ایمیل شما'/>
<input  className={`${styles.input2}` }  type="text" placeholder='ثبت'/>
</div>
</div>
   </div>
   <div className={`${styles.containersormeyit}` }>
<div className={`${styles.containersormeyit1}` } >
  <div className={`${styles.box1}` } >
    <Image   className={`${styles.imgfooter}` }  src="/images/footerLogo2.png" width={50}height={50} />
<h2 className={`${styles.h1footer}` } >دانلود اپلیکیشن دیجی کالا</h2>
  </div>
<div  className={`${styles.box2}` }>
  <Image   className={`${styles.imgfooter2}` }  src="/images/bazzarButton.svg" width={125}height={80} />
  <Image   className={`${styles.imgfooter3}` }  src="/images/myketButton.svg" width={125}height={80} />
  <Image   className={`${styles.imgfooter4}` }  src="/images/sibAppButton.svg" width={125}height={80} />
</div>

</div>
   </div>
   </div>
    </div>
  )
}

export default Footer
