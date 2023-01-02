import bg from '../public/paralacs.jpg'
import  Image  from 'next/image';
import {useParams, useRouter} from 'next/router'




export default function TourPage(){
    const router = useRouter()
    const {id, comment} = router.query
    
    return (
        <div>
            <Image src={bg} alt="yui" style={{width: '100%', height:'100vh'}}  priority />
            <h1>TOUR PAGE {id} {comment}</h1>
        </div>
    )
}