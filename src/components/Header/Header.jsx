import { NavLink } from "react-router-dom"


const Header = () => {
    return (
        <div className="navbar backdrop-opacity-5 backdrop-invert bg-white/50 max-w-7xl mx-auto"
            style={{
                position: 'fixed', // Fixed position to keep it on top
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000, // Corrected the camelCase property name
            }}
        >
            <div className="flex-1 ">
                <img src='https://i.ibb.co/DkSY02n/Logo.png' alt="Logo" /> {/* Use the imported logo */}
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/donation">Donation</NavLink></li>
                    <li><NavLink to="/statistics">Statistics</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header