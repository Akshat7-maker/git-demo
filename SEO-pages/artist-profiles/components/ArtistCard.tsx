"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";

interface ArtistCardProps {
  image: string;
  name: string;
  studio: string;
  tagline: string;
  location: string;
  areas: string;
  team: string;
  price: string;
  onVisit?: () => void;
}

export default function ArtistCard({
  image,
  name,
  studio,
  tagline,
  location,
  areas,
  team,
  price,
  onVisit,
}: ArtistCardProps) {
  return (
    <div className="card-style card-styling-sec col-sm-3 mb-4">
      <div className="rounded-3 border overflow-hidden card-hei">

        {/* Top Image Area with Blur Background */}
        <div className="blur-image-container">
          <div
            className="blur-card"
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          <div className="main-image">
            <Image
              className="rounded-top-3 object-fit-cover w-100"
              src={image}
              alt={name}
              width={400}
              height={250}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-3 card-contant">
          <h3 className="robotofont">
            {name}  <img src="/images/Vector.svg" alt="" />
            </h3>
            <h3 className="robotofont">
            {studio}
            </h3>
          

          <h6 className="playfairfont mt-3">{tagline}</h6>

          <div className="robotofont mt-3">
            <p>
              <span className="text-secondary">Location </span>
              {location}
            </p>
            <p>
              <span className="text-secondary">Areas Covered </span>
              {areas}
            </p>
            <p>
              <span className="text-secondary">Team Size </span>
              {team}
            </p>
            <p>
              <span className="text-secondary">Price </span>
              {price}
            </p>
          </div>

          <div className="line-button mt-3">
            <div className="btn-lines">
              <a href="/branding-listing/view-artist">
                <button onClick={onVisit}>
                  <p>Visit Profile <MoveRight/></p>
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
