import React, { useEffect, useState } from "react";
import { Container, Container1, Form, InputBox } from "./style";
import Inputs from "../../Input/Inputs/style";
import { Button } from "../../Input/Button/style";
import ServiceApi from "../../Service/ServiceApi";
import User from "../../Entities/User";
import RegisterValidator from "../../Expection/checkRegister";
import { useNavigate } from "react-router-dom";



export function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const serviceApi = new ServiceApi();
  const [Error, SetError] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const validator = new RegisterValidator();

      const checkEmail = validator.validateEmail(email);
      const checkName = validator.validateName(name);

      if (!checkEmail || !checkName) {
        SetError("Erro ao criar Usuário");
        setTimeout(() => {
          SetError('');
        }, 2000);
        return;
      }

      SetError('');
      const user: User = {
        name: name,
        email: email
      };

      const response = await serviceApi.createUser(user);

      console.log(response);


      setTimeout(() => { navigate('/Login')}, 2000);

      return response;
    } catch (error: any) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;

        if (errorMessage === 'Email Ja Cadastrado.') {
          SetError('E-mail já cadastrado.');
        } else {
          SetError('Erro ao criar conta');
        }
      } else {
        SetError('Erro ao criar conta');
      }
    }
  };


  return (
    <>
      <Container1>
        <h1 className="animate__animated animate__fadeInLeftBig">BUSINESS FINANCE</h1>
        <Container>
          <Form>
            <InputBox>
              <h2>Register</h2>
              {Error && <span>{Error}</span>}
              <Inputs
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name</label>
            </InputBox>
            <InputBox>
              <Inputs
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </InputBox>
            <Button type="button" onClick={handleClick}>Register</Button>
            <p className="P-Register">You Have Account? <a href="/Login">Login</a></p>

          </Form>
        </Container>
      </Container1>
    </>
  );
};
