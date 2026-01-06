"use client";

import Image from "next/image";

import styles from "./JobBoardPreview.module.css";
import { formatNewLines, getWordRange } from "@/utils/useFul_func";
import JobCard from "./jobcard";

interface JobBoardPreviewProps {
  data: any;
}

export default function JobBoardPreview({ data }: JobBoardPreviewProps) {
  return (
    // <section className={styles.fullJobBoard}>
    //     {/* ================= Section 1 ================= */}
    //     <section className={styles.jobBoardSec}>
    //         <div className={styles.newJobPost}>
    //             <div>
    //                 <h1 className="text-heading name-font text-uppercase"
    //                     dangerouslySetInnerHTML={{
    //                         __html: formatNewLines(data?.makeup_artist?.mainTitle),
    //                     }}
    //                 >
    //                     {/* {getWordRange(data?.makeup_artist?.mainTitle, 1, 1)}
    //                     <span className={styles.goldenHeading}>
    //                         {" "}
    //                         {getWordRange(data?.makeup_artist?.mainTitle, 2, 4)}
    //                     </span>{" "}
    //                     {getWordRange(data?.makeup_artist?.mainTitle, 5, 6)} */}
    //                 </h1>

    //                 {/* <h1 className="text-heading name-font text-uppercase line-height">
    //                     {getWordRange(data?.makeup_artist?.mainTitle, 7, "n")}
    //                 </h1> */}
    //             </div>

    //             <div className={styles.paraSub}>
    //                 <h3 dangerouslySetInnerHTML={{ __html: formatNewLines(data?.makeup_artist?.subTitle) }} >
    //                     {/* {data?.makeup_artist?.subTitle} */}
    //                 </h3>
    //                 <p
    //                     className="text-desc"
    //                     dangerouslySetInnerHTML={{
    //                         __html: formatNewLines(data?.makeup_artist?.description),
    //                     }}
    //                 />
    //             </div>
    //         </div>
    //     </section>

    //     {/* ================= Section 2 ================= */}
    //     <section className={styles.boardContainer}>
    //         <div className={styles.content}>
    //             <div className={styles.leftSide}>
    //                 <Image
    //                     src="/images/job-board2.jpg"
    //                     alt="Job Board"
    //                     width={708}
    //                     height={483}
    //                 />
    //             </div>

    //             <div className={styles.rightSide}>
    //                 <h1 className="text-heading name-font text-uppercase"
    //                     dangerouslySetInnerHTML={{
    //                         __html: formatNewLines(data?.job_board?.title),
    //                     }}
    //                 >
    //                     {/* {getWordRange(data?.job_board?.title, 1, 2)}
    //                     <span className={styles.goldenHeading}>
    //                         {" "}
    //                         {getWordRange(data?.job_board?.title, 3, 3)}
    //                     </span> */}
    //                 </h1>

    //                 {/* <h1 className="text-heading name-font text-uppercase">
    //                     <span className={styles.goldenHeading}>
    //                         {getWordRange(data?.job_board?.title, 4, 4)}
    //                     </span>{" "}
    //                     {getWordRange(data?.job_board?.title, 5, 6)}
    //                 </h1> */}

    //                 <div className={styles.subHeading}>
    //                     <p
    //                         dangerouslySetInnerHTML={{
    //                             __html: formatNewLines(data?.job_board?.description),
    //                         }}
    //                     />
    //                 </div>

    //                 <div className={styles.pinsAll}>
    //                     {(data?.job_board?.pins || [
    //                         "Film & TV production companies",
    //                         "Advertising & marketing agencies",

    //                     ]).map(
    //                         (item: string, index: number) => (
    //                             <div key={index} className={styles.pin}>
    //                                 {item}
    //                             </div>
    //                         )
    //                     )}
    //                 </div>
    //             </div>
    //         </div>
    //     </section>

    //     {/* ================= Section 3 ================= */}
    //     <section className={styles.secondBoard}>
    //         <section className={styles.boardContainer}>
    //             <div className={styles.content}>
    //                 <div className={`${styles.rightSide} ps-0`}>
    //                     <h1 className="text-heading name-font text-uppercase"
    //                         dangerouslySetInnerHTML={{
    //                             __html: formatNewLines(data?.job_post?.title),
    //                         }}
    //                     >
    //                         {/* {getWordRange(data?.job_post?.title, 1, 2)} */}
    //                     </h1>

    //                     {/* <h1 className="text-heading name-font text-uppercase">
    //                         <span className={styles.goldenHeading}>
    //                             {getWordRange(data?.job_post?.title, 3, 3)}
    //                         </span>
    //                     </h1> */}

    //                     <div className={styles.subHeading}>
    //                         <p
    //                             dangerouslySetInnerHTML={{
    //                                 __html: formatNewLines(data?.job_post?.description),
    //                             }}
    //                         />
    //                     </div>
    //                 </div>

    //                 <div className={styles.leftSide}>
    //                     <Image
    //                         src="/images/job-board.jpg"
    //                         alt="Job Posting Packages"
    //                         width={708}
    //                         height={483}
    //                     />
    //                 </div>
    //             </div>
    //         </section>
    //     </section>

    //     {/* ================= Section 4 (JOB CARDS) ================= */}
    //     <section className={styles.boardCards}>
    //         <JobCard
    //             variant="one"
    //             title="Essential Listing"
    //             price="£30 per post"
    //             extraDescrip=""
    //             description="Ideal for standard roles that need consistent visibility."
    //             points={[
    //                 "Standard placement on the Job Board",
    //                 "Full job description (title, requirements, location)",
    //                 "Applications delivered directly to your dashboard",
    //             ]}
    //             ringColor="#CBB682"
    //             tickColor="#CBB682"
    //         />

    //         <JobCard
    //             variant="two"
    //             title="Featured Listing"
    //             price="£50 per post"
    //             extraDescrip=""
    //             description="Perfect for roles that require more visibility and higher-quality candidates."
    //             points={[
    //                 "Everything in Basic, PLUS:",
    //                 "Featured Tag to highlight your listing",
    //                 "Higher placement in search results",
    //                 "Company logo displayed for increased brand visibility",
    //             ]}
    //             ringColor="#CBB682"
    //             tickColor="#CBB682"
    //         />

    //         <JobCard
    //             variant="three"
    //             title="Elite Listing"
    //             price="£80 per post"
    //             extraDescrip=""
    //             description="Designed for urgent, high-priority, competitive, or hard-to-fill roles."
    //             points={[
    //                 "Everything in Enhanced, PLUS:",
    //                 "Social media promotion across our channels",
    //                 "Priority placement in search results",
    //                 "Urgent Tag to signal immediate need to applicants",
    //             ]}
    //             ringColor="Black"
    //             tickColor="Black"
    //         />
    //     </section>
    // </section>

    <section className="full-job-board">
      <section className="home-contant p-0 job-board-sec">
        <div className="find-artist new-job-post">
          <div className="cont">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.makeup_artist?.mainTitle,
              }}
            >
              {/* <h1 className="text-heading name-font text-uppercase">{getWordRange(data?.makeup_artist?.mainTitle, 1, 1)}<span className="golden-heading">  {getWordRange(data?.makeup_artist?.mainTitle, 2, 4)}</span> {getWordRange(data?.makeup_artist?.mainTitle, 5, 6)}</h1> */}
              {/* <h1 className="text-heading name-font text-uppercase line-height">{getWordRange(data?.makeup_artist?.mainTitle, 7, "n")}</h1> */}
            </div>
            <div
              className="pt-4 para-sub"
              dangerouslySetInnerHTML={{
                __html: data?.makeup_artist?.subTitle,
              }}
            >
              {/* <h3 className="titlefont pt-5">
                                    {data?.makeup_artist?.subTitle}
                                </h3>
            <p className="text-desc titlefont pt-4" dangerouslySetInnerHTML={{ __html: formatNewLines(data?.makeup_artist?.description) }}></p> */}
            {/* <p className="text-desc titlefont pt-4" dangerouslySetInnerHTML={{ __html: data?.makeup_artist?.description }}></p> */}
            </div>
            <p dangerouslySetInnerHTML={{
                __html: data.makeup_artist?.description
            }}></p>
          </div>
        </div>
      </section>

      {/* section-2 */}
      <section className="board-conatiner">
        <div className="contant">
          <div className="left-side">
            <Image
              src="/images/job-board2.jpg"
              alt="Job Board Image"
              width={500}
              height={300}
              className="my-image"
            />
          </div>
          <div className="right-side">
            <div
              className="right-hadding"
              dangerouslySetInnerHTML={{
                __html: data?.job_board?.title,
              }}
            >
              {/* <h1 className="text-heading name-font text-uppercase">
                                    {getWordRange(data?.job_board?.title, 1, 2)}<span className="golden-heading">  {getWordRange(data?.job_board?.title, 3, 3)}</span>
                                </h1>
                                <h1 className="text-heading name-font text-uppercase">
                                    <span className="golden-heading">  {getWordRange(data?.job_board?.title, 4, 4)}</span> {getWordRange(data?.job_board?.title, 5, 6)}
                                </h1> */}
            </div>
            <div className="sub-hadding" 
            dangerouslySetInnerHTML={{
                __html:data?.job_board?.description
            }}>
              {/* <p
                className="text-desc titlefont"
                dangerouslySetInnerHTML={{
                  __html: formatNewLines(data?.job_board?.description),
                }}
              ></p> */}
            </div>
            <div className="pins-all">
              <div className="pins">Film & TV production companies</div>
              <div className="pins">Advertising & marketing agencies</div>
              <div className="pins">Modelling & talent agencies</div>
              <div className="pins">Corporate event organisers</div>
              <div className="pins">Theatre & live performance venues</div>
              <div className="pins">Beauty & skincare brands</div>
              <div className="pins">
                Media outlets (magazines, online publications)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-3 */}
      <section className="second-board-conatiner">
        <section className="board-conatiner">
          <div className="contant">
            <div className="right-side ps-0">
              <div className="right-hadding" 
              dangerouslySetInnerHTML={{
                __html:data?.job_post?.title
              }}
              >
                {/* <h1 className="text-heading name-font text-uppercase">
                  {getWordRange(data?.job_post?.title, 1, 2)}
                </h1>
                <h1 className="text-heading name-font text-uppercase">
                  <span className="golden-heading">
                    {" "}
                    {getWordRange(data?.job_post?.title, 3, 3)}
                  </span>
                </h1> */}
              </div>
              <div className="sub-hadding" 
              dangerouslySetInnerHTML={{
                __html:data?.job_post?.description
              }}
              >
                {/* <p
                  className="text-desc titlefont"
                  dangerouslySetInnerHTML={{
                    __html: formatNewLines(data?.job_post?.description),
                  }}
                ></p> */}
              </div>
            </div>
            <div className="left-side">
              <Image
                src="/images/job-board.jpg"
                alt="Job Posting Packages"
                width={500}
                height={300}
                className="my-image"
              />
            </div>
          </div>
        </section>
      </section>

      {/* section-4 */}
      <section className="board-cards">
        <JobCard
          variant="one"
          title="Essential Listing"
          price="£30 per post"
          extraDescrip=""
          description="Ideal for standard roles that need consistent visibility."
          points={[
            "Standard placement on the Job Board",
            "Full job description (title, requirements, location)",
            "Applications delivered directly to your dashboard",
          ]}
          ringColor="#CBB682"
          tickColor="#CBB682"
        />
        <JobCard
          variant="two"
          title="Featured Listing"
          price="£50 per post"
          extraDescrip=""
          description="Perfect for roles that require more visibility and higher-quality candidates."
          points={[
            "Everything in Basic, PLUS:",
            "Featured Tag to highlight your listing",
            "Higher placement in search results",
            "Company logo displayed for increased brand visibility",
          ]}
          ringColor="#CBB682"
          tickColor="#CBB682"
        />
        <JobCard
          variant="three"
          title="Elite Listing"
          price="£80 per post"
          extraDescrip=""
          description="Designed for urgent, high-priority, competitive, or hard-to-fill roles."
          points={[
            "Everything in Enhanced, PLUS:",
            "Social media promotion across our channels",
            "Priority placement in search results",
            "Urgent Tag to signal immediate need to applicants",
          ]}
          ringColor="Black"
          tickColor="Black"
        />
      </section>
    </section>
  );
}
