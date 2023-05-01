import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddProduct() {
    const [ID, setID] = useState();
    const [Name, setName] = useState();
    const [Desc, setDesc] = useState();
    const [Price, setPrice] = useState();
    const [isValid, setIsValid]=useState(true);
    const navigate= useNavigate();

    const handleSubmit = async (e) => {
        
        await e.preventDefault();
        if(ID===undefined ||Name===undefined ||Desc===undefined ||Price===undefined){
            setIsValid(false)
            console.log("ID",ID)
        }else{
        fetch('http://localhost:3003/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: ID,
                title: Name,
                description: Desc,
                price: Price
            })
        })
            .then(res => res.json())
            .then(Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Product has been added successfully!',
                showConfirmButton: false,
                timer: 1500
              })).then(navigate('/products'));
    }}



    return (
        <>

            <form className="text-center" onSubmit={handleSubmit}>
                <div className='w-50 mx-auto form-group' style={{border:!isValid?'2px solid yellow':'black'}}>
                    <input className=' form-control' type="number"  name="pid" placeholder="Product ID" onChange={(e) => { setID(e.target.value) }} />
                    <br></br>
                    <input className=' form-control' type="text" name="ptitle" placeholder="Product Title" onChange={(e) => { setName(e.target.value) }} />
                    <br></br>
                    <input className=' form-control' type="text" name="pdesc" placeholder="Product Description" onChange={(e) => { setDesc(e.target.value) }} />
                    <br></br>
                    <input className=' form-control' type="number" name="pprice" placeholder="Product Price" onChange={(e) => { setPrice(e.target.value) }} />
                    <br></br>
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </>
    )

}
export default AddProduct;