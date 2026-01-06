import { formatNewLines, getWordRange } from "@/utils/useFul_func";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function AboutPreview({ data }: any) {
  return (
    <>
      <section className="Hero-Section">
        <video
          className="logo-video"
          src="/videos/logo-video.mp4"
          width={1920}
          height={981}
          autoPlay
          loop
          muted
          playsInline
        />
        <Image
          className="logo-img"
          src="/images/logo.svg"
          alt="The Hair & Makeup Hub Logo"
          width={502}
          height={41}
          unoptimized
        />

        <div className="hero-text">
          <p className="text-heading">
            Coming <span className="golden-heading">Soon.</span>
          </p>
          <p className="text-description">
            Join the UK's first dedicated platform for professional hair and{" "}
            <br /> makeup artists — where creativity meets opportunity.
          </p>
          <p className="text-description alternative">
            Join the UK's first dedicated platform for professional hair and
            makeup artists — where creativity meets opportunity.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScervH_n2vkKXw62brN8vKNVVYFma75hqkOIT3yx59Zp3Iy7A/viewform?usp=header"
            target="_blank"
          >
            <button className="hero-btn">Become a Founding Artist</button>
          </Link>
          <p className="text-bottom">
            Get early access and a free 6-month listing when we launch.
          </p>
        </div>
      </section>

      {/* Hair & Makeup Hub Section */}
      <section className="Hair-Makeup-Section my-container">
        <div className="text-wrapper">
          {/* <p className="text-heading">The Hair & Makeup Hub is <span className="golden-heading"> the new premier platform </span> for the hair and makeup industry.</p> */}

          <p className="text-heading">
            {getWordRange(data?.makeup_hub?.title, 1, 6)}
            <span className="golden-heading">
              {" "}
              {getWordRange(data?.makeup_hub?.title, 7, 9)}
            </span>
            <span className="golden-heading">
              {" "}
              {getWordRange(data?.makeup_hub?.title, 10, 10)}
            </span>{" "}
            {getWordRange(data?.makeup_hub?.title, 11, 13)}
            {getWordRange(data?.makeup_hub?.title, 14, "n")}
          </p>

          <p
            className="text-description"
            dangerouslySetInnerHTML={{
              __html: formatNewLines(data?.makeup_hub?.description),
            }}
          ></p>
        </div>
        <Image
          className="logo-img"
          src="/images/hair-and-makeup-img.png"
          alt="Hair & Makeup Image"
          width={700}
          height={509}
          unoptimized
        />
      </section>

      {/* Exclusive Invitation Section */}
      <section className="Exclusive-Invitation-Section my-container">
        <div className="Exclusive-Invitation">
          <div className="text-left-wrapper">
            <p className="text-heading">
              An Exclusive <br /> Invitation for Pre-
              <br />
              Launch Artists
            </p>
            <p className="text-heading alternative">
              An Exclusive Invitation for Pre-Launch Artists
            </p>
            <p className="text-description">
              We're offering a limited number of handpicked artists the chance
              to join The Hair & Makeup Hub as Founding Artists.
            </p>
          </div>
          <div className="text-right-wrapper">
            <p className="text-description">
              Enjoy a complimentary 6-month membership when we launch, with full
              access to our platform — including jobs, resources, courses, and
              exclusive product offers.
            </p>
            <p className="text-description">
              There's no obligation to stay after the complimentary trial and no
              payment details are required. This is simply our way of welcoming
              exceptional artists to experience The Hub before we officially
              launch.
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScervH_n2vkKXw62brN8vKNVVYFma75hqkOIT3yx59Zp3Iy7A/viewform?usp=header"
              target="_blank"
            >
              <button className="join-btn">Join Now</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Makeup Hub Section */}
      <section className="Directory-Hub-Section my-container">
        <p className="text-heading">{data?.beauty_hub?.title}</p>
        <div className="text-wrapper">
          <p
            className="text-description"
            dangerouslySetInnerHTML={{
              __html: formatNewLines(data?.beauty_hub?.description),
            }}
          ></p>
        </div>
      </section>

      {/* Image Card Section */}
      <section className="Image-Card-Section my-container">
        {/* Image Card 1 */}
        <div className="img-wrapper">
          <Image
            className="card-img"
            src="/images/artist-img.jpeg"
            alt="Artist Image"
            width={460}
            height={325}
            unoptimized
          />
          <div className="text-wrapper">
            <p className="text-heading">For Artists</p>
            <p className="text-description">it's a Stage</p>
          </div>
        </div>

        {/* Image Card 2 */}
        <div className="img-wrapper">
          <Image
            className="card-img"
            src="/images/brand-img.jpeg"
            alt="Brand Image"
            width={460}
            height={325}
            unoptimized
          />
          <div className="text-wrapper">
            <p className="text-heading">For Brands</p>
            <p className="text-description">it's a Voice</p>
          </div>
        </div>

        {/* Image Card 3 */}
        <div className="img-wrapper">
          <Image
            className="card-img"
            src="/images/client-img.jpeg"
            alt="Client Image"
            width={460}
            height={325}
            unoptimized
          />
          <div className="text-wrapper">
            <p className="text-heading">For Clients</p>
            <p className="text-description">it's a Marketplace</p>
          </div>
        </div>
      </section>

      {/* Partner Hub Section */}
      <section className="Partner-Hub-Section my-container">
        <div className="Partner-Hub">
          <div className="text-wrapper">
            <p className="text-heading">Partner With The Hub</p>
            <p className="text-description">
              Partnership opportunities include:
            </p>
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
            <Link
              href="mailto:info@thehairandmakeuphub.co.uk"
              className="media-kit-btn-wrapper"
            >
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

      {/* Stay Connected Section */}
      <section className="Stay-Connected-Section my-container">
        <div className="Stay-Connected">
          <p className="text-heading">Stay Connected - Be First in Line </p>
          <div className="text-wrapper">
            <p className="text-description">
              Our platform is launching soon. Sign up to receive:
            </p>
            <p className="text-description">
              Exclusive launch updates, Access to limited giveaways & Priority
              invitations
            </p>
          </div>

          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
