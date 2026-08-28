import PropTypes from 'prop-types';


function Card({id, children}) {
  return (
    <div id={id} className="card">
        {children}
    </div>
  );
}

Card.PropTypes = {
    id:PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    children:PropTypes.node.isRequired
}
export default Card
