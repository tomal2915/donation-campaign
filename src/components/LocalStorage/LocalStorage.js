
const getDonationInfo = () => {
  const storedDonationInfo = localStorage.getItem('DonationInfo');
  if(storedDonationInfo){
    return JSON.parse(storedDonationInfo);
  }
  return [];
}

const saveDonationInfo = id => {
  const setDonationInfo = getDonationInfo();
  const exist = setDonationInfo.find(donationId => donationId === id);
  if(!exist){
    setDonationInfo.push(id);
    localStorage.setItem('DonationInfo', JSON.stringify(setDonationInfo));
  }
}

export { getDonationInfo, saveDonationInfo}