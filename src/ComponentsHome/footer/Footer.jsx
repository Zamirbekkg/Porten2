import "./footer.scss"

const Footer = () => {

  return (
    <div>
      <div className="footer ">

        <div className="footer_text">
          <div className="footer_store">
          <h3>About Store</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse.</p>
      </div>
          <div className="footer_categories">
          <h3>Categories</h3>
            <div className="buton">
             <button className="timeF">часы</button>
             <button className="bros">брослеты</button>
             <button className="rem">ремни</button>
             <button className="izdel">ювелирные изделия</button>
             <button className="thapon">запонки</button>
            </div>
          </div>
          <div className="footer_mailing">
          <h3>Newsletter</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
        </div>
        </div>
      </div>
      <div className="footer_end">
      <p>© 2020 All rights reserved</p>
      <p>Сделано Figma.info</p>
      </div>
    </div>
  )
}

export default Footer