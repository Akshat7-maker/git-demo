// // ArtistHub.tsx - Full Updated Code with Reusable Components

// "use client";

// import { MoveLeft, MoveRight } from "lucide-react";
// import styles from "./ArtistHubPreview.module.css";

// // Reusable Brand Card Component
// const BrandCard = ({ image, title, subtitle, description }: any) => (
//   <div className={styles.cardArtist}>
//     <img src={image} alt={title} className={styles.artistImg} />
//     <div className={`${styles.cardDataArtist} ${styles.positionRelative}`}>
//       <h3 className={`${styles.artHeadCard} ${styles.roboto} ${styles.font24}`}>{title}</h3>
//       <p className={`${styles.playfair} ${styles.font16} ${styles.para1card}`}>{subtitle}</p>
//       <p className={`${styles.playfair} ${styles.font16} ${styles.para2card}`}>{description}</p>
//       <div className={`${styles.positionRelative} ${styles.learnTag}`}>
//         <div className={`${styles.roboto} ${styles.font14} ${styles.flexRow}`}>
//           LEARN MORE
//           <img src="/images/arrow-right.png" alt="" />
//         </div>
//         <img src="/images/Rectangle 378.png" alt="" className={styles.marhinTop} />
//       </div>
//     </div>
//   </div>
// );

// // Reusable Education Card Component
// const EducationCard = ({ title, subtitle, description, image, showSaveTag = false }: any) => (
//   <div className={styles.educationCardOne}>
//     <div className={styles.flexBetween}>
//       <div>
//         <div className={`${styles.roboto} ${styles.fs5} ${styles.pb1}`}>{title}</div>
//         <div className={`${styles.playfair} ${styles.fs4}`}>{subtitle}</div>
//       </div>
//       <div className={styles.kristinaContainer}>
//         <img src={image} alt={title} className={styles.kristinaImg} />
//       </div>
//     </div>
//     <p className={`${styles.playfair} ${styles.fs6} ${styles.kristinaPara}`}>{description}</p>
//     <div className={styles.flexBetween}>
//       <div className={styles.positionRelative}>
//         <div className={`${styles.roboto} ${styles.font14} ${styles.flexRow}`}>
//           LEARN MORE
//           <img src="/images/arrow-right.png" alt="" />
//         </div>
//         <img src="/images/Rectangle 378.png" alt="" className={styles.marhinTop} />
//       </div>
//       {showSaveTag && <div className={`${styles.fs4} ${styles.saveTag} ${styles.roboto}`}>SAVE 10%</div>}
//     </div>
//   </div>
// );

// // Reusable Event Card Component
// const EventCard = ({ showSaveTag = false }: any) => (
//   <div className={styles.eventCardOne}>
//     <div className={styles.flexBetween}>
//       <div className={styles.wedcomImgContainer}>
//         <img src="/images/wedcon.png" alt="Wedcon" className={styles.wedcomImg} />
//       </div>
//       {showSaveTag && <div className={`${styles.roboto} ${styles.fs4} ${styles.goldenSaveTag}`}>SAVE</div>}
//     </div>
//     <h5 className={`${styles.roboto} ${styles.fs5} ${styles.wedconheading}`}>WEDCON 2026</h5>
//     <div className={`${styles.playfair} ${styles.fs4}`}>
//       The Business Event Every Wedding Pro Needs to Attend
//     </div>
//     <p className={`${styles.playfair} ${styles.fs6} ${styles.paddingParaEvent}`}>
//       If you're serious about making 2026 your most booked, profitable, and clear-minded year yet — Wedcon is where it starts.
//     </p>
//     <p className={`${styles.playfair} ${styles.fs6}`}>
//       Every wedding pro hits that moment where things feel stuck — bookings slow down, prices plateau, and it seems like everyone else is flying ahead. That's where Wedcon changes everything.
//     </p>
//     <div className={styles.positionRelative}>
//       <div className={`${styles.roboto} ${styles.font14} ${styles.flexRow} ${styles.paddingLearnTop}`}>
//         <span className={styles.learnMoreUnderline}>LEARN MORE</span>
//         <img src="/images/arrow-right-white.png" alt="" />
//       </div>
//     </div>
//   </div>
// );

