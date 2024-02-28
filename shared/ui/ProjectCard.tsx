import Image, { StaticImageData } from "next/image";
import React from "react";
import { projects } from "../constants";

const ProjectCard = () => {
  return (
    <div>
      {projects.map((Project, index) =>
        index % 2 == 0 ? (
          <div className="flex">
            <ImageContainer image={Project.image as any} />
            <InfoContainer
              InfoHeading={Project.heading}
              InfoDetails={Project.details}
            />
          </div>
        ) : (
          <div className="flex">
            <InfoContainer
              InfoHeading={Project.heading}
              InfoDetails={Project.details}
            />
            <ImageContainer image={Project.image as any} />
          </div>
        )
      )}
    </div>
  );
};

export default ProjectCard;

const ImageContainer = ({ image }: { image: File }) => {
  return (
    <div>
      <Image src={image as any} width={200} height={200} alt="image" />
    </div>
  );
};

const InfoContainer = ({
  InfoHeading,
  InfoDetails,
}: {
  InfoHeading: string;
  InfoDetails: string;
}) => {
  return (
    <div>
      <div>{InfoHeading}</div>
      <div>{InfoDetails}</div>
    </div>
  );
};
