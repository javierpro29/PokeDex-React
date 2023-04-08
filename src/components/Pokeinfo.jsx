import React from "react";
import './style.css'

const Pokeinfo = ({data}) => {
    /* console.log(data) */
    return(
        <>
            <div className="pokeinfo-container">
                {
                (!data) ? "" :  
                    <>
                        <div className="pokeinfo-left">
                            <h1>{data.name}</h1>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt="" />

                            <div className="abilities">

                                {
                                    data.abilities.map(poke=>{
                                        return(
                                            <>
                                                <div className="group">
                                                    <h2>{poke.ability.name}</h2>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>


                        <div className="base-stat">

                            {
                                data.stats.map(poke=>{
                                    return(
                                        <>
                                            <div className="ability">
                                                <h3>{poke.stat.name} : {poke.base_stat} </h3>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </>
                }

            </div>


        </>
    )
}

export default Pokeinfo