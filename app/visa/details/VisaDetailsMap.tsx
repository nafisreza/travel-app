import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";

interface VisaDetailsProps {
  visaDetails: any;
}

export default function VisaDetailsMap({ visaDetails }: VisaDetailsProps) {
  const latitude = visaDetails.embassy.latitude;
  const longitude = visaDetails.embassy.longitude;
  const url = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div className="">
      <div className="my-5">
        <h1 className="text-green-700 font-semibold text-lg underline">Embassy Info</h1>
        <p className="font-semibold">{visaDetails.embassy.title}</p>
        
        <div className="flex gap-3 text-sm">
          <div>
            <p>Address:</p>
            <p>Email: </p>
            <p>Phone: </p>
            <p>Mobile: </p>
            <p>Fax: </p>
            <p>Website:</p>
          </div>
          <div>
            <p>{visaDetails.embassy.address}</p>
            <p>{visaDetails.embassy.email}</p>
            <p>{visaDetails.embassy.phone}</p>
            <p>{visaDetails.embassy.mobile}</p>
            <p>{visaDetails.embassy.fax}</p>
            <p>{visaDetails.embassy.website}</p>
          </div>
        </div>
      </div>
      <iframe
        src={url}
        className="w-full rounded-lg"
        height={380}
        style={{
          border: 0,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="my-5">
        <h1 className="text-green-700 font-semibold text-lg underline">Company Info</h1>
        <div className="flex items-center gap-3">
          <img src={visaDetails.company.image} alt="" className="h-12" />
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold">{visaDetails.company.title}</p>
              <MdVerified/>
            </div>
            <div className="flex gap-1 items-center mt-[-5px]">
              <FaStar/> <p className="mt-1">{visaDetails.rating}</p>
            </div>
            <div className="flex gap-3 text-sm">
              <div>
                <p>Email: </p>
                <p>Phone: </p>
              </div>
              <div>
                <p>{visaDetails.company.email}</p>
                <p>{visaDetails.company.mobile}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
