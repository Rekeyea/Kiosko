import React, { Component } from 'react';
import { connect } from "react-redux";
import { RequestArticulosAsync } from "./../actions";
import { list } from "./../selectors";
import { 
    List, ListItem, Avatar, Subheader, Paper 
} from "material-ui";
import {ArticuloDetalleComponent} from "./ArticuloDetalleComponent";

class ArticulosComponentNotYetConnected extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.RequestArticulosAsync();
    }
    render() {
        return (
            <div style={{ height: "100%" }} className="row">
                <Paper className="col-xs-3" style={{ height: "100%" }} zDepth={2}>
                    <List>
                        <Subheader>Articulos</Subheader>
                        {this.props.Articulos.map((v, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={<Avatar src={v.imagen} />}
                                primaryText={v.nombre}
                                secondaryText={v.dimensiones}
                                onClick={evt => this.setState({ articulo: v, edit:false })}
                                />
                        ))}
                    </List>
                </Paper>
                <div className="col-xs-9" style={{ height: "100%" }}>
                    {
                        this.state.articulo
                            ? <ArticuloDetalleComponent articulo={this.state.articulo}/>
                            : null
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        Articulos: list(state)
    };
};

const mapActionsToProps = {
    RequestArticulosAsync
};

export const ArticulosComponent = connect(mapStateToProps, mapActionsToProps)(ArticulosComponentNotYetConnected);