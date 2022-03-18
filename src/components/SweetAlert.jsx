import { useState } from 'react'
import SweetAlert from 'sweetalert-react';

function SweetAlertMessage({ condition= false, title= '', text= '', changeCondition }) {
    const [state, setState] = useState({ show: condition })
    
    const handleChange = () => {
        setState({ show: false })
        changeCondition(false)
    } 

    return (
        <>        

            <SweetAlert 
                show={state.show} 
                title={title}
                text= {text}
                onConfirm={handleChange}
            />
        </>
    )
}

export default SweetAlertMessage