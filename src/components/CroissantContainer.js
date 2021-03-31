import React from 'react';
import { connect } from 'react-redux';
import { buyCroissant } from '../redux/index';

function CroissantContainer(props) {
    return (
        <div>
            <h2>Number of Croissants - {props.numOfCroissants}</h2>
            <button onClick={props.buyCroissant}>Buy Croissant</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCroissants: state.croissant.numOfCroissants
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCroissant: () => dispatch(buyCroissant())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CroissantContainer)
