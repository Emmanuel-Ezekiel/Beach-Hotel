import React, { useState, useEffect, useContext } from 'react'
import items from './data'
const RoomContext = React.createContext()
function RoomProvider(props) {
    const [ getData, setGetData ] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
    })
    const [ formData, setFormData ] = useState(items)
    // getting data



    useEffect(() => {
        let rooms = formData
        let featuredRooms = rooms.filter(room => room.fields.featured === true)
        setGetData({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
        })
    }, [formData])

    return (
        <>
        <RoomContext.Provider value={{ ...getData }}>
            {props.children}
        </RoomContext.Provider>       
        </>
    )
}


const  RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext}; 
