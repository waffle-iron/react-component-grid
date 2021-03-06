import React, { PropTypes } from 'react';

export default class GridRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }
    _onClick() {
        const { rowClickHandler } = this.props;
        if (rowClickHandler) {
            rowClickHandler(this.props.id);
        }
    }
    render() {
        return (
            <div className={this.props.rowClass} style={{ display: 'flex' }} onClick={this._onClick}>
                { this.props.children }
            </div>
        );
    }
}

GridRowComponent.propTypes = {
    children: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    rowClickHandler: PropTypes.func,
    rowClass: PropTypes.string
};
