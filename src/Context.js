import React, { useState, useContext } from 'react'
import items from './data'
const RoomContext = React.createContext()
function RoomProvider(props) {
    const [ getData, setGetData ] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    })

    const [ formData, setFormData ] = useState(items)
    console.log(formData)

    const allData = () => {
        let tempItems = formData.map(item => {
            let idd = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room =
        })
    }



    return (
        <>
        <RoomContext.Provider value={'hello'}>
            {props.children}
        </RoomContext.Provider>       
        </>
    )
}


const  RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext}; 
