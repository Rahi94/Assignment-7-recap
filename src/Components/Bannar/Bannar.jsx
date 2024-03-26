import tasty from '../../../src/assets/tasty-pizza-near-ingredients.jpg'

const Bannar = () => {
    return (
        <div className=' mt-12 mx-16 mb-6'>
            <div className='relative '>
                <img className='rounded-xl' src={tasty} alt="" />
            </div>
            <div className='flex flex-col text-center -mt-96 z-10 filter: brightness-100'>
                <h3 className='font-bold text-5xl mb-4 text-white'>Discover an exceptional cooking <br />
                    class tailored for you!</h3>
                <p className='font-semibold mb-6 text-white'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
                    problems to become an exceptionally well world-class Programmer.</p>
                <div className='flex justify-center gap-4'>
                    <button className='p-4 bg-lime-500 rounded-3xl font-bold'>Explore Now</button>
                     <button className='p-4 bg-transparent border-2 border-white text-white rounded-3xl font-bold'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;