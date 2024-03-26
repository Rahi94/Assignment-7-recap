
import PropTypes from 'prop-types';
import { MdAccessTime } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
const Blog = ({ blog }) => {
    const {title,img,description,ingredients, time, calories} = blog;
    return (
        <div className='border-2 border-gray-300 rounded-xl p-4'>
            <img className='rounded-xl h-64 w-96' src={img} alt="" />
            <h2 className="text-3xl font-bold mt-4">{title}</h2>
            <p className='mb-3  mt-3'>{description}</p>
            
            <hr />
            <h2 className='text-xl font-bold mb-4'>Ingredients: 3</h2>
            <ol className='font-semibold ml-4 mb-3'>
                <li>1.{ingredients[0]}</li>
                <li>2.{ingredients[1]}</li>
                <li>3.{ingredients[2]}</li>
            </ol>

            <hr />
            <div className='flex gap-8 mt-3'>
                <div className='flex items-center gap-1'>
                <MdAccessTime></MdAccessTime>
                <p className='font-medium'>{time} minutes</p>
                </div>
                <div className='flex items-center gap-1'>
                <SlEnergy></SlEnergy>
                <p className='font-medium'>{calories} calories</p>
                </div>
            </div>
            <button className='bg-green-500 text-white p-3 rounded-2xl mt-6 font-semibold flex mx-auto'>Want to cook</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;