import main_logo from '../../assets/imgs/main_logo.png'



function FormLogo(){
    return (
        <div style={{textAlign: 'center'}}>
        <img
            src={main_logo}
            width="60px"
            height="60px"
            className="d-inline-block align-top"
        />
        <p style={{marginLeft: '6px', marginTop: '2px', fontSize: '27px'}} className='mb-3'>OmicronTests</p>
        </div>
    )
}


export function BaseContour(props){    
    return (
        <div className='border col-sm-9 col-md-6 col-lg-5 col-xl-4 mx-auto mt-5 p-4' >
            <FormLogo></FormLogo>
            {props.children}
        </div>
    )
}

