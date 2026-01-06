import { formatNewLines, getWordRange } from "@/utils/useFul_func";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPagePreview({ data }: any) {
  return (
    <>
     <main>





            <section className="full-home">


                <section
                    className="hero-section"
                    style={{
                        // backgroundImage: "url('/images/hero-img.png')",
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${data?.hero?.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "right",
                        backgroundRepeat: "no-repeat",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
 

                    <section className="home-contant" >
                        <div className="cont" style={{ position: "relative", zIndex: 5 }}>
                            {/* <p className="text-heading">Your <span className="golden-heading">Stage.</span> Your <span className="golden-heading">Spotlight.</span></p> */}
                            <h1 className="text-heading name-font">{getWordRange(data?.hero?.mainTitle, 1, 2)}<span className="golden-heading">  {getWordRange(data?.hero?.mainTitle, 3, "n")}</span></h1>
                            


                        </div>
                    </section>
                </section>






                {/* section-2 */}
                <section className="home-contant mt-5">
                    <div className="cont">
                        {/* <p className="text-heading">Your <span className="golden-heading">Stage.</span> Your <span className="golden-heading">Spotlight.</span></p> */}
                        {/* <h1 className="text-heading name-font">Your Stage.<span className="golden-heading">  Your Spotlight.</span></h1> */}
                        <h3 className="titlefont ">{getWordRange(data?.hero?.subTitle, 1, 7)}  <br /> {getWordRange(data?.hero?.subTitle, 8, "n")}</h3>
                        <p className="text-desc titlefont ">{data?.hero?.description}</p>
                        <div className="one-btn">
                            <a href="/branding-listing/find-artist"><button className="name-font">Find an Artist</button></a>
                            <a href="/auth/signup"><button className="name-font">Join as an Artist</button></a>
                            <a href="auth/signup"><button className="name-font">Hire Talent</button></a>
                        </div>


                    </div>
                </section>
                {/* section-3 */}
                <section className="bridal-page py-4 ">
                    <section className="mt-5 pt-4">
                        <div className="row">
                            <div className="col-sm-4">
                                <div>
                                    <h3 className="fs-1 robotofont">
                                        {" "}
                                        {getWordRange(data?.bookArtist?.title, 1, 2)}  <br /> <span className="clrheading">{getWordRange(data?.bookArtist?.title, 3, 4)}</span>
                                        <br />{getWordRange(data?.bookArtist?.title, 5, "n")}
                                    </h3>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="playfairfont ps-3">
                                    <p className="" dangerouslySetInnerHTML={{ __html: formatNewLines(data?.bookArtist?.description) }}></p>
                                    {/* <p className="">Find the artistry that makes your moment unforgettable.</p>
                                    <p className="mt-4">
                                        Whether you’re walking down the aisle, stepping into prom night, hosting a corporate event, or producing a creative project, our platform connects you with exceptional hair and makeup artists. From timeless bridal looks and red-carpet glamour to editorial shoots and commercial campaigns, discover talent tailored to every occasion.
                                    </p> */}
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="mt-5 py-5  home">

                        <div className="PT-4">



                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="position-relative service-card bg-white border rounded-3 p-3 py-5">
                                        <div className="card-circle">
                                            <span>1</span>
                                        </div>
                                        <h5 className="robotofont text-center">
                                            Browse Portfolios
                                        </h5>
                                        <p className="playfairfont text-center">
                                            Explore curated profiles
                                            of artists in your area.
                                        </p>
                                        <div className="d-flex flex-column align-items-center pt-2">
                                            <a href="/branding-listing/find-artist"><p className="pt-3 finds name-font playfairfont text-center lh-lg">Find an artist <MoveRight /></p></a>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="position-relative service-card  bg-white border rounded-3 p-3 py-5">
                                        <div className="card-circle">
                                            <span>2</span>
                                        </div>
                                        <h5 className="robotofont text-center">
                                            Connect Directly
                                        </h5>
                                        <p className="playfairfont text-center">
                                            Chat with your chosen artist to share your vision and check availability.
                                        </p>
                                        <div className="d-flex flex-column align-items-center pt-2">
                                            <a href="/branding-listing/find-artist"><p className="pt-3 finds name-font playfairfont text-center lh-lg">Find an artist <MoveRight /></p></a>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="position-relative service-card bg-white border rounded-3 p-3 py-5">
                                        <div className="card-circle">
                                            <span>3</span>
                                        </div>
                                        <h5 className="robotofont text-center">
                                            Book with Confidence
                                        </h5>
                                        <p className="playfairfont text-center">
                                            Secure your date knowing you’re in expert hands.
                                        </p>
                                        <div className="d-flex flex-column align-items-center pt-2">
                                            <a href="/branding-listing/find-artist"><p className="pt-3 finds name-font playfairfont text-center lh-lg">Find an artist <MoveRight /></p></a>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                    {/* section-4 */}

                    <section className="mt-5 pt-4 pb-4">
                        <div className="row">
                            <div className="col-sm-4">
                                <div>
                                    <h3 className="fs-1 robotofont text-uppercase">
                                        {" "}
                                        {getWordRange(data?.artistHub?.title,1,2)} <br /> <span className="clrheading">{getWordRange(data?.artistHub?.title,3,4)} </span>
                                        <br />{getWordRange(data?.artistHub?.title,5,"n")}
                                    </h3>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="playfairfont ps-3">
                                    <p className="" dangerouslySetInnerHTML={{ __html: formatNewLines(data?.artistHub?.description) }}></p>
                                    {/* <p className="">More than bookings — a platform built for your growth.</p>
                                    <p className="mt-4">
                                        The Artist Hub is your professional home, designed to help you shine, secure opportunities, and grow a thriving freelance career. From attracting clients to levelling up your skills, we provide the visibility, tools, and resources every modern artist needs.
                                    </p> */}
                                    <div className="d-flex flex-column  pt-2 lines">
                                        <a href="/branding-listing/find-artist"><p className="pt-3 finds name-font playfairfont  lh-lg text-uppercase fw-bold">join as an artist<MoveRight /></p></a>
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 pt-2 text-white">
                            <div className="col">
                                <div className="bg-black p-3 py-5 h-100 center">
                                    <h5 className="robotofont text-center">Curated Portfolios </h5>
                                    <p className="playfairfont text-center">
                                        Showcase your artistry in a trusted, professional space.
                                    </p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="bg-black p-3 py-5 h-100 center">
                                    <h5 className="robotofont text-center">Business
                                        Tools </h5>
                                    <p className="playfairfont text-center">
                                        Access exclusive templates for invoices, contracts, planners, and more.
                                    </p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="bg-black p-3 py-5 h-100 center max-height">
                                    <h5 className="robotofont text-center mb-4">Job Opportunities </h5>
                                    <p className="playfairfont text-center ">
                                        Apply for roles posted by clients, agencies, and production companies via the Job Board.
                                    </p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="bg-black p-3 py-5 h-100 center">
                                    <h5 className="robotofont text-center">Career
                                        Growth </h5>
                                    <p className="playfairfont text-center">
                                        Browse specialist courses to enhance your skills and elevate your artistry.
                                    </p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="bg-black p-3 py-5 h-100 center max-height">
                                    <h5 className="robotofont text-center mb-4">Exclusive Discounts </h5>
                                    <p className="playfairfont text-center">
                                        Enjoy savings on industry-leading products and tools with our partner discount codes.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* section-5 */}

                    <section className="mt-5 pt-4 pb-4">
                        <div className="row pt-5 align-items-center">
                            <div className="col-sm-4">
                                <div>
                                    <h3 className="fs-1 robotofont text-uppercase pt-2">
                                        {" "}
                                        {getWordRange(data?.hireTalent?.title,1,1)} <br /> <span className="clrheading">{getWordRange(data?.hireTalent?.title,2,2)} </span>
                                        <br />{getWordRange(data?.hireTalent?.title,3,"n")}
                                    </h3>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="playfairfont ps-3">
                                    <p className="" dangerouslySetInnerHTML={{ __html: formatNewLines(data?.hireTalent?.description) }}></p>
                                    {/* <p className="mt-4">
                                        Our exclusive Job Board connects businesses, agencies, and production companies with skilled hair and makeup professionals. From casting calls and freelance opportunities to editorial shoots, corporate events, and film productions, we make hiring seamless.

                                    </p>
                                    <p className="pt-3">Discover the talent you need — and let the right artists find you.</p> */}
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="mt-5 py-5  home">

                        <div className="PT-4">



                            <div className="row cards-home">
                                <div className="col-sm-4">
                                    <div className="position-relative service-card bg-white border  p-3 py-5 bg">
                                        <div className="card-circle">

                                        </div>
                                        <h5 className="robotofont text-center text-uppercase">
                                            Posting casting  <br />calls and job roles
                                        </h5>

                                        <div className="d-flex flex-column align-items-center pt-2">
                                            <a href="/branding-listing/find-artist"><p className="pt-3 finds name-font playfairfont text-center lh-lg">Find an artist <MoveRight /></p></a>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="position-relative service-card  bg-white border  p-3 py-5 bg">
                                        <div className="card-circle">

                                        </div>
                                        <h5 className="robotofont text-center text-uppercase">
                                            Accessing a pool of <br /> verified talent
                                        </h5>

                                        <div className="d-flex flex-column align-items-center pt-2">
                                            <a href="/branding-listing/find-artist"><p className="pt-3 finds name-font playfairfont text-center lh-lg">Find an artist <MoveRight /></p></a>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="position-relative service-card bg-white border  p-3 py-5 bg">
                                        <div className="card-circle">

                                        </div>
                                        <h5 className="robotofont text-center text-uppercase">
                                            Streamlining applications <br />and bookings
                                        </h5>

                                        <div className="d-flex flex-column align-items-center pt-2">
                                            <a href="/branding-listing/find-artist"><p className="pt-3 finds name-font playfairfont text-center lh-lg">Find an artist <MoveRight /></p></a>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* section-6 */}


                    {/* Trusted By Hair Section */}
                    <section className="Trusted-Hair-Section my-container new-swiper">
                        <p className="text-heading">{getWordRange(data?.social_proof?.title,1,6)} <br /> {getWordRange(data?.social_proof?.title,7,"n")}</p>

                        {/* <Swiper
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="Trusted-Hair-Card-Wrapper">
                                    <div className="Trusted-Hair-Card">
                                        <div>
                                            <Image
                                                className="double-coat-img"
                                                src="/images/double-coat.svg"
                                                alt="double-coat-img"
                                                width={30}
                                                height={50}
                                                unoptimized
                                            />
                                            <p className="text-description">Finding my wedding makeup artist on this platform was a dream. The booking process was seamless, and the results were flawless. I'd highly recommend it to any bride-to-be searching for a professional hair and makeup artist for weddings or events.</p>
                                        </div>
                                        <p className="text-bottom">Sarah M., Bride</p>
                                    </div>
                                    <div className="Trusted-Hair-Card">
                                        <div>
                                            <Image
                                                className="double-coat-img"
                                                src="/images/double-coat.svg"
                                                alt="double-coat-img"
                                                width={30}
                                                height={50}
                                                unoptimized
                                            />
                                            <p className="text-description">Since joining, I’ve had a steady flow of bookings and secured amazing hair and makeup jobs through the platform. The Job Board and professional resources are a real game-changer for my freelance business.</p>
                                        </div>
                                        <p className="text-bottom">Jessica B., Freelance Artist</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="Trusted-Hair-Card-Wrapper">
                                    <div className="Trusted-Hair-Card">
                                        <div>
                                            <Image
                                                className="double-coat-img"
                                                src="/images/double-coat.svg"
                                                alt="double-coat-img"
                                                width={30}
                                                height={50}
                                                unoptimized
                                            />
                                            <p className="text-description">Finding my wedding makeup artist on this platform was a dream. The booking process was seamless, and the results were flawless. I'd highly recommend it to any bride-to-be searching for a professional hair and makeup artist for weddings or events.</p>
                                        </div>
                                        <p className="text-bottom">Sarah M., Bride</p>
                                    </div>
                                    <div className="Trusted-Hair-Card">
                                        <div>
                                            <Image
                                                className="double-coat-img"
                                                src="/images/double-coat.svg"
                                                alt="double-coat-img"
                                                width={30}
                                                height={50}
                                                unoptimized
                                            />
                                            <p className="text-description">Since joining, I’ve had a steady flow of bookings and secured amazing hair and makeup jobs through the platform. The Job Board and professional resources are a real game-changer for my freelance business.</p>
                                        </div>
                                        <p className="text-bottom">Jessica B., Freelance Artist</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="Trusted-Hair-Card-Wrapper">
                                    <div className="Trusted-Hair-Card">
                                        <div>
                                            <Image
                                                className="double-coat-img"
                                                src="/images/double-coat.svg"
                                                alt="double-coat-img"
                                                width={30}
                                                height={50}
                                                unoptimized
                                            />
                                            <p className="text-description">Finding my wedding makeup artist on this platform was a dream. The booking process was seamless, and the results were flawless. I'd highly recommend it to any bride-to-be searching for a professional hair and makeup artist for weddings or events.</p>
                                        </div>
                                        <p className="text-bottom">Sarah M., Bride</p>
                                    </div>
                                    <div className="Trusted-Hair-Card">
                                        <div>
                                            <Image
                                                className="double-coat-img"
                                                src="/images/double-coat.svg"
                                                alt="double-coat-img"
                                                width={30}
                                                height={50}
                                                unoptimized
                                            />
                                            <p className="text-description">Since joining, I’ve had a steady flow of bookings and secured amazing hair and makeup jobs through the platform. The Job Board and professional resources are a real game-changer for my freelance business.</p>
                                        </div>
                                        <p className="text-bottom">Jessica B., Freelance Artist</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="Trusted-Hair-Card-Wrapper">
                                    <div className="Trusted-Hair-Card">
                                        <div>
                                            <Image
                                                className="double-coat-img"
                                                src="/images/double-coat.svg"
                                                alt="double-coat-img"
                                                width={30}
                                                height={50}
                                                unoptimized
                                            />
                                            <p className="text-description">Finding my wedding makeup artist on this platform was a dream. The booking process was seamless, and the results were flawless. I'd highly recommend it to any bride-to-be searching for a professional hair and makeup artist for weddings or events.</p>
                                        </div>
                                        <p className="text-bottom">Sarah M., Bride</p>
                                    </div>
                                    <div className="Trusted-Hair-Card">
                                        <div>
                                            <Image
                                                className="double-coat-img"
                                                src="/images/double-coat.svg"
                                                alt="double-coat-img"
                                                width={30}
                                                height={50}
                                                unoptimized
                                            />
                                            <p className="text-description">Since joining, I’ve had a steady flow of bookings and secured amazing hair and makeup jobs through the platform. The Job Board and professional resources are a real game-changer for my freelance business.</p>
                                        </div>
                                        <p className="text-bottom">Jessica B., Freelance Artist</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="Trusted-Hair-Card-Wrapper">
                                    <div className="Trusted-Hair-Card">
                                        <div>
                                            <Image
                                                className="double-coat-img"
                                                src="/images/double-coat.svg"
                                                alt="double-coat-img"
                                                width={30}
                                                height={50}
                                                unoptimized
                                            />
                                            <p className="text-description">Finding my wedding makeup artist on this platform was a dream. The booking process was seamless, and the results were flawless. I'd highly recommend it to any bride-to-be searching for a professional hair and makeup artist for weddings or events.</p>
                                        </div>
                                        <p className="text-bottom">Sarah M., Bride</p>
                                    </div>
                                    <div className="Trusted-Hair-Card">
                                        <div>
                                            <Image
                                                className="double-coat-img"
                                                src="/images/double-coat.svg"
                                                alt="double-coat-img"
                                                width={30}
                                                height={50}
                                                unoptimized
                                            />
                                            <p className="text-description">Since joining, I’ve had a steady flow of bookings and secured amazing hair and makeup jobs through the platform. The Job Board and professional resources are a real game-changer for my freelance business.</p>
                                        </div>
                                        <p className="text-bottom">Jessica B., Freelance Artist</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper> */}
                    </section>


                    {/* Partner Hub Section */}
                    <section className="Partner-Hub-Section my-container new-Partner ">
                        <div className="Partner-Hub">
                            <div className="text-wrapper">
                                <p className="text-heading ">{data?.partner?.title}</p>
                                <p className="text-description"
                                dangerouslySetInnerHTML={{ __html: formatNewLines(data?.partner?.description) }}
                                >    
                                </p>
                                {/* <p className="text-description">Showcase your brand where artistry meets opportunity.</p>
                                <p className="text-description pt-3 para">The Artist Hub offers a premium platform for brands, services, and products to connect with a highly engaged community of professional hair and makeup artists. Our audience is made up of creatives who are dedicated to investing in their craft and elevating their careers.</p> */}
                                <ul>
                                    <li>
                                        <Image
                                            className="check-circle-img"
                                            alt="check-circle-img"
                                            src="/images/check-circle.svg"
                                            width={15}
                                            height={15}
                                            unoptimized
                                        />
                                        <span>Placement within our curated Artist Hub</span>
                                    </li>

                                    <li>
                                        <Image
                                            className="check-circle-img"
                                            alt="check-circle-img"
                                            src="/images/check-circle.svg"
                                            width={15}
                                            height={15}
                                            unoptimized
                                        />
                                        <span>Feature your education & training programmes</span>
                                    </li>

                                    <li>
                                        <Image
                                            className="check-circle-img"
                                            alt="check-circle-img"
                                            src="/images/check-circle.svg"
                                            width={15}
                                            height={15}
                                            unoptimized
                                        />
                                        <span>Collaborate on exclusive launch giveaways</span>
                                    </li>
                                </ul>
                                <Link href="mailto:info@thehairandmakeuphub.co.uk" className="media-kit-btn-wrapper">
                                    <button className="media-kit-btn">Request Our Media Kit</button>
                                </Link>
                            </div>
                            <Image
                                className="partner-us-img"
                                src="/images/partner-with-us.png"
                                alt="Partner Us Image"
                                width={805}
                                height={603}
                                unoptimized
                            />
                        </div>
                    </section>


                </section>
            </section>
        </main>
    </>
  );
}
