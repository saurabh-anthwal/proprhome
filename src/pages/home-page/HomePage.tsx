import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SplashScreen from "../splash-screen/Index";

type PropertyCardProps = {
  title: string;
  price: string;
  imageUrl: string;
};

type CollapsibleSectionProps = {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  price,
  imageUrl,
}) => (
  <div className="mt-2 p-4 bg-gray-50 rounded text-xs flex gap-2">
    <img className="h-16" src={imageUrl} alt={title} />
    <div>
      <p className="font-bold">{title}</p>
      <span>{price}</span>
    </div>
  </div>
);

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => (
  <div>
    <div
      onClick={onClick}
      className="text-xs py-2 font-semibold border-b-2 flex justify-between items-center cursor-pointer"
    >
      <span>{title}</span>
      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </div>
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? "max-h-full" : "max-h-0"
      }`}
    >
      {content}
    </div>
  </div>
);

const HomePage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
          <div className=" p-4 flex flex-col justify-between h-full">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <img
                  className="h-8"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJOM3sCUqfpQm-kv2LSib3sFVSl9yjwM-w_fDNGeFJa1JG6ZL"
                  alt="Logo"
                />
                <RxCross2 />
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="bg-gray-50 shadow-lg p-3 w-full">
                  <p className="text-[8px]">Total Drafts</p>
                  <b className="text-green-400">16</b>
                </div>
                <div className="bg-gray-50 shadow-lg p-3 w-full">
                  <p className="text-[8px]">Uploaded Property</p>
                  <b className="text-green-400">10</b>
                </div>
              </div>

              {/* Collapsible Section 1 */}
              <CollapsibleSection
                title="Recent Uploaded Property"
                isOpen={openIndex === 1}
                onClick={() => toggleCollapse(1)}
                content={
                  <PropertyCard
                    title="T2 flat for sale in rua Sertório do Monte Pereira, 11"
                    price="365,000 €"
                    imageUrl="https://storage.googleapis.com/a1aa/image/7GNRH90PGlo5BJvdzXLVjgpMtfyDeQcW99NdquFe0lYiqKGnA.jpg"
                  />
                }
              />

              {/* Collapsible Section 2 */}
              <CollapsibleSection
                title="Recent Uploaded Property"
                isOpen={openIndex === 2}
                onClick={() => toggleCollapse(2)}
                content={
                  <div className="mt-4 p-4 bg-gray-100 rounded text-xs">
                    <p>
                      This is the content inside the second collapsible section.
                    </p>
                  </div>
                }
              />
            </div>

            <button className="w-full rounded-full text-xs bg-green-400 text-white">
              Add Property
            </button>
          </div>
  );
};

export default HomePage;