// // Reusable Business Card Component
// const BusinessCard = ({ title, subtitle, description1, description2, image }: any) => (
//   <div className={styles.businessCardOne}>
//     <div className={styles.flexBetween}>
//       <div>
//         <div className={`${styles.roboto} ${styles.fs5} ${styles.pb1}`}>{title}</div>
//         <div className={`${styles.playfair} ${styles.fs4}`}>{subtitle}</div>
//       </div>
//       <div className={styles.wedconCntainer}>
//         <img src={image} alt={title} className={styles.wedImg} />
//       </div>
//     </div>
//     <p className={`${styles.playfair} ${styles.fs6} ${styles.paddingParaEvent}`}>{description1}</p>
//     <p className={`${styles.playfair} ${styles.fs6} ${styles.paddingBottomPara}`}>{description2}</p>
//     <div className={`${styles.positionRelative} ${styles.learnTag} ${styles.pt2}`}>
//       <div className={`${styles.roboto} ${styles.font14} ${styles.flexRow}`}>
//         LEARN MORE
//         <img src="/images/arrow-right.png" alt="" />
//       </div>
//       <img src="/images/Rectangle 378.png" alt="" className={styles.marhinTop} />
//     </div>
//   </div>
// );

// export default function ArtistHub() {
//   const brandCards = [
//     {
//       image: "/images/NATULIQUE.jpg",
//       title: "NATULIQUE",
//       subtitle: "Certified Organic Haircare for Professional Artists and Salons",
//       description: "At The Hair & Makeup Hub, we're passionate about introducing our artists to professional brands that care as much about quality and sustainability as they do about results — and NATULIQUE is one of them."
//     },
//     {
//       image: "/images/delilah.jpg",
//       title: "DELILAH",
//       subtitle: "Ethical Luxury Makeup for Professional Artists",
//       description: "Delilah creates luxury, cruelty-free makeup designed for artists who value performance and ethics. Known for flawless, skin-enhancing finishes, their pro-quality products are favourites for bridal, commercial, and red-carpet looks."
//     },
//     {
//       image: "/images/Monuskin Skincare.jpg",
//       title: "MONUSKIN",
//       subtitle: "The Best Skincare for Makeup Artists Who Want a Flawless Base",
//       description: "MONUSKIN is a go-to skincare range for professional makeup artists looking for flawless, long-lasting application results. Vegan, cruelty-free, and backed by decades of research, their products prep the skin beautifully for bridal, editorial, and studio work."
//     }
//   ];

//   return (
//     <main>
//       <section className={styles.artistHub}>
//         <section
//           className={styles.heroSection}
//           style={{
//             backgroundImage: "url('/images/hero-img.png')",
//           }}
//         >

//           <section className={styles.homeContent}>
//             <div className={styles.cont}>
//               <h1 className={`${styles.textHeading} ${styles.nameFont}`}>
//                 Your Stage.
//                 <span className={styles.goldenHeading}> Your Spotlight.</span>
//               </h1>
//             </div>
//           </section>
//         </section>

//         <section className={styles.homeContent}>
//           <div className={styles.cont}>
//             <div className={styles.paddingArtistHeader}>
//               <h3 className={`${styles.roboto} ${styles.artistTitle}`}>
//                 THE ARTIST HUB FOR <span className={styles.colorLove}>HAIR & MAKEUP</span> ARTISTS
//               </h3>
//               <p className={`${styles.playfair} ${styles.padingParaArtistmain}`}>
//                 Access curated discounts, masterclasses, business tools, pro products, and exclusive opportunities designed to help hair and makeup artists grow their careers.
//               </p>
//               <div className={`${styles.oneBtn} ${styles.paddingButtons}`}>
//                 <a href="/branding-listing/find-artist">
//                   <button className={styles.nameFont}>HAIR AND MAKEUP COURSES</button>
//                 </a>
//                 <a href="/auth/signup">
//                   <button className={styles.nameFont}>BUSINESS TRAINING & MENTORSHIP</button>
//                 </a>
//                 <a href="auth/signup">
//                   <button className={styles.nameFont}>INDUSTRY EVENTS & WORKSHOPS</button>
//                 </a>
//                 <a href="auth/signup">
//                   <button className={styles.nameFont}>RECOMMENDED PRO TOOLS & PRODUCTS</button>
//                 </a>
//                 <a href="auth/signup">
//                   <button className={styles.nameFont}>BUSINESS SERVICES</button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className={styles.artistPage}>
//           <section>
//             <h3 className={`${styles.roboto} ${styles.headingBrand}`}>
//               BRANDS WE <span className={styles.colorLove}>LOVE</span>
//             </h3>
//             <p className={styles.brandlovePara}>
//               These are the professional beauty brands our hair and makeup artists rely on every day, products trusted on set, backstage, and with clients. We only feature brands we genuinely stand behind, helping you discover pro favourites, kit essentials, and exclusive discounts from the most respected names in beauty.
//             </p>
//           </section>

