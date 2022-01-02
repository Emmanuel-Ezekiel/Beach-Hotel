import React, { useContext} from 'react'
import { RoomContext } from '../Context'

function FeaturedRooms() {
    const data = useContext(RoomContext)
    
    return (
        <div>
            hello welcome to featured rooms {data}
        </div>
    )
}

export default FeaturedRooms
