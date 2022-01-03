import React, { Component } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'
import Loading from './Loading'
import Room from './Room'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    

    // const getRooms = rooms.map(room => {
    //     let images = room.fields.images.map(image => image.fields.file.url)
    //     let rum = { ...room.fields, images}
    //     return <Room key={room.sys.id} room={rum} />
    // })

    render() {
       let { loading, featuredRooms: rooms } = this.context;

       const room = rooms.map(room => {
           return <Room key={room.id} room={room} />
       })
        return (
            <div>
                <section className="featured-rooms">
                    <Title title="featured rooms"/>
                    <div className="featured-rooms-center">
                        {loading ? <Loading /> : room}
                    </div>
                </section>
            </div>
        )

    }
}

