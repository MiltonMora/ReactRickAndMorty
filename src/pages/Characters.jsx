import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';
import '../styles/Characters.css';
import Next from '../Assets/Next.png';
import Prev from '../Assets/Prev.png';

class Characters extends Component {

    constructor(props) {
        super(props)
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
        this.handleApiNextLink = this.handleApiNextLink.bind(this);
        this.handleApiPrevLink = this.handleApiPrevLink.bind(this);
    }
    componentDidMount() {
        this.getCharacters();
    }

    handleApiNextLink() {
        this.getCharacters('next');
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    handleApiPrevLink() {
        this.getCharacters('prev');
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    getCharacters = async (value) => {
        var next;
        var nextPageState = 2;
        if(value === 'next') {
            next = this.state.nextPage;
            nextPageState = this.state.nextPage +1
        }
        else if(value === 'prev') {
            next = this.state.nextPage - 2;
            nextPageState = this.state.nextPage -1
        }
        else {
            next = 1;
            nextPageState = 2;
        }
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${next}`);
            const data = await response.json();
            this.setState({
                loading: false,
                data: data,
                nextPage: nextPageState,
            });
        }
        catch {
            this.setState({loading: false, error:true})
        }
    } 
    render() {    
        const next =  this.state.data.info.next ? <button className="btn" onClick={this.handleApiNextLink}> <img src={ Next } className="Next" alt="Next"/> </button>: ''; 
        const prev =  this.state.data.info.prev ? <button className="btn" onClick={this.handleApiPrevLink}> <img src={ Prev } className="Prev" alt="Prev"/> </button>: ''; 
        if(this.state.error){
            return `Error: ${this.state.error.message}`;
        }
        return (
            <React.Fragment>
                <div className="characters_container">
                    {this.state.data.results.map((data)=> {
                            return <CharacterCard key={data.id} data={data} />
                    })}
                </div>
                <div className="pagination_container">
                    {prev}
                    {next}                    
                </div>
            </React.Fragment>
        );
    }
}


export default Characters;