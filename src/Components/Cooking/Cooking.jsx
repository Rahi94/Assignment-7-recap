
import PropTypes from 'prop-types';

const Cooking = ((cooking) => {
    console.log(cooking)
    const{description} = cooking;
    return (
        <div>
            <h3 className='text-3xl'>{description}</h3>
        </div>
    );
});

Cooking.propTypes = {
    Cooking: PropTypes.object
};

export default Cooking;