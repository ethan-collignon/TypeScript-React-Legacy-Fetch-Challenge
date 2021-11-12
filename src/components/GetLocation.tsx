import React, {Component} from 'react';
import Weather from './GetWeather'

type Coords = {
    lon: number,
    lat: number
}

export default class GetLocation extends Component<{}, Coords>{
    constructor(props: string){
        super(props)
        this.state = {
            lon: 0,
            lat: 0
        }
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition(this.setCoords);
    }

    setCoords = (pos: any) => {
        
        
        this.setState({
            lon: pos.coords.longitude,
            lat: pos.coords.latitude
        })
        console.log(this.state.lon);
        console.log(this.state.lat);
    }

    componentDidMount() {
        this.getLocation()
    }
    
    render() {
        return (
            <div>
                <Weather lat={this.state.lat} lon={this.state.lon}/>
            </div>
        )
    }
}


