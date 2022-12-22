import { PropTypes } from "prop-types";
import Box from "components/Box/Box";
import { Title } from "./Section.styled";


const Section = ({ title, children }) => {
    return <Box>
        <Title>{title}</Title>
        {children}
    </Box>
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Section