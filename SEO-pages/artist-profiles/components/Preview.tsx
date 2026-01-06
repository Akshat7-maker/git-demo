import { formatNewLines, getWordRange } from "@/utils/useFul_func";
import { Funnel, MoveRight } from "lucide-react";
import { SelectPicker } from "rsuite";
import ArtistCard from "./ArtistCard";



 const data = ["Option 1", "Option 2", "Option 3"].map((item) => ({
        label: item,
        value: item,
    }));
export default function ArtistProfilePreview({ pageData }: any) {
  return (
    <>
      <section className="home-contant p-0">
        <div className="find-artist">
          <div className="cont">
            {/* <p className="text-heading">Your <span className="golden-heading">Stage.</span> Your <span className="golden-heading">Spotlight.</span></p> */}
            {/* <h1 className="text-heading name-font text-uppercase">
              {getWordRange(pageData?.artist?.mainTitle, 1, 1)}{" "}
              <span className="golden-heading">
                {getWordRange(pageData?.artist?.mainTitle, 2, "n")}
              </span>
            </h1> */}
            <div dangerouslySetInnerHTML={{ __html: pageData?.artist?.mainTitle }}></div>
            <div className="pt-4 sub-hadding">
              {/* <h3 className="titlefont ">{pageData?.artist?.subTitle}</h3> */}
              <div dangerouslySetInnerHTML={{ __html: pageData?.artist?.subTitle }}></div>
              {/* <h3 className="titlefont ">Find and Book Hair & Makeup Artists for Weddings, Events & Special Occasions</h3> */}
              {/* <p className="text-desc titlefont ">
                {pageData?.artist?.description}
              </p> */}
              <div dangerouslySetInnerHTML={{ __html: pageData?.artist?.description }}></div>
              {/* <p className="text-desc titlefont ">Discover talented hair and makeup artists across the UK, specialising in bridal, event, and red-carpet beauty. Whether you’re walking down the aisle, celebrating a milestone, or attending a special occasion, The Hair & Makeup Hub connects you directly with experienced professionals who make every moment unforgettable.</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* section-2 */}
      <section className="find-cards">
        <div className="d-flex justify-content-between">
          <div>
            <button className="p-2 py-1 rounded-1 bg-transparent d-flex align-items-center">
              <Funnel className="me-1" />
              Filter
            </button>
          </div>

          <div className="d-flex gap-3">
            <SelectPicker
              data={data}
              searchable={false}
              style={{ width: 124 }}
              placeholder="Grid View"
            />{" "}
            <SelectPicker
              data={data}
              searchable={false}
              style={{ width: 124 }}
              placeholder="Sort By"
            />
          </div>
        </div>
        <div className="cards-find">
          <div className="row m-0 mt-5">
            <ArtistCard
              image="/images/gallaryimage3.jpg"
              name="Gosia Kielkowska"
              studio="GK Makeup"
              tagline="Malgorzata Kielkowska — Award-Winning Makeup Artist"
              location="Manchester"
              areas="UK & Europe"
              team="Solo"
              price="Mid-range ££"
              // onVisit={() => console.log("Visit Profile")}
            />

            <ArtistCard
              image="/images/gallaryimage4.jpg"
              name="John Doe"
              studio="JD Studio"
              tagline="Award-Winning Hair Stylist — Award-Winning Makeup Artist"
              location="London"
              areas="UK"
              team="Team of 3"
              price="High-end £££"
              // onVisit={() => console.log("Visit Profile")}
            />
            <ArtistCard
              image="/images/gallaryimage3.jpg"
              name="John Doe"
              studio="JD Studio"
              tagline="Award-Winning Hair Stylist — Award-Winning Makeup Artist"
              location="London"
              areas="UK"
              team="Team of 3"
              price="High-end £££"
              // onVisit={() => console.log("Visit Profile")}
            />
            <ArtistCard
              image="/images/gallaryimage6.jpg"
              name="John Doe"
              studio="JD Studio"
              tagline="Award-Winning Hair Stylist — Award-Winning Makeup Artist"
              location="London"
              areas="UK"
              team="Team of 3"
              price="High-end £££"
              // onVisit={() => console.log("Visit Profile")}
            />
          </div>
          <div className="row m-0 mt-5">
            <ArtistCard
              image="/images/gallaryimage1.jpg"
              name="Gosia Kielkowska"
              studio="GK Makeup"
              tagline="Malgorzata Kielkowska — Award-Winning Makeup Artist"
              location="Manchester"
              areas="UK & Europe"
              team="Solo"
              price="Mid-range ££"
              // onVisit={() => console.log("Visit Profile")}
            />

            <ArtistCard
              image="/images/gallaryimage2.jpg"
              name="John Doe"
              studio="JD Studio"
              tagline="Award-Winning Hair Stylist — Award-Winning Makeup Artist"
              location="London"
              areas="UK"
              team="Team of 3"
              price="High-end £££"
              // onVisit={() => console.log("Visit Profile")}
            />
            <ArtistCard
              image="/images/gallaryimage3.jpg"
              name="John Doe"
              studio="JD Studio"
              tagline="Award-Winning Hair Stylist — Award-Winning Makeup Artist"
              location="London"
              areas="UK"
              team="Team of 3"
              price="High-end £££"
              // onVisit={() => console.log("Visit Profile")}
            />
            <ArtistCard
              image="/images/gallaryimage4.jpg"
              name="John Doe"
              studio="JD Studio"
              tagline="Award-Winning Hair Stylist — Award-Winning Makeup Artist"
              location="London"
              areas="UK"
              team="Team of 3"
              price="High-end £££"
              // onVisit={() => console.log("Visit Profile")}
            />
          </div>
        </div>
      </section>

      {/* section-3 */}

      <section className="find-artist-contantent">
        <section className="pt-5 pt-4 pb-4">
          <div className="row">
            <div className="col-sm-4">
              <div>
                {/* <h3 className="fs-1 robotofont text-uppercase">
                  {" "}
                  {getWordRange(
                    pageData?.browseArtist?.title,
                    1,
                    3
                  )} <br />{" "}
                  <span className="clrheading ">
                    {getWordRange(pageData?.browseArtist?.title, 4, 7)}
                  </span>
                  <br />
                  {getWordRange(pageData?.browseArtist?.title, 8, "n")}
                </h3> */}
                <div dangerouslySetInnerHTML={{ __html: pageData?.browseArtist?.title || "" }}></div>
                {/* <h3 className="fs-1 robotofont text-uppercase">
                                    {" "}
                                    Browse artist portfolios, <br /> <span className="clrheading ">compare styles, and book</span>
                                    <br />your perfect match - all in one place.
                                </h3> */}
              </div>
            </div>
            <div className="col-sm-8">
              <div className="playfairfont ps-3">
                {/* <p
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: formatNewLines(
                      pageData?.browseArtist?.description || ""
                    ),
                  }}
                /> */}
                <div dangerouslySetInnerHTML={{ __html: pageData?.browseArtist?.description || "" }}></div>
                {/* <p className="">This section of our platform is designed for personal clients looking to book trusted artists for weddings, proms, or private events.</p>
                                <p className="mt-4">

                                    Our artist directory makes it easy to explore real portfolios, read reviews, and connect directly with professionals who understand your vision. From classic bridal looks and modern glam to editorial and red-carpet styles, find the artistry that makes your occasion truly unfo rgettable.
                                </p>

                                <p className="pt-4">Please note: If you’re a brand, production company, or agency looking to hire hair and makeup artists for paid roles or creative projects, please visit our Job Board instead..</p> */}
                <div className="d-flex flex-column  pt-2 lines">
                  <p className="pt-3 finds name-font playfairfont  lh-lg text-uppercase fw-bold">
                    visit our Job Board
                    <MoveRight />
                  </p>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
