

const Banner = () => {
    return (
        <div className=" hero h-[500px]" style={{
            backgroundImage: 'url(https://i.ibb.co/C7nNPgm/bg.jpg)'
        }}>
            <div className="hero-overlay bg-opacity-50 bg-[#FFFFFFF2]">

            </div>
            <div className="text-center text-neutral-content max-w-7xl mx-auto">
                <p className="text-5xl font-bold text-[#0B0B0B] flex-grow">I Grow By Helping People In Need</p>
                <div className="flex justify-center	mt-[40px]">
                    <div className="form-control ">
                        <input type="text" placeholder="Search here...." className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <button className="btn btn-primary bg-[#FF444A] text-white">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Banner