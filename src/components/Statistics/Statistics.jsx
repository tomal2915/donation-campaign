
import { getDonationInfo } from '../LocalStorage/LocalStorage';
import { Chart } from "react-google-charts";

const donation = getDonationInfo();
const myDonation = donation.length;
const totalDonation = 100 - myDonation;

const data = [
  ["Category", "Value"],
  ["My Donation", myDonation],
  ["Total Donation", totalDonation - myDonation],
];

const options = {
  title: "Donation Statistics",
  is3D: true,
};

const Statistics = () => {
  return (
    <div className="mt-36 mb-10 max-w-7xl mx-auto">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"500px"}
      />
    </div>
  );
};

export default Statistics;
