import { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import MenuList from '../../components/MenuList'
import { Field, Formik, Form } from 'formik'
import * as Yup from 'yup';
import swal from 'sweetalert-react';

const API_KEY = import.meta.env.VITE_API_KEY
const URL = import.meta.env.VITE_SPOONACULAR_URL_ALL + API_KEY

function SearchPage() {
    const [ listSearch, setListSearch ] = useState([])
    const [ notRsult, setNotResult ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const handleOnSubmit = async ({ keywords, isPlatoVegano } ) => {
       
            try {        
                const result = await axios.get(`${URL}&query=${keywords}&number=12&addRecipeInformation=true${isPlatoVegano ? "&diet=vegan" : ""}`)
                setListSearch(result.data.results)               
                setNotResult(true)
                setLoading(false)          
            } catch (error) {               
                swal("Error", error.message, "error")
            }
    }

    return (
        <>
            <Container className="mt-5 mb-5">
                <Formik
                    initialValues={{
                        keywords: "",
                        isPlatoVegano: false
                    }}
                    validationSchema={ Yup.object().shape({
                        keywords: Yup.string().min(2, "Ingrese al menos dos letras para realizar la búsqueda.").required("Ingrese alguna palabra clave.")
                    })}
                    onSubmit={(values) => {
                        setLoading(true)
                        handleOnSubmit(values)
                    }}
                >
                    {({ errors, touched }) => (
                        <>
                            <Form >
                                <h2>Buscador de platos</h2>         
                                <Row>
                                    <Col md={8} >
                                        <Field 
                                            type="text"
                                            className="form-control" 
                                            name="keywords" 
                                        />

                                    </Col>
                                    <Col md={4} >
                                        <button 
                                            type="submit" 
                                            className="btn btn-outline-success w-50"
                                        >
                                            Buscar
                                        </button>
                                    </Col>
                                    <div className="dietaContainer" >
                                        <Field                                         
                                            type="checkbox" 
                                            id="isPlatoVegano" 
                                            name="isPlatoVegano" 
                                        />{' '}
                                        <label htmlFor="vegano">Vegano</label>
                                    </div>
                                </Row>
                                
                            </Form>
                            {touched.keywords && errors.keywords ?
                                    <div className="alert alert-danger m-2" role="alert"> 
                                        {errors.keywords} 
                                    </div> 
                                :
                                    undefined
                            }
                        </>)}
                </Formik>                
            </Container>
            <hr />
            {loading ?
                    <h2>Cargando...</h2> 
                : 
                    ( notRsult  &&
                        (listSearch.length ===0 ? 
                            <h2>No se encontro resultado.</h2> 
                            : 
                            <div>
                                <center>                                    
                                    <h2>Listado</h2>
                                </center>
                                <MenuList menuList={listSearch} />
                            </div>)
                    )
            }  
                    
        </>
    )
}

export default SearchPage