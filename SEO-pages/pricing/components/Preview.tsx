import { formatNewLines, getWordRange } from "@/utils/useFul_func";
import JobCard from "../../job-board/components/jobcard";
import Image from "next/image";
import { MoveRightIcon } from "lucide-react";

export default function PricingPreview({data}: any) {
    return (
        <>
        <section className="membership-page-sec full-job-board">
                {/* section-1/ */}
                <section className="home-contant p-0 job-board-sec">
                    <div className="find-artist new-job-post">
                        <div className="cont">
                            {/* <p className="text-heading">Your <span className="golden-heading">Stage.</span> Your <span className="golden-heading">Spotlight.</span></p> */}
                            <div dangerouslySetInnerHTML={{__html:data?.artist?.mainTitle}}>
                                {/* <h1 className="text-heading name-font text-uppercase">Hire <span className="golden-heading"> the UK’s Top</span> Hair &</h1> */}
                                {/* <h1 className="text-heading name-font text-uppercase">{getWordRange(data?.artist?.mainTitle, 1, 1)}<span className="golden-heading">  {getWordRange(data?.artist?.mainTitle, 2, 4)}</span> {getWordRange(data?.artist?.mainTitle, 5, 6)}</h1>
                                <h1 className="text-heading name-font text-uppercase line-height">{getWordRange(data?.artist?.mainTitle, 7, "n")}</h1> */}
                            </div>
                            <div className="pt-4  para-sub">
                                {/* <h3 className="titlefont pt-5">Looking for exceptional talent for your next project?</h3> */}
                                <div dangerouslySetInnerHTML={
                                    {
                                        __html:data?.artist?.subTitle
                                    }
                                }>

                                </div>
                                {/* <h3 className="titlefont pt-5">{data?.artist?.subTitle}</h3> */}
                                {/* <p className="text-desc titlefont pt-4">
                                    The Hair & Makeup Hub Job Board is your direct connection to the UK’s leading professional hair and makeup artists, fully verified, highly skilled, and ready to work. Whether you’re producing a film, planning a commercial shoot, hosting a major event, or hiring in-store beauty talent, our platform makes finding the right artist faster, easier, and more cost-effective.
                                </p> */}
                                <p className="text-desc titlefont pt-4" dangerouslySetInnerHTML={{ __html: data?.artist?.description }}></p>
                            </div>


                        </div>
                    </div>
                </section>


                {/* section-2 */}
                <section className="caed-sec-membership">
                    <div className="hadd-member-card">
                        <h1 className=" name-font ">Introductory Prices for 2026 — Perfect for <br /> <span>Freelance, Professional & Senior Artists</span></h1>
                    </div>
                    <section className="board-cards">
                        <JobCard
                            variant="one"
                            title="The Touch Up Tier"
                            price="£9.99/month "
                            extraDescrip="(Cancel anytime — or get one month free when purchasing annually)"
                            description="For artists establishing their online presence and starting to attract clients. Build credibility, grow your portfolio, and get discovered."
                            points={[
                                "Apply directly for exclusive jobs and casting calls on our Job Board",
                                "Directory listing with 1 county/region as your main service area — ideal for building a strong local presence",
                                "6 portfolio images to showcase your best work",
                                "50-word bio to introduce yourself and build trust",
                                "Collect and display client reviews",
                                "Optional Verified Artist Badge – £50/year (awarded upon successful verification of documents)",
                            ]}
                            ringColor="#CBB682"
                            tickColor="#CBB682"
                        />
                        <JobCard
                            variant="two"
                            title="The Glow Up Tier"
                            price="£16.99/month "
                            extraDescrip="(Cancel anytime — or get one month free when purchasing annually)"
                            description="For established artists ready to level up their bookings, grow their audience, and strengthen their professional reputation."
                            points={[
                                "Everything in The Touch Up Tier, plus:",
                                "Up to 3 counties/regions as your service areas — attract clients from neighbouring locations",
                                "12 portfolio images to showcase a wider range of work",
                                "100-word bio to tell your story in more detail",
                                "Respond directly to client reviews — show you care about your reputation",
                                "Optional Verified Artist Badge – £50/year (awarded upon successful verification of documents)",
                            ]}
                            ringColor="#CBB682"
                            tickColor="#CBB682"
                        />
                        <JobCard
                            variant="three"
                            title="The Full Glam Tier"
                            price="£24.99/month "
                            extraDescrip="(Cancel anytime — or get one month free when purchasing annually)"
                            description="The ultimate package for top-tier artists seeking maximum visibility, credibility, and industry recognition."
                            points={[
                                "Everything in The Glow Up Tier, plus:",
                                "FREE Verified Artist Badge (worth £50/year, awarded upon successful verification of documents) — proof of professionalism and trust",
                                "Unlimited locations UK-wide — be found by clients anywhere",
                                "18 portfolio images + videos to fully showcase your skills",
                                "200-word bio to share your experience and achievements in depth",
                                "Social media shout-outs to boost your visibility to our growing audience",
                                "Showcase Award Badges on Your Profile — highlight your industry awards and recognitions to stand out from the competition",
                            ]}
                            ringColor="Black"
                            tickColor="Black"
                        />
                    </section>
                    <div className="three-card-banner">
                        <div className="card-continer">
                            <div className="card">
                                <p className="name-font ">Best For: Newer artists building their reputation and client base.</p>
                            </div>
                            <div className="card">
                                <p className="name-font ">Best For: Growing artists who want more exposure and a professional, fully-featured profile.</p>
                            </div>
                            <div className="card">
                                <p className="name-font ">Best For: Established artists who want to dominate their market and attract high-value clients.</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* section- 3 */}
                <section className="image-sec">
                    <section className="board-conatiner">
                        <div className="contant">
                            <div className="left-side ">
                                <Image
                                    src="/images/Frame 1.png"   // image location (public folder)
                                    alt="Sample Image"         // required
                                    width={500}                // required
                                    height={300}               // required
                                    className="my-image"
                                />


                            </div>
                            <div className="right-side">
                                <div className="right-hadding"
                                dangerouslySetInnerHTML={{__html:data?.verifiedArtist?.title}}>
                                    {/* <h1 className="text-heading name-font text-uppercase">{getWordRange(data?.verifiedArtist?.title, 1, 3)}<span className="golden-heading">  {getWordRange(data?.verifiedArtist?.title, 4, 5)}</span> </h1>
                                    <h1 className="text-heading name-font text-uppercase"><span className="golden-heading">  {getWordRange(data?.verifiedArtist?.title, 6, 8)}</span> </h1>
                                    <h1 className="text-heading name-font text-uppercase">{getWordRange(data?.verifiedArtist?.title, 9, "n")} </h1> */}
                                    {/* <h1 className="text-heading name-font text-uppercase">The Verified Artist<span className="">  Badge — Build Trust  Credibility <br /></span> & Prestige</h1> */}
                                </div>
                                <div className="sub-hadding">
                                    {/* <p className="text-desc titlefont">
                                       The Verified Artist Badge is awarded once you pass our professional verification process, confirming your skills, experience, and credentials. It’s a powerful credibility marker that helps you stand out, win more bookings, and build client trust.
                                    </p> */}
                                    <p className="text-desc titlefont pt-4" dangerouslySetInnerHTML={{ __html: formatNewLines(data?.verifiedArtist?.description) }}></p>

                                </div>
                                <div className="hadd-points">
                                    <ul>
                                        <li className="  titlefont">Add to Touch Up or Glow Up for £50/year (awarded upon successful verification of documents)</li>
                                        <li className="  titlefont">Included free in Full Glam Tier</li>
                                    </ul>
                                </div>
                                <div className="verified">
                                    <button>Get Verified   < MoveRightIcon /></button>
                                </div>

                            </div>
                        </div>
                    </section>
                </section>

                {/* section- 4 */}
                <section className="second-img">
                    <section className="second-board-conatine board-conatiner">
                        <section className="board-conatiner">
                            <div className="contant">

                                <div className="right-side ps-0">
                                    <div className="right-hadding"
                                    dangerouslySetInnerHTML={{__html:data?.freelanceArtist?.title}}
                                    >
                                        {/* <h1 className="text-heading name-font text-uppercase">{getWordRange(data?.freelanceArtist?.title, 1, 2)}<span className="golden-heading">  {getWordRange(data?.freelanceArtist?.title, 3, 3)}</span> </h1>
                                        <h1 className="text-heading name-font text-uppercase"><span className="golden-heading">  {getWordRange(data?.freelanceArtist?.title, 4, 6)}</span> </h1>
                                        <h1 className="text-heading name-font text-uppercase"><span className="golden-heading">  {getWordRange(data?.freelanceArtist?.title, 7, 7)}</span> {getWordRange(data?.freelanceArtist?.title, 8, 10)}</h1>
                                        <h1 className="text-heading name-font text-uppercase"> {getWordRange(data?.freelanceArtist?.title, 11, "n")}</h1> */}


                                        {/* <h1 className="text-heading name-font text-uppercase">Grow Your <span className="">Freelance <br /> Hair & Makeup <br />Career</span>with The Hair <br />& Makeup Hub</h1> */}
                                    </div>
                                    <div className="sub-hadding">
                                        {/* <p className="text-desc titlefont">
                                            Joining The Hair & Makeup Hub isn’t just about being listed, it’s about being discovered. <br /> <br />
                                            As a member, you’ll also appear on The Hair & Makeup Hub Job Board, where clients, brands, and production teams search daily for verified hair and makeup artists across the UK. <br /> <br />
                                            As part of our vetted community of UK hair and makeup artists, you’ll gain visibility from clients, industry professionals, and brands actively searching for talent. Your membership showcases your skills, builds trust, and gives you access to tools designed to help your business grow. <br /> <br />
                                            Whether you specialise in bridal makeup, creative styling, editorial work, or retail artistry, our platform helps you attract clients, elevate your professional profile, and build a thriving freelance career with confidence and credibility.<br /> <br />
                                        </p> */}
                                        <p className="text-desc titlefont pt-4" dangerouslySetInnerHTML={{ __html: formatNewLines(data?.freelanceArtist?.description) }}></p>

                                    </div>

                                </div>
                                <div className="left-side ">
                                    <Image
                                        src="/images/job-board.jpg"   // image location (public folder)
                                        alt="Sample Image"         // required
                                        width={500}                // required
                                        height={300}               // required
                                        className="my-image"
                                    />


                                </div>

                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </>

    );
}