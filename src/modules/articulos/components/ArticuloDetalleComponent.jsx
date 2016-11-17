import React, { Component } from 'react';
import money from "money-math";

import { 
    Card, CardActions, 
    CardHeader, CardMedia, CardTitle, CardText, FlatButton 
} from "material-ui";

export class ArticuloDetalleComponent extends Component{
    render(){
        const precioStyle = {
            fontSize: "2rem"
        };
        const precioContainerStyle = {
            width: "50%",
            display: "inline-block"
        };
        return (
            <Card 
                style={{ height: "100%"}}
                containerStyle={{display: "flex", flexDirection: "column", minHeight:"100%", maxHeight:"100%" }}
            >
                <CardHeader
                    title={this.props.articulo.nombre}
                    subtitle={this.props.articulo.dimensiones}
                    avatar={this.props.articulo.imagen}
                    />
                <CardMedia
                    style={{ 
                        display:"flex",
                        flexDirection:"column",
                        borderTop:"solid 1px gainsboro",
                        borderBottom:"solid 1px gainsboro",
                        height:"100%",
                        flex:"1"
                    }}
                    mediaStyle={{ height: "100%", textAlign: "center", flex:"1", display:"flex" }}
                    >
                    <div>
                        <img
                            style={{height:"100%"}} 
                            src={this.props.articulo.imagen} 
                            alt={this.props.articulo.nombre}
                        />
                    </div>
                </CardMedia>
                <CardTitle
                    title={this.props.articulo.nombre}
                    subtitle={this.props.articulo.dimensiones}
                    />
                <CardText>
                    <div style={{ width: "100%" }}>
                        <div style={precioContainerStyle}>
                            <label>Precio Unitario</label><br />
                            <span style={precioStyle}>$ {money.format("EUR", money.floatToAmount(this.props.articulo.precioUnitario))}</span>
                        </div>
                        <div style={precioContainerStyle}>
                            <label>Precio de Venta</label><br />
                            <span style={precioStyle}>$ {money.format("EUR", money.floatToAmount(this.props.articulo.precioVenta))}</span>
                        </div>
                    </div>
                </CardText>
                <CardActions style={{borderTop:"solid 1px gainsboro"}}>
                    <FlatButton label="Administrar Proveedores"/>
                    <FlatButton label="Editar"/>
                    <FlatButton label="Eliminar"/>
                </CardActions>
            </Card>
        );
    }
}