//           <section className={styles.cardSection4}>
//             <div className={styles.flexGap}>
//               {brandCards.map((card, index) => (
//                 <BrandCard key={index} {...card} />
//               ))}
//             </div>
//           </section>

//           <section className={styles.educationCardsSection}>
//             <h3 className={`${styles.roboto} ${styles.educationHeading}`}>
//               EDUCATION & COURSES
//             </h3>
//             <div className={styles.eduCardsConatiner}>
//               <EducationCard
//                 title="KRISTINA GASPERAS ONLINE ACADEMY"
//                 subtitle="Learn from the Best in Bridal Hair and Makeup"
//                 description="If you're serious about taking your hair and makeup artistry to the next level, the Kristina Gasperas Online Academy is one of the most respected training platforms in the beauty industry."
//                 image="/images/KristinaGasperas.jpg"
//                 showSaveTag={false}
//               />
//               <EducationCard
//                 title="KRISTINA GASPERAS ONLINE ACADEMY"
//                 subtitle="Learn from the Best in Bridal Hair and Makeup"
//                 description="If you're serious about taking your hair and makeup artistry to the next level, the Kristina Gasperas Online Academy is one of the most respected training platforms in the beauty industry."
//                 image="/images/KristinaGasperas.jpg"
//                 showSaveTag={true}
//               />
//             </div>
//           </section>

//           <section className={styles.industrySection}>
//             <h3 className={`${styles.roboto} ${styles.industryHeading}`}>
//               INDUSTRY EVENTS & WORKSHOPS
//             </h3>
//             <div className={styles.eventCardContainer}>
//               <EventCard showSaveTag={true} />
//               <EventCard showSaveTag={false} />
//               <EventCard showSaveTag={false} />
//             </div>
//           </section>

//           <section className={styles.businessCoursesSection}>
//             <h3 className={`${styles.roboto} ${styles.businessHeading}`}>
//               BUSINESS COURSES & MENTORSHIP
//             </h3>
//             <div className={styles.flexGap}>
//               <BusinessCard
//                 title="WEDCON 2026"
//                 subtitle="The Business Event Every Wedding Pro Needs to Attend"
//                 description1="If you're serious about making 2026 your most booked, profitable, and clear-minded year yet — Wedcon is where it starts."
//                 description2="Every wedding pro hits that moment where things feel stuck — bookings slow down, prices plateau, and it seems like everyone else is flying ahead. That's where Wedcon changes everything."
//                 image="/images/WedconTransparent.png"
//               />
//               <BusinessCard
//                 title="WEDCON 2026"
//                 subtitle="The Business Event Every Wedding Pro Needs to Attend"
//                 description1="If you're serious about making 2026 your most booked, profitable, and clear-minded year yet — Wedcon is where it starts."
//                 description2="Every wedding pro hits that moment where things feel stuck — bookings slow down, prices plateau, and it seems like everyone else is flying ahead. That's where Wedcon changes everything."
//                 image="/images/WedconTransparent.png"
//               />
//             </div>
//           </section>

//           <section className={styles.educationCardsSection}>
//             <h3 className={`${styles.roboto} ${styles.businessServicesHeading} ${styles.pb3}`}>
//               BUSINESS SERVICES FOR CREATIVES
//             </h3>
//             <div className={styles.eduCardsConatiner}>
//               <EducationCard
//                 title="SED IN VIVERRA AUGUE"
//                 subtitle="Phasellus blandit lacinia placerat. Etiam laoreet"
//                 description="Sed in viverra augue. Phasellus blandit lacinia placerat. Etiam laoreet aliquet lacus, id tristique enim ornare eu. Pellentesque imperdiet, sapien ac rutrum eleifend, erat neque egestas erat, sit amet sollicitudin ante lorem in ex. Donec non magna quis diam rutrum lacinia."
//                 image="/images/KristinaGasperas.jpg"
//                 showSaveTag={true}
//               />
//               <EducationCard
//                 title="NEUMANN GRAHAM PHOTOGRAPHY"
//                 subtitle="Creative Wedding & Styled Shoot Specialists in Wiltshire"
//                 description="Meet Neumann Graham Photography, a talented husband-and-wife team based in Wiltshire, known for their creative eye, relaxed approach, and beautifully timeless imagery."
//                 image="/images/Neuman.png"
//                 showSaveTag={false}
//               />
//             </div>
//           </section>

//           <section className={styles.charitySection}>
//             <h3 className={`${styles.roboto} ${styles.charityHeading} ${styles.pb4}`}>
//               CHARITY PARTNERS
//             </h3>
//             <div className={styles.flexGap}>
//               <div className={styles.charityCard}>
//                 <div className={styles.flexBetween}>
//                   <div>
//                     <div className={`${styles.roboto} ${styles.fs5} ${styles.lookHeading}`}>
//                       LOOK GOOD FEEL BETTER
//                     </div>
//                     <div className={styles.registedFont}>Registered charity number: 03922046</div>
//                     <div className={`${styles.playfair} ${styles.fs4} ${styles.joinUsPara}`}>
//                       Join Us in Supporting Look Good Feel Better
//                     </div>
//                   </div>
//                   <div>
//                     <img src="/images/LookGood.jpg" alt="" className={styles.lookGoodImg} />
//                   </div>
//                 </div>
//                 <p className={`${styles.playfair} ${styles.fs6} ${styles.paraCharity}`}>
//                   We're inviting all our artists — and our wider community — to give back by supporting Look Good Feel Better, a UK-wide specialist cancer support charity that helps people manage the visible and emotional effects of cancer treatment.
//                 </p>
//                 <div className={`${styles.positionRelative} ${styles.learnTag} ${styles.pt2}`}>
//                   <div className={`${styles.roboto} ${styles.font14} ${styles.flexRow}`}>
//                     LEARN MORE
//                     <img src="/images/arrow-right.png" alt="" />
//                   </div>
//                   <img src="/images/Rectangle 378.png" alt="" className={styles.marhinTop} />
//                 </div>
//               </div>
//               <div className={styles.imgCharityConatiner}>
//                 <img src="/images/CharityImag.jpg" alt="" className={styles.charityImg} />
//               </div>
//             </div>
//           </section>

//           <section className={styles.affiliateSection}>
//             <div className={styles.affiliateContainer}>
//               <h3 className={`${styles.affiliateHeading} ${styles.roboto}`}>AFFILIATE DISCLOSURE</h3>
//               <p className={`${styles.playfair} ${styles.fs6}`}>
//                 Some links on The Artist Hub are affiliate links, which means we may earn a small commission if you choose to make a purchase, at no extra cost to you. We only promote products and tools we genuinely love and believe will benefit our artist community.
//               </p>
//             </div>
//           </section>
//         </section>
//       </section>

//     </main>
//   );
// }

"use client";

