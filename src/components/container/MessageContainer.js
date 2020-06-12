import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../Message';
import  PropTypes  from 'prop-types';

class MessageContainer extends Component {
    render() {
        const { message } = this.props;

        return (
            <Message message={message}/>
        );
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        message: state.Message
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);