import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddMovie() {
    const [ID, setID] = useState();
    const [Title, setTitle] = useState();
    const [Overview, setOverview] = useState();
    const [R_Date, setR_Date] = useState();
    const [isValid, setIsValid]=useState(true);
    const navigate= useNavigate();

    const handleSubmit = async (e) => {
        
        await e.preventDefault();
        if(ID===undefined ||Title===undefined ||Overview===undefined ||R_Date===undefined){
            setIsValid(false)
            console.log("ID",ID)
        }else{
        fetch('http://localhost:3000/results', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: ID,
                title: Title,
                overview: Overview,
                release_date: R_Date
            })
        })
            .then(res => res.json())
            .then(Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Movie has been added successfully!',
                showConfirmButton: false,
                timer: 1500
              })).then(navigate('/moviesList'));
    }}



    return (
        <>

            <form className="text-center" onSubmit={handleSubmit}>
                <div className='w-50 mx-auto form-group' style={{border:!isValid?'2px solid yellow':'black'}}>
                    <input className=' form-control' type="number"  name="pid" placeholder="Movie ID" onChange={(e) => { setID(e.target.value) }} />
                    <br></br>
                    <input className=' form-control' type="text" name="ptitle" placeholder="Movie Title" onChange={(e) => { setTitle(e.target.value) }} />
                    <br></br>
                    <input className=' form-control' type="text" name="pover" placeholder="Movie Overview" onChange={(e) => { setOverview(e.target.value) }} />
                    <br></br>
                    <input className=' form-control' type="date" name="pdate" placeholder="Movie Price" onChange={(e) => { setR_Date(e.target.value) }} />
                    <br></br>
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </>
    )

}
export default AddMovie;