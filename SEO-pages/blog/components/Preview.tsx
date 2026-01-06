'use client'
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

import styles from "./BlogPreview.module.css";
import { formatNewLines, getWordRange } from "@/utils/useFul_func";

interface BlogPreviewProps {
  data: {
    blog_hub?: {
      title?: string;
      description?: string;
    };
    seo?: {
      title?: string;
      description?: string;
    };
  };
}

export default function BlogPreview({ data }: BlogPreviewProps) {
  const title = data?.blog_hub?.title || "THE ARTIST JOURNAL";
  const description = data?.blog_hub?.description || "Expert business and artistry insights for professional hair and makeup artists, alongside essential beauty and planning guides for brides.";

  return (
    <Box sx={{ bgcolor: "white", minHeight: "100%" }}>

      {/* Exact copy of user-facing blog page */}
      <section className={styles.blogPageSec}>
        {/* section-1 */}
        <section className={styles.haddingSec}>
          <div className={styles.haddingSec}>
            <div className={styles.rightHadding}>
              <h1 className={styles.nameFont}
              dangerouslySetInnerHTML={{
                __html: formatNewLines(title),
              }}
              >
                {/* {getWordRange(title, 1, 2)} <span>{getWordRange(title, 3, "n")}</span> */}
              </h1>
            </div>
            <div className={styles.leftSubHadding}>
              <div className={styles.subHadd}>
                <p 
                  className={styles.titlefont}
                  dangerouslySetInnerHTML={{
                    __html: formatNewLines(description),
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* section-2 */}
        <section className={styles.featuredArticleSec}>
          <div className={styles.artistHadding}> 
            <h3 className={`${styles.robotofont} ${styles.headingBrand} ${styles.setLineHeight}`}>
              Featured 
              <span className={`${styles.colorLove} ${styles.positionRelative}`}>
                {" "}Article
                <img src="/images/curveLine.png" alt="" className={styles.curveLine}/>
              </span>
            </h3>
          </div>
          
          <section className={styles.featuredArticle}>
            <div className={styles.featuredArticleImage}>
              <Image
                src="/images/Pro makeup artist discounts.png"
                alt="Featured article"
                width={700}
                height={500}
              />
            </div>

            <div className={styles.featuredArticleContent}>
              <div className={`${styles.dFlex} ${styles.alignItemsEnd} ${styles.gap5}`}>
                <div className={`${styles.featuredLabel} ${styles.nameFont}`}>Bridal</div>
                <span className={`${styles.featuredDate} ${styles.titlefont}`}>December 15, 2024</span>
              </div>

              <h2 className={`${styles.featuredTitle} ${styles.nameFont}`}>
                Best Pro Makeup Artist :
                <br />
                Discounts & Memberships (2025 UK)
              </h2>

              <p className={`${styles.featuredExcerpt} ${styles.titlefont}`}>
                Discover the top pro makeup artist discounts in 2025. Save 20–40% on kit essentials with MAC, NARS, Charlotte Tilbury, Benefit, and more.
              </p>

              <div className={styles.featuredMeta}>
                <span>By Hair & Makeup Hub</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
          </section>
        </section>

        {/* section-3 */}
        <section className={styles.cardContinerSec}>
          <div className={styles.filters}>
            <div className={styles.filterButtons}>
              <button className={`${styles.filterBtn} ${styles.nameFont} ${styles.active}`}>ALL</button>
              <button className={`${styles.filterBtn} ${styles.nameFont}`}>Bridal</button>
              <button className={`${styles.filterBtn} ${styles.nameFont}`}>Pro Tips</button>
              <button className={`${styles.filterBtn} ${styles.nameFont}`}>Business</button>
              <button className={`${styles.filterBtn} ${styles.nameFont}`}>Community</button>
            </div>
          </div>

          <section className={styles.cardsSec}>
            {/* Card 1 */}
            <article className={styles.blogCard}>
              <div className={styles.blogImage}>
                <Image
                  src="/images/Pricing for Hair and Makeup Services.jpg"
                  alt="Blog cover"
                  width={400}
                  height={260}
                />
              </div>

              <div className={styles.blogContent}>
                <span className={`${styles.blogCategory} ${styles.nameFont}`}>Business</span>

                <h3 className={`${styles.blogTitle} ${styles.nameFont}`}>
                  How to Price Hair and Makeup Services with confidence.
                </h3>

                <p className={`${styles.blogExcerpt} ${styles.titlefont}`}>
                  Discover how to price your hair and makeup services without underselling yourself. A practical guide for freelance artists to set fair,
                </p>

                <div className={`${styles.blogMeta} ${styles.nameFont}`}>
                  <span>December 12, 2024</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article className={styles.blogCard}>
              <div className={styles.blogImage}>
                <Image
                  src="/images/job-board.jpg"
                  alt="Blog cover"
                  width={400}
                  height={260}
                />
              </div>

              <div className={styles.blogContent}>
                <span className={`${styles.blogCategory} ${styles.nameFont}`}>Pro Tips</span>

                <h3 className={`${styles.blogTitle} ${styles.nameFont}`}>
                  Building a Sustainable Beauty Business: A Practical Guide
                </h3>

                <p className={`${styles.blogExcerpt} ${styles.titlefont}`}>
                  Learn the essential strategies for creating a profitable and
                  eco-conscious beauty business that stands the test of time.
                </p>

                <div className={`${styles.blogMeta} ${styles.nameFont}`}>
                  <span>December 12, 2024</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
              </div>
            </article>

            {/* Card 3 */}
            <article className={styles.blogCard}>
              <div className={styles.blogImage}>
                <Image
                  src="/images/job-board.jpg"
                  alt="Blog cover"
                  width={400}
                  height={260}
                />
              </div>

              <div className={styles.blogContent}>
                <span className={`${styles.blogCategory} ${styles.nameFont}`}>Community</span>

                <h3 className={`${styles.blogTitle} ${styles.nameFont}`}>
                  Building a Sustainable Beauty Business: A Practical Guide
                </h3>

                <p className={`${styles.blogExcerpt} ${styles.titlefont}`}>
                  Learn the essential strategies for creating a profitable and
                  eco-conscious beauty business that stands the test of time.
                </p>

                <div className={`${styles.blogMeta} ${styles.nameFont}`}>
                  <span>December 12, 2024</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
              </div>
            </article>
          </section>
        </section>

        {/* SEO Preview */}
        {data?.seo?.title && (
          <div className={styles.seoPreview}>
            <span className={styles.seoLabel}>
              🔍 SEO Preview (Google Search Result)
            </span>
            <h3 className={styles.seoTitle}>{data.seo.title}</h3>
            <p className={styles.seoDescription}>{data.seo.description}</p>
          </div>
        )}
      </section>
    </Box>
  );
}