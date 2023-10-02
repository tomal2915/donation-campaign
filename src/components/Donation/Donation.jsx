import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getDonationInfo } from "../LocalStorage/LocalStorage";
import Donate from "../Donate/Donate";


const Donation = () => {

  const categories = useLoaderData();
  const [donation, setDonation] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const storedDonationInfo = getDonationInfo();
    if (categories.length > 0) {
      const donationDone = categories.filter(category => storedDonationInfo.includes(category.id));
      setDonation(donationDone);
    }
  }, [categories]);

  const handleBtn = () => {
    setDataLength(donation.length);
  }

  return (
    <div className="mt-36 mb-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          donation.slice(0, dataLength).map(donate => (<Donate key={donate.id} donate={donate}></Donate>))
        }
      </div>

      <div className="flex justify-center mt-8">
        <div className={dataLength === donation.length && 'hidden'}>
          <button onClick={handleBtn} className="px-4 py-4 bg-[#009444] text-white font-semibold rounded-lg">View Details</button>
        </div>
      </div>

    </div>
  )
}

export default Donation