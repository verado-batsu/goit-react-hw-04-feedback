import { SectionBox } from 'components/Section/Section.styled';
import PropTypes from 'prop-types';

function Section({ title, children }) {
	return (
		<SectionBox>
			<h2>{title}</h2>
			{children}
		</SectionBox>
	)
}

export { Section };

Section.propTypes = {
	title: PropTypes.string.isRequired,
}