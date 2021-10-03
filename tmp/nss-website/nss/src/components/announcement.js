import React from 'react'

function Announcement() {
    return (
      // //  <!-- News Section -->
      //         <div className="page-section" id="Main">
      //             {/* <!-- Container Start --> */}
      //             <div className="container-fluid">
      //                 <div className="row">
      //                     <div className="col-md-12 pad-0">
      //                         <div className="news color">
      //                             <span className="stext">Latest News</span>
      //                             <span id="latestNews" className="text1"><marquee behavior='scroll' direction='left' onmouseover='this.stop();' onmouseout='this.start();' scrollamount='3'><a href ='Admin/Files/Document/09252021105550_Guidelines for Entrance Test in English 24.09.21.pdf' target='_blank'>User's Guideline for VET/VRET entrance test (English)</a> &nbsp;<img src='Assets/images/new.gif' width='60px'/> &nbsp;|&nbsp; <a href ='Admin/Files/Document/09252021105625_Guidelines for Entrance Test in Hindi 24.09.21.pdf' target='_blank'>User's Guideline for  VET/VRET entrance test (Hindi)</a> &nbsp;<img src='Assets/images/new.gif' width='60px'/> &nbsp;|&nbsp; <a href ='Admin/Files/Document/09132021115146_09092021062247_M Tech Corrigendum 09.09.21.pdf' target='_blank'>Corrigendum for M.Tech admission 2021-22</a> &nbsp;<img src='Assets/images/new.gif' width='60px'/> &nbsp;|&nbsp; <a href ='http://gguonline.in' target='_blank'>MOCk test/main Entrance test VET/VRET/Online Application Form for Admission 2021-22</a> &nbsp;<img src='Assets/images/new.gif' width='60px'/> &nbsp;|&nbsp; </marquee></span>
      //                         </div>
      //                     </div>
      //                 </div>
      //             </div>
      //         </div>
      <>
        <div className="col-md-4">
          <div className="box-event">
            <div className="cs-section-title col-md-12">
              <h2>
                <i className="fas fa-list-ul"></i>&nbsp;Notice Board
              </h2>
            </div>
            <div className="borderBox">
              <ul id="Notice" className="cs-iconlist">
                <marquee
                  direction="up"
                  height="270px"
                  behavior="scroll"
                  scrollamount="2"
                  onmouseover="this.stop(); "
                  onmouseout="this.start();"
                >
                  
                  <li style={{padding:"20px 0"}}>
                    <a
                      href="Admin/Files/Document/08302021032631_DBT Sponsered M.Sc. Programme Admission in GGV 2021-23 30.08.21.pdf"
                      className="anchor"
                    >
                      <img src="Assets/images/bookmark3.png" width="20px" />{" "}
                      &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab aspernatur ipsa magnam placeat beatae architecto quasi, esse dolorem eius alias, possimus recusandae quo? Quasi perferendis cum maiores voluptatibus in! &nbsp;
                      <img src="Assets/images/new.gif" width="50px" />
                    </a>
                    <p className="date">
                      <i className="far fa-calendar-alt"></i>&nbsp;30-08-2021
                    </p>
                  </li>
                  <li style={{padding:"20px 0"}}>
                    <a
                      href="Admin/Files/Document/08272021014622_Time  Table 238 dt 27.08.21.pdf"
                      className="anchor"
                    >
                      <img src="Assets/images/bookmark3.png" width="20px" />{" "}
                      &nbsp; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nemo, dicta consequuntur iste fuga consectetur natus dolorum facere repellendus sed neque sit ut similique, aspernatur quas. Illo necessitatibus similique maxime?
                      &nbsp;
                      <img src="Assets/images/new.gif" width="50px" />
                    </a>
                    <p className="date">
                      <i className="far fa-calendar-alt"></i>&nbsp;27-08-2021
                    </p>
                  </li>
                  <li style={{padding:"20px 0"}}>
                    <a
                      href="Admin/Files/Document/08272021045905_Biotechnolgy time Table 27.08.21.pdf"
                      className="anchor"
                    >
                      <img src="Assets/images/bookmark3.png" width="20px" />{" "}
                      &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe dolor assumenda placeat voluptates tenetur, veniam quasi ipsam neque vitae nihil, in, fuga natus accusantium id! Vitae modi beatae dolorem? &nbsp;
                      <img src="Assets/images/new.gif" width="50px" />
                    </a>
                    <p className="date">
                      <i className="far fa-calendar-alt"></i>&nbsp;27-08-2021
                    </p>
                  </li>
                  <li style={{padding:"20px 0"}}>
                    <a
                      href="Admin/Files/Document/08262021051746_Non teaching R& F 26.08.21.pdf"
                      className="anchor"
                    >
                      <img src="Assets/images/bookmark3.png" width="20px" />{" "}
                      &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, unde quis ipsam cum omnis ullam quam quisquam quia placeat distinctio, perspiciatis incidunt repudiandae consectetur? Placeat nulla velit at quas neque? &nbsp;
                      <img src="Assets/images/new.gif" width="50px" />
                    </a>
                    <p className="date">
                      <i className="far fa-calendar-alt"></i>&nbsp;26-08-2021
                    </p>
                  </li>
                  <li style={{padding:"20px 0"}}>
                    <a
                      href="Admin/Files/Document/08252021025120_Task Force Committee_25.8.21.pdf"
                      className="anchor"
                    >
                      <img src="Assets/images/bookmark3.png" width="20px" />{" "}
                      &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi distinctio laborum accusantium optio maiores quisquam molestiae repellat, animi ducimus possimus dignissimos perspiciatis neque odio dolor fugit ipsam vero? Repellat! &nbsp;
                      <img src="Assets/images/new.gif" width="50px" />
                    </a>
                    <p className="date">
                      <i className="far fa-calendar-alt"></i>&nbsp;25-08-2021
                    </p>
                  </li>
                  <li style={{padding:"20px 0"}}>
                    <a href="Admin/Files/Document/Advt-Eng.pdf" className="anchor">
                      <img src="Assets/images/bookmark3.png" width="20px" />{" "}
                      &nbsp; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, odio porro? Sequi beatae velit adipisci repellat, iusto laborum autem voluptatum itaque repudiandae quasi nostrum ab ratione reprehenderit deserunt provident! Vitae? &nbsp;
                      <img src="Assets/images/new.gif" width="50px" />
                    </a>
                    <a
                      href="https://ggu.ac.in/Recruit.aspx"
                      className="anchor"
                      target="_blank"
                    >
                      For more details
                    </a>
                    <p className="date">
                      <i className="far fa-calendar-alt"></i>&nbsp;25-08-2021
                    </p>
                  </li>
                  <li style={{padding:"20px 0"}}>
                    <a
                      href="Admin/Files/Document/08272021053451_International conference brochure 2.0_27.8.21.pdf"
                      className="anchor"
                    >
                      <img src="Assets/images/bookmark3.png" width="20px" />{" "}
                      &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus excepturi nam iusto vero eum sequi enim perferendis ipsa, natus aperiam dolores reiciendis alias dignissimos quia quo voluptatem inventore officia soluta! &nbsp;
                      <img src="Assets/images/new.gif" width="50px" />
                    </a>
                    <a
                      href="https://ggu.ac.in/Admin/Files/Document/08052021052055_Registration%20Firm%2030.07.21.pdf"
                      className="anchor"
                      target="_blank"
                    >
                      Registration Form
                    </a>
                    <p className="date">
                      <i className="far fa-calendar-alt"></i>&nbsp;06-08-2021
                    </p>
                  </li>
                  <li style={{padding:"20px 0"}}>
                    <a
                      href="Admin/Files/Document/HousekeepingExten250521 12.05.21.pdf"
                      className="anchor"
                    >
                      <img src="Assets/images/bookmark3.png" width="20px" />{" "}
                      &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quae voluptates, nisi quis mollitia ipsam magni quibusdam nobis vitae, ratione neque. Officiis a iusto, quae consectetur excepturi natus perspiciatis corporis?
                      &nbsp;
                      <img src="Assets/images/new.gif" width="50px" />
                    </a>
                    <p className="date">
                      <i className="far fa-calendar-alt"></i>&nbsp;
                    </p>
                  </li>
                  <li style={{padding:"20px 0"}}>
                    <a
                      href="Admin/Files/Document/Forestry project cancel 03.05.21.pdf"
                      className="anchor"
                    >
                      <img src="Assets/images/bookmark3.png" width="20px" />{" "}
                      &nbsp; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet explicabo adipisci fugit quod, et asperiores sequi deleniti quidem beatae sunt. Exercitationem quibusdam suscipit tempora nisi nulla iste atque ad doloremque.&nbsp;
                      <img src="Assets/images/new.gif" width="50px" />
                    </a>
                    <p className="date">
                      <i className="far fa-calendar-alt"></i>&nbsp;
                    </p>
                  </li>
                  <li style={{padding:"20px 0"}}>
                    <a
                      href="Admin/Files/Document/TenderNo41RAmp_30.4.21.pdf"
                      className="anchor"
                    >
                      <img src="Assets/images/bookmark3.png" width="20px" />{" "}
                      &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorem quibusdam beatae, nulla reiciendis consequatur fugit praesentium eum nihil! Eligendi laudantium molestiae necessitatibus voluptatibus eveniet ratione eius impedit eum fugiat!&nbsp;
                      <img src="Assets/images/new.gif" width="50px" />
                    </a>
                    <p className="date">
                      <i className="far fa-calendar-alt"></i>&nbsp;
                    </p>
                  </li>
                </marquee>
              </ul>
              <a
                href="UnivNoticeBoard.aspx"
                className="btn btn-danger"
                style={{marginleft:"15px"}}>
                <i className="fas fa-eye"></i> View All
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default Announcement
