import { useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationInfo } from "../LocalStorage/LocalStorage";


const CategoryDetails = () => {
    const categories = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    const category = categories.find(category => category.id === intId);

    // const textBtn = {
    //     backgroundColor: category.card_bg,
    //     color: category.text_button_bg,
    // };

    const notify = () => {
        saveDonationInfo(intId);
        toast("Thanks for your help");
    }

    return (
        <div className="mt-36 mb-10 max-w-7xl mx-auto">
            <div className="relative">
                <img className="w-[1280px] h-[400px]" src={category.picture} alt="" />
                <div className="backdrop-opacity-5 backdrop-invert bg-[#0B0B0B7F] w-[1280px] absolute bottom-0">
                    <button onClick={notify} className="px-4 py-4 m-8 bg-[#FF444A] text-white font-semibold	rounded-lg">Donate {category.price}</button>
                    
                </div>
            </div>
           <div className="mt-14">
            <h2 className="text-[#0B0B0B] text-[40px] font-bold">{category.title}</h2>
            <p className="mt-6">{category.description}</p>
           </div>
           <ToastContainer />
        </div>
    )
}

export default CategoryDetails