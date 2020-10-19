import React, { Component } from 'react';
import LocationCard from '../components/LocationCard';
import '../styles/Locations.css';

class Location extends Component {
    constructor(props){
        super(props);
        this.state = {
            nextPage: 1,
            data: {
                info: {
                    next: "",
                    prev: ""
                },
                results: []
            },
            loading: true,
            error: null 
        }
    }

    componentDidMount(){
        this.getLocations();
    }
    getLocations = async () => {
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${this.state.nextPage}`);
            const data = await response.json();
            this.setState ({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(this.state.data.results, data.results)
                    },
                nextPage: this.state.nextPage + 1
            })
        }
        catch{
            this.setState({loading: false, error:true})
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="characters_container">
                    {this.state.data.results.map((data)=> {
                            return <LocationCard key={data.id} data={data} />
                    })}
                </div>
                {this.state.data.info.next && (
                    <button className="extend_btn" onClick={this.getLocations}> See More </button>
                )}
            </React.Fragment>
        );
    }
}

export default Location;