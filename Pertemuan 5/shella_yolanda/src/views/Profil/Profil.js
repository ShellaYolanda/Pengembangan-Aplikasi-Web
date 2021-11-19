import React from 'react';

export default class Home extends React.Component {
    render(){
        return(
            <div>
                <h2>Profil {this.props.match.params.nama}</h2>
            </div>
        )
    }
}