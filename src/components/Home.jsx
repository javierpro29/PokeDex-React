import React, { useEffect, useState } from "react";
import './style.css'
import Card from "./Card";
import Pokeinfo from "./Pokeinfo"
import axios from "axios";

const Main = () => {

    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [prev, setPrev] = useState()
    const [next, setNext] = useState()
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () =>{
        setLoading(true)
        const res = await axios.get(url);
        
        //console.log(res.data)
        //console.log(res.data.results)

        setNext(res.data.next)
        setPrev(res.data.previous)
        getPokemon(res.data.results)
        setLoading(false)
        
        //console.log(pokeData)
    } 

    const getPokemon = async(res) => {
        res.map( async(item) => {
            const result = await axios.get(item.url)
            //console.log(result.data)
            setPokeData(state=>{
                state=[...state, result.data]

                state.sort( (a,b) => a.id > b.id ? 1 : -1)

                return state
            })
        })
    }

    useEffect(() => {
        pokeFun();
    },[url])


    return(
        <>
            <div className='container'>

                <div className="right-content">
                    <Pokeinfo data={pokeDex} />
                </div>


                <div className="left-content">
                    
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}  />
                    
                    <div className="btn-group">

                        { prev &&
                            <button onClick={()=> { 
                                setPokeData([]) 
                                setUrl(prev)
                            }}>Previous</button>
                        }

                        {next &&
                            <button onClick={()=> { 
                                setPokeData([]) 
                                setUrl(next)}
                            }>Next</button>
                        }
                    </div>

                </div>



            </div>
        </>
    )
}

export default Main