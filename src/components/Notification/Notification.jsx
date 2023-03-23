import PropTypes from 'prop-types';

function Notification({ message }) {
	return (
		<p>{message}</p>
	)
}

export { Notification };

Notification.propTypes = {
	message: PropTypes.string.isRequired,
}