import React, { useState } from 'react'
// import Headingform from './HeadingForm';
// import InputUser from './InputUser';
// import ButtonUser from './ButtonUser';
import { Link } from 'react-router-dom'
import ButtonLogin from './ButtonLogin'
import Field from './FieldForm'
import LoginLink from './LoginLink'

function Form (props) {
  const [value, setValue] = useState({
    user: '',
    password: ''
  })
  const [inicioSesion, setInicioSesion] = useState('')
  const [checkUser, setCheckUser] = useState({
    user: '',
    password: ''
  })
  function changeHandler (event) {
    console.log('entre')
    const { id, value } = event.target
    setValue((prevValue) => {
      return {
        ...prevValue,
        [id]: value
      }
    })
  }

  function submitHandler (event) {
    event.preventDefault()
    setCheckUser(value)
    fetch('http://localhost:8080/maestros/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numero_trabajador: checkUser.user,
        password: checkUser.password
      })
    })
      .then((res) => res.json())
      .then((res) => setInicioSesion(res.message))
  }
  return (
    <div className='container-center'>
      <div className='row justify-content-center'>
        <div className='col-xl-10 col-lg-12 col-md-9'>
          <div className='card o-hidden border-0 shadow-lg my-5'>
            <div className='card-body p-0'>
              <div className='row'>
                <div className='col-lg-6 d-none d-lg-block bg-login-image' />
                <div className='col-lg-6'>
                  <div className='p-5'>
                    <form className='user' onSubmit={submitHandler}>
                      <div className='text-center'>
                        <h1 className='h4 mb-4' style={{ color: '#800040' }}>
                          Sistema de control de adeudos
                        </h1>
                      </div>

                        <Field
                          type='text'
                          className='form-control form-control-user'
                          id='user' aria-describedby='emailHelp'
                          placeholder='Ingresa tu numero de trabajador'
                          Handler = {changeHandler}
                        />
                        <Field
                          type='password'
                          className='form-control form-control-user'
                          id='password' aria-describedby='emailHelp'
                          placeholder='Ingresa tu contraseña'
                          style={{ color: '#800040' }} Handler={changeHandler}
                        />
                      <ButtonLogin
                        text = "Iniciar sesion"
                        type = "submit"
                      />

                    </form>
                    <hr />
                    <LoginLink
                    text = "Olvidaste tu contrasenia?"
                    link = {true}
                    />
                    <div className='text-center'>
                      <Link
                        to='/register' class='small'
                        style={{ color: '#800040' }}
                      >
                        Registrarse
                      </Link>
                    </div>
                    <div className='text-center'>
                      <p className='h4 mb-4' style={{ color: '#800040' }}>
                        {inicioSesion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Form