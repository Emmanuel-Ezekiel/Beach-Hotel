import React, { useContext} from 'react'
import { RoomContext } from '../Context'
import Title from './Title'
import Loading from './Loading'
import Room from './Room'

function FeaturedRooms() {
    const {  loading, featuredRooms: rooms } = useContext(RoomContext)

    const getRooms = rooms.map(room => {
        let images = room.fields.images.map(image => image.fields.file.url)
        let rum = { ...room.fields, images}
        return <Room key={room.sys.id} room={rum} />
    })

    
    return (
        <div>
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : getRooms}
                </div>
            </section>
        </div>
    )
}

export default FeaturedRooms
