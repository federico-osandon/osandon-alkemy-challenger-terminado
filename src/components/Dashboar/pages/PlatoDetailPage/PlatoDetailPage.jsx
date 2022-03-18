import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { Row, Col } from 'react-bootstrap'

const API_KEY = import.meta.env.VITE_API_KEY
const URL_ID = import.meta.env.VITE_SPOONACULAR_URL_ID

function PlatoDetailPage(props) {
    const [ itemDetail, setItemDetail ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { id } = useParams()
    
    const getItemId = async () => {
        try {
            const queryProductId = await axios.get(`${URL_ID}/${id}/information/${API_KEY}`)              
            setItemDetail(queryProductId.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            swal("Error",error, 'error')
        }
    }
    
    useEffect(() => {
        getItemId()       
    }, [])

    return (
        <div className="container border border-primary border-3 rounded shadow-lg p-5 mt-5">
            {loading ? 
                    <h2>Cargando...</h2> 
                : 
                    <>
                        <center>
                            <h2 className='mt-1'>{itemDetail.title}</h2>
                        </center>   
                        <Row className="mt-5">
                            <Col>
                                <img src={itemDetail.image} className="rounded" />
                            </Col>
                            <Col style={{ fontSize: 26, textAlign: 'center' }}>
                                <label className='alert alert-danger '>Vegano: {itemDetail.vegan ? ' SI' : ' NO'}</label><br />
                                <label className='alert alert-primary '>Precio: {itemDetail.pricePerServing.toFixed(2)}</label><br />
                                <label className='alert alert-success '>Tiempo de Preparación: {itemDetail.readyInMinutes}</label><br />
                                <label className='alert alert-success '>Puntaje de salud: {itemDetail.healthScore}</label>                                
                            </Col>
                            <Link to={'/dashboard/buscar'} className='w-100'>
                                <button className='btn btn-outline-primary btn-lg mt-5 w-100'>
                                    Volver
                                </button>
                            </Link>
                        </Row> 
                    </>
            }
        </div>
    )
}

export default PlatoDetailPage