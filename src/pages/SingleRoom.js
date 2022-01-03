import React, { Component } from 'react'
import defaultBcg from '../images/room-2.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'




export default class SingleRoom extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <div>
                hello singleroom page
            </div>
        )
    }
}












// const SingleRoom = props  => {
//     console.log(props)
    // const { getRoom } = useContext(RoomContext)

    // const [ state, setState ] = useState({
    //     slug: props.match.params.slug,
    //     defaultBcg
    // })


    // const room = getRoom(state.slug)

//     useEffect(() => {   
//         console.log(props)
//     }, [])

//     return (
//         <div>
//             hello singleroom page
//         </div>
//     )
// }

// export default SingleRoom