export default function ArtistHub({ data }: any) {
  console.log(data);
  return (
    <>
      <main>
        <section className="full-home ArtistHub">
          <section
            className="hero-section"
            style={{
              backgroundImage: "url('/images/hero-img.png')",
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
              position: "relative",
              zIndex: 1,
            }}
          >
            <section className="home-contant">
              <div className="cont" style={{ position: "relative", zIndex: 5 }}>
                <h1
                //   dangerouslySetInnerHTML={{
                //     __html: data?.artist_hub?.title,
                //   }}
                >
                  {/* Your Stage.
                                    <span className="golden-heading"> Your Spotlight.</span> */}
                </h1>
              </div>
            </section>
          </section>

          {/* section-2 */}
          <section className="home-contant mt-5">
            <div className="cont">
              {/* <p className="text-heading">Your <span className="golden-heading">Stage.</span> Your <span className="golden-heading">Spotlight.</span></p> */}
              {/* <h1 className="text-heading name-font">Your Stage.<span className="golden-heading">  Your Spotlight.</span></h1> */}

              <div className="paddingArtistHeader">
                <h1 dangerouslySetInnerHTML={{
                    __html:data?.artist_hub?.title
                }}>
                  {/* THE ARTIST HUB FOR{" "}
                  <span className="colorLove">HAIR & MAKEUP</span> ARTISTS */}
                </h1>
                <p className="playfair fs-4 padingParaArtistmain" dangerouslySetInnerHTML={{
                    __html:data?.artist_hub?.description
                }}>
                  {/* Access curated discounts, masterclasses, business tools, pro
                  products, and exclusive opportunities designed to help hair
                  and makeup artists grow their careers. */}
                </p>
                <div className="one-btn justify-content-center flex-wrap paddingButtons">
                  <a href="/branding-listing/find-artist">
                    <button className="name-font">
                      HAIR AND MAKEUP COURSES
                    </button>
                  </a>
                  <a href="/auth/signup">
                    <button className="name-font">
                      BUSINESS TRAINING & MENTORSHIP
                    </button>
                  </a>
                  <a href="auth/signup">
                    <button className="name-font">
                      INDUSTRY EVENTS & WORKSHOPS
                    </button>
                  </a>
                  <a href="auth/signup">
                    <button className="name-font">
                      RECOMMENDED PRO TOOLS & PRODUCTS
                    </button>
                  </a>
                  <a href="auth/signup">
                    <button className="name-font">BUSINESS SERVICES</button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* {Section-3} */}

          <section className="Artist-page py-4 ">
            <section className="mt-5 pt-4">
              <h3 className="robotofont headingBrand">
                BRANDS WE <span className="colorLove">LOVE</span>
              </h3>

              <p className="brandlovePara" dangerouslySetInnerHTML={{
                __html: data?.brands?.description
              }} >
                {/* These are the professional beauty brands our hair and makeup
                artists rely on every day, products trusted on set, backstage,
                and with clients. We only feature brands we genuinely stand
                behind, helping you discover pro favourites, kit essentials, and
                exclusive discounts from the most respected names in beauty. */}
              </p>
            </section>

            {/* {section-4} */}

            <section className="cardSection4">
              <div className="d-flex gap-4 justify-content-between">
                {/* card-1  */}
                <div className="cardArtist">
                  <img
                    src="/images/NATULIQUE.jpg"
                    alt=""
                    className="ArtistImg"
                  />
                  <div className="cardDataArtist position-relative">
                    <h3 className="ArtHeadCard roboto font24">NATULIQUE</h3>
                    <p className="playfair font16 para1card">
                      Certified Organic Haircare for Professional Artists and
                      Salons
                    </p>
                    <p className="playfair font16 para2card">
                      At The Hair & Makeup Hub, we’re passionate about
                      introducing our artists to professional brands that care
                      as much about quality and sustainability as they do about
                      results — and NATULIQUE is one of them.
                    </p>
                    <div className="position-relative learnTag">
                      <div className="roboto font14 d-flex align-items-center justify-content-start gap-1">
                        LEARN MORE
                        <img src="/images/arrow-right.png" alt="" />
                      </div>
                      <img
                        src="/images/Rectangle 378.png"
                        alt=""
                        className="marhinTop"
                      />
                    </div>
                  </div>
                </div>
                {/* card-2  */}
                <div className="cardArtist">
                  <img src="/images/delilah.jpg" alt="" className="ArtistImg" />
                  <div className="cardDataArtist position-relative">
                    <h3 className="ArtHeadCard roboto font24">DELILAH</h3>
                    <p className="playfair font16 para1card">
                      Ethical Luxury Makeup for Professional Artists
                    </p>
                    <p className="playfair font16 para2card">
                      Delilah creates luxury, cruelty-free makeup designed for
                      artists who value performance and ethics. Known for
                      flawless, skin-enhancing finishes, their pro-quality
                      products are favourites for bridal, commercial, and
                      red-carpet looks.
                    </p>

                    <div className="position-relative learnTag">
                      <div className="roboto font14 d-flex align-items-center justify-content-start gap-1">
                        LEARN MORE
                        <img src="/images/arrow-right.png" alt="" />
                      </div>
                      <img
                        src="/images/Rectangle 378.png"
                        alt=""
                        className="marhinTop"
                      />
                    </div>
                  </div>
                </div>
                {/* card-3  */}
                <div className="cardArtist">
                  <img
                    src="/images/Monuskin Skincare.jpg"
                    alt=""
                    className="ArtistImg"
                  />
                  <div className="cardDataArtist position-relative">
                    <h3 className="ArtHeadCard roboto font24">MONUSKIN</h3>
                    <p className="playfair font16 para1card">
                      The Best Skincare for Makeup Artists Who Want a Flawless
                      Base
                    </p>
                    <p className="playfair font16 para2card">
                      MONUSKIN is a go-to skincare range for professional makeup
                      artists looking for flawless, long-lasting application
                      results. Vegan, cruelty-free, and backed by decades of
                      research, their products prep the skin beautifully for
                      bridal, editorial, and studio work.
                    </p>
                    <div className="position-relative learnTag">
                      <div className="roboto font14 d-flex align-items-center justify-content-start gap-1">
                        LEARN MORE
                        <img src="/images/arrow-right.png" alt="" />
                      </div>
                      <img
                        src="/images/Rectangle 378.png"
                        alt=""
                        className="marhinTop"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* section-5  */}

            <section className="EducationCardsSection">
              <h3 className="roboto EducationHeading pb-3">
                EDUCATION & COURSES
              </h3>

              <div className="EduCardsConatiner d-flex gap-4 justify-content-between">
                {/* education card- 1  */}
                <div className="EducationCardOne">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="roboto fs-5 pb-1">
                        KRISTINA GASPERAS ONLINE ACADEMY
                      </div>
                      <div className="playfair fs-4">
                        Learn from the Best in Bridal Hair and Makeup
                      </div>
                    </div>

                    <div className="KristinaCntainer">
                      <img
                        src="/images/KristinaGasperas.jpg"
                        alt=""
                        className="KristinaImg"
                      />
                    </div>
                  </div>

                  <p className="playfair fs-6 kristinaPara">
                    If you’re serious about taking your hair and makeup artistry
                    to the next level, the Kristina Gasperas Online Academy is
                    one of the most respected training platforms in the beauty
                    industry.
                  </p>

                  <div className="position-relative ">
                    <div className="roboto font14 d-flex align-items-center justify-content-start gap-1">
                      LEARN MORE
                      <img src="/images/arrow-right.png" alt="" />
                    </div>
                    <img
                      src="/images/Rectangle 378.png"
                      alt=""
                      className="marhinTop"
                    />
                  </div>
                </div>

                {/* education card- 2  */}
                <div className="EducationCardOne">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="roboto fs-5 pb-1">
                        KRISTINA GASPERAS ONLINE ACADEMY
                      </div>
                      <div className="playfair fs-4">
                        Learn from the Best in Bridal Hair and Makeup
                      </div>
                    </div>

                    <div className="KristinaCntainer">
                      <img
                        src="/images/KristinaGasperas.jpg"
                        alt=""
                        className="KristinaImg"
                      />
                    </div>
                  </div>

                  <p className="playfair fs-6 kristinaPara">
                    If you’re serious about taking your hair and makeup artistry
                    to the next level, the Kristina Gasperas Online Academy is
                    one of the most respected training platforms in the beauty
                    industry.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                      <div className="roboto font14 d-flex align-items-center justify-content-start gap-1">
                        LEARN MORE
                        <img src="/images/arrow-right.png" alt="" />
                      </div>
                      <img
                        src="/images/Rectangle 378.png"
                        alt=""
                        className="marhinTop"
                      />
                    </div>

                    <div className="fs-4 saveTag roboto">SAVE 10%</div>
                  </div>
                </div>
              </div>
            </section>

            {/* section-6  */}
            <section className="IndustrySection">
              <h3 className="roboto IndustryHeading">
                INDUSTRY EVENTS & WORKSHOPS
              </h3>

              <div className="eventCardContainer d-flex justify-content-between">
                {/* card-1  */}
                <div className="EventCardOne">
                  <div className="d-flex justify-content-between">
                    <div className="WedcomImgContainer">
                      <img
                        src="/images/wedcon.png"
                        alt=""
                        className="wedcomImg"
                      />
                    </div>

                    <div className="roboto fs-4 goldenSaveTag">SAVE</div>
                  </div>

                  <h5 className="roboto fs-5 Wedconheading">WEDCON 2026</h5>

                  <div className="playfair fs-4">
                    The Business Event Every Wedding Pro Needs to Attend
                  </div>

                  <p className="playfair fs-6 paddingParaEvent">
                    If you’re serious about making 2026 your most booked,
                    profitable, and clear-minded year yet — Wedcon is where it
                    starts.
                  </p>
                  <p className="playfair fs-6">
                    Every wedding pro hits that moment where things feel stuck —
                    bookings slow down, prices plateau, and it seems like
                    everyone else is flying ahead. That’s where Wedcon changes
                    everything.
                  </p>
                  <div className="position-relative ">
                    <div className="roboto font14 d-flex align-items-center justify-content-start gap-1 paddingLearnTop">
                      <span className="learn-more-underline">LEARN MORE</span>
                      <img src="/images/arrow-right-white.png" alt="" />
                    </div>
                    {/* <img
                      src="/images/Rectangle 378.png"
                      alt=""
                      className="marhinTop"
                    /> */}
                  </div>
                </div>

                {/* card-2  */}

                {/* card-3  */}
              </div>
            </section>

            {/* section-7  */}
            <section className="BusinessCoursesSection">
              <h3 className="roboto businessHeading">
                BUSINESS COURSES & MENTORSHIP
              </h3>

              <div className="d-flex gap-4 justify-content-between">
                {/* card-1  */}
                <div className="BusinessCardOne">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="roboto fs-5 pb-1">WEDCON 2026</div>
                      <div className="playfair fs-4">
                        The Business Event Every Wedding Pro Needs to Attend
                      </div>
                    </div>

                    <div className="wedconCntainer">
                      <img
                        src="/images/WedconTransparent.png"
                        alt=""
                        className="wedImg"
                      />
                    </div>
                  </div>

                  <p className="playfair fs-6 paddingParaEvent">
                    If you’re serious about making 2026 your most booked,
                    profitable, and clear-minded year yet — Wedcon is where it
                    starts.
                  </p>
                  <p className="playfair fs-6 paddingBottomPara">
                    Every wedding pro hits that moment where things feel stuck —
                    bookings slow down, prices plateau, and it seems like
                    everyone else is flying ahead. That’s where Wedcon changes
                    everything.
                  </p>

                  <div className="position-relative learnTag pt-2">
                    <div className="roboto font14 d-flex align-items-center justify-content-start gap-1">
                      LEARN MORE
                      <img src="/images/arrow-right.png" alt="" />
                    </div>
                    <img
                      src="/images/Rectangle 378.png"
                      alt=""
                      className="marhinTop"
                    />
                  </div>
                </div>

                {/* card-2  */}
                <div className="BusinessCardOne">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="roboto fs-5 pb-1">WEDCON 2026</div>
                      <div className="playfair fs-4">
                        The Business Event Every Wedding Pro Needs to Attend
                      </div>
                    </div>

                    <div className="wedconCntainer">
                      <img
                        src="/images/WedconTransparent.png"
                        alt=""
                        className="wedImg"
                      />
                    </div>
                  </div>

                  <p className="playfair fs-6 paddingParaEvent">
                    If you’re serious about making 2026 your most booked,
                    profitable, and clear-minded year yet — Wedcon is where it
                    starts.
                  </p>
                  <p className="playfair fs-6 paddingBottomPara">
                    Every wedding pro hits that moment where things feel stuck —
                    bookings slow down, prices plateau, and it seems like
                    everyone else is flying ahead. That’s where Wedcon changes
                    everything.
                  </p>

                  <div className="position-relative learnTag pt-2">
                    <div className="roboto font14 d-flex align-items-center justify-content-start gap-1">
                      LEARN MORE
                      <img src="/images/arrow-right.png" alt="" />
                    </div>
                    <img
                      src="/images/Rectangle 378.png"
                      alt=""
                      className="marhinTop"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* section-8  */}

            <section className="EducationCardsSection">
              <h3 className="roboto BusinessServicesHeading pb-3">
                BUSINESS SERVICES FOR CREATIVES
              </h3>

              <div className="EduCardsConatiner d-flex gap-4 justify-content-between">
                {/* education card- 1  */}
                <div className="EducationCardOne">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="roboto fs-5 pb-1">
                        SED IN VIVERRA AUGUE
                      </div>
                      <div className="playfair fs-4">
                        Phasellus blandit lacinia placerat. Etiam laoreet
                      </div>
                    </div>

                    <div className="KristinaCntainer">
                      <img
                        src="/images/KristinaGasperas.jpg"
                        alt=""
                        className="KristinaImg"
                      />
                    </div>
                  </div>

                  <p className="playfair fs-6 kristinaPara pb-3">
                    Sed in viverra augue. Phasellus blandit lacinia placerat.
                    Etiam laoreet aliquet lacus, id tristique enim ornare eu.
                    Pellentesque imperdiet, sapien ac rutrum eleifend, erat
                    neque egestas erat, sit amet sollicitudin ante lorem in ex.
                    Donec non magna quis diam rutrum lacinia.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                      <div className="roboto font14 d-flex align-items-center justify-content-start gap-1">
                        LEARN MORE
                        <img src="/images/arrow-right.png" alt="" />
                      </div>
                      <img
                        src="/images/Rectangle 378.png"
                        alt=""
                        className="marhinTop"
                      />
                    </div>

                    <div className="fs-4 saveTag roboto">SAVE 10%</div>
                  </div>
                </div>

                {/* education card- 2  */}
                <div className="EducationCardOne">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="roboto fs-5 pb-1">
                        NEUMANN GRAHAM PHOTOGRAPHY
                      </div>
                      <div className="playfair fs-4">
                        Creative Wedding & Styled Shoot Specialists in Wiltshire
                      </div>
                    </div>

                    <div className="KristinaCntainer">
                      <img
                        src="/images/Neuman.png"
                        alt=""
                        className="KristinaImg"
                      />
                    </div>
                  </div>

                  <p className="playfair fs-6 kristinaPara">
                    Meet Neumann Graham Photography, a talented husband-and-wife
                    team based in Wiltshire, known for their creative eye,
                    relaxed approach, and beautifully timeless imagery.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                      <div className="roboto font14 d-flex align-items-center justify-content-start gap-1">
                        LEARN MORE
                        <img src="/images/arrow-right.png" alt="" />
                      </div>
                      <img
                        src="/images/Rectangle 378.png"
                        alt=""
                        className="marhinTop"
                      />
                    </div>

                    {/* <div className="fs-4 saveTag roboto">SAVE 10%</div> */}
                  </div>
                </div>
              </div>
            </section>

            {/* section-9  */}

            <section className="CharitySection">
              <h3 className="roboto CharityHeading pb-4">CHARITY PARTNERS</h3>

              <div className="d-flex gap-3 justify-content-between">
                <div className="CharityCard">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div className="roboto fs-5 lookHeading">
                        LOOK GOOD FEEL BETTER
                      </div>
                      <div className="registedFont">
                        Registered charity number: 03922046
                      </div>
                      <div className="playfair fs-4 JoinUsPara">
                        Join Us in Supporting Look Good Feel Better
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/LookGood.jpg"
                        alt=""
                        className="LookGoodImg"
                      />
                    </div>
                  </div>

                  <p className="playfair fs-6 paraCharity">
                    We’re inviting all our artists — and our wider community —
                    to give back by supporting Look Good Feel Better, a UK-wide
                    specialist cancer support charity that helps people manage
                    the visible and emotional effects of cancer treatment.
                  </p>

                  <div className="position-relative learnTag pt-2">
                    <div className="roboto font14 d-flex align-items-center justify-content-start gap-1">
                      LEARN MORE
                      <img src="/images/arrow-right.png" alt="" />
                    </div>
                    <img
                      src="/images/Rectangle 378.png"
                      alt=""
                      className="marhinTop"
                    />
                  </div>
                </div>
                <div>
                  <img
                    src="/images/CharityImag.jpg"
                    alt=""
                    className="CharityImg"
                  />
                </div>
              </div>
            </section>

            {/* section-10  */}
            <section className="AffiliateSection">
              <div className="affiliateContainer text-center">
                <h3 className="affiliateHeading roboto">
                  AFFILIATE DISCLOSURE
                </h3>

                <p className="playfair fs-6" dangerouslySetInnerHTML={{
                    __html: data?.affiliate?.description
                }}>
                  {/* Some links on The Artist Hub are affiliate links, which means
                  we may earn a small commission if you choose to make a
                  purchase, at no extra cost to you. We only promote products
                  and tools we genuinely love and believe will benefit our
                  artist community. */}
                </p>
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
