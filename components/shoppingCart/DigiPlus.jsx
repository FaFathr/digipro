
import React, { useState } from 'react'
import styles from './DigiPlus.module.css'
import { AiOutlineLeft } from "react-icons/ai";
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import DigiPlusCode from './DigiPlusCode';
import Totals from './Totals';
const DigiPlus = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className={`${styles.Digiplustitel}`}>
    <div className={`${styles.Digiplusright}`}>
      <div className={`${styles.Digitexts}`}>
      <div className={`${styles.h1d}`} >
    <h2 className={`${styles.h1}`}>دیجی پلاس</h2>
    </div>
    <div className={`${styles.h2d}`}><h4 className={`${styles.h2}`}>خدمات ویژه با اشتراک دیجی پلاس</h4></div>
    <div className={`${styles.buttond}`}><button  onClick={handleShow} className={`${styles.button}`}>دریافت این خدمات ویژه<AiOutlineLeft className={`${styles.icons}`}/></button>
    </div>
    </div>
    <Modal className={`${styles.modals}`} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className={`${styles.modalstiteldigi}`}> <h2>  دیجی پلاس </h2>  </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${styles.modalbody}`}>
       <div className={`${styles.digimodalbody}`} >
   

       </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal> 
    
    </div>

  <div className={`${styles.Digiplusleft}`}>
      <ul>
        <li>ارسال رایگان این سفارش و ۳ سفارش دیگر (در هرماه اشتراک)</li>
        <li>مهلت بیشتر مرجوعی کالا تا ۳۰ روز (جز موبایل و کالای بهداشتی)</li>
        <li>امکان ارسال فوری بعضی از کالاها ( رایگان )</li>
     </ul>
     <div className={`${styles.codimg}`}>
     <DigiPlusCode className={`${styles.codimgbn}`}/>
     </div>
    </div>
  </div>
  )
}

export default DigiPlus
