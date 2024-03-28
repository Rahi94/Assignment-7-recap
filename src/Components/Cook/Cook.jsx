
import PropTypes from 'prop-types'
import Cooking from '../Cooking/Cooking';
const Cook = ({ cook }) => {
    return (
        <div className="w-5/12 border-2 border-gray-300 rounded-2xl">
            {/* want to cook */}
            <div>
                <h3 className="text-center font-bold text-xl mt-4">Want to Cook: {cook.length}</h3>
                {
                    cook.map(cooking => <Cooking key={cooking.calories} cooking={cooking}></Cooking>)
                }
                <div className="flex gap-6 justify-evenly mt-6 w-3/4">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
               
            </div>
            {/* currently cooking */}
            <div className="mt-20">
                <h3 className="text-center font-bold text-xl mt-4">Currently cooking: 00</h3>
               
                <div className="flex gap-6 justify-evenly mt-6 w-3/4">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
            </div>
        </div>
    );
};

Cook.propTypes = {
    cook: PropTypes.array
}
export default Cook;