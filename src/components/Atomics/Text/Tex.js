import React from 'react'
import PropTypes from 'prop-types'
import './Tex.scss';

const Tex = ({theme, title}) => {
    return (
        <div className={theme}>
            {title}
        </div>
    )
}

Tex.propTypes = {
    theme: PropTypes.string,
    title: PropTypes.string
}

export default Tex
