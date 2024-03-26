
import { FaRegCircleUser } from "react-icons/fa6";
const Header = () => {
    return (
        <div className='flex items-center justify-around mt-8'>
            <h3 className="text-3xl font-bold text-black">Recipe Calories</h3>
            <div className='flex gap-12'>
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>
            <div className='flex gap-3 items-center'>
                <input className="rounded-xl p-1 bg-slate-100" type="text" placeholder="Search here"/>
                <button className="bg-green-500 rounded-full"><FaRegCircleUser></FaRegCircleUser></button>
            </div>
        </div>
    );
};

export default Header;