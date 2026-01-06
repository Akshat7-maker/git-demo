"use client";
import { MoveRight } from "lucide-react";
import { COLOR } from "rsuite/esm/internals/constants";

interface JobCardProps {
  title: string;
  price: string;
  extraDescrip:string;
  description: string;
  points?: string[];               // optional
  variant?: "one" | "two" | "three";
 ringColor:string;
 tickColor:string;
}

export default function JobCard({
  title,
  price,
  extraDescrip,
  description,
  points = [],        // default to empty array
  variant = "one",
  ringColor,
  tickColor,
}: JobCardProps) {
  return (
    <div className={`card card-${variant}`}>
      <div className="hadding-card">
        <h2>{title}</h2>
        <h1>{price}</h1>
      </div>
        <div className="small-hadd">
          <p>{extraDescrip}</p>
        </div>
      <div className="sub-hadd">
        <p>{description}</p>
      </div>

      <div className="points">
        {points.length > 0 ? (
          points.map((point, idx) => (
            <div className="conatin" key={idx}>
              <div className="logo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 11L12 14L20 6"
                    stroke={tickColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 12C20 13.05 19.79 14.09 19.39 15.06C18.99 16.03 18.39 16.91 17.65 17.65C16.91 18.39 16.03 18.99 15.06 19.39C14.09 19.79 13.05 20 12 20C10.95 20 9.91 19.79 8.94 19.39C7.97 18.99 7.09 18.39 6.34 17.65C5.6 16.91 5.01 16.03 4.61 15.06C4.21 14.09 4 13.05 4 12C4 10.95 4.21 9.91 4.61 8.94C5.01 7.97 5.6 7.09 6.34 6.34C7.09 5.6 7.97 5.01 8.94 4.61C9.91 4.21 10.95 4 12 4C13.05 4 14.09 4.21 15.06 4.61"
                    stroke={ringColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>{point}</p>
            </div>
          ))
        ) : (
          <p>No points available.</p>
        )}
      </div>

      <div className="click-btn">
        <button>
          Post a Job Now <MoveRight />
        </button>
      </div>
    </div>
  );
}
