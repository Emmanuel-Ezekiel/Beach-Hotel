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
        // this.state = {
        //     slug: this.props.match.params.slug,
        //     defaultBcg
        // }
    }

    // componentDidMount() {
    // const { slug } = this.props.match.params;
    // console.log(slug)
    // }

    static contextType = RoomContext
    render() {
        
        const { getRoom } = this.context;
        // const room = getRoom(this.state.slug)
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
