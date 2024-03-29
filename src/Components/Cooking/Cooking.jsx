
import PropTypes from 'prop-types';

const Cooking = ((cooking) => {
    console.log(cooking)
    const { time, title, calories } = cooking;
    return (
        <div className='flex  gap-4 justify-around'>
            <h3 className='text-3xl'>{title}</h3>
            <h3 className='text-3xl'>{time}</h3>
            <h3 className='text-3xl'>{calories}</h3>
        </div>
    );
});

Cooking.propTypes = {
    Cooking: PropTypes.object
};

export default Cooking;