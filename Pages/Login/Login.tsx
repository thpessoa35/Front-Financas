import React, { useEffect, useState } from "react";
import { Container, Container1, Form, InputBox } from "./style";
import Inputs from "../../Input/Inputs/style";
import { Button } from "../../Input/Button/style";
import ServiceApi from "../../Service/ServiceApi";
import RegisterValidator from "../../Expection/checkRegister";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [ShowButton, setShowButton] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(60);
  const [showTimer, setShowTimer] = useState(false);
  const [MessageSucess, SetMessageSucess] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false); // Alterado para inicializar como false
  const navigate = useNavigate();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      setLoading(true); // Inicia o indicador de carregamento

      const serviceApi = new ServiceApi();
      const validator = new RegisterValidator();
      const checkEmail = validator.validateEmail(email);

      if (!checkEmail) {
        setError("Email inválido");
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      }

      setError("");
       await serviceApi.SendEmail(email);

      setTimeout(() => {
        setShowButton(true);
        setShowCodeInput(true);
        setLoading(false); // Finaliza o indicador de carregamento
        setShowTimer(false);
      }, 0);
    } catch (error: any) {
      setError("Falha ao enviar e-mail");
    } finally {
      setLoading(false); // Em caso de erro, também finaliza o indicador de carregamento
    }
  };

  const handleCodeSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      

      const serviceApi = new ServiceApi();
      const validator = new RegisterValidator();
      const checkEmail = validator.validateEmail(email);

      if (!checkEmail) {
        setError("Email inválido");
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      }
      setError("");
      const handleCode = await serviceApi.HandleCodigo(email, codigo);
     
      setAuthenticated(true);
      navigate("/home");
      setShowButton(true);

      return handleCode;
    } catch (error: any) {
      setError("Codigo invalido")
    } finally {
      setLoading(false); // Finaliza o indicador de carregamento
    }
  };

  const sendEmailAgain = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setLoading(true); // Inicia o indicador de carregamento

      const serviceApi = new ServiceApi();
      const validator = new RegisterValidator();
      const checkEmail = validator.validateEmail(email);

      if (!checkEmail) {
        setError("Email inválido");
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      }
      setError("");
      setElapsedSeconds(30);
      await serviceApi.SendEmail(email);

      setShowButton(false);
      setShowTimer(true);
      setLoading(false)

      setTimeout(() => {
        setShowButton(true);
      }, 30000);
    } catch (error: any) {
      setError("Falha ao enviar e-mail");
      console.error("Erro Axios:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false); // Finaliza o indicador de carregamento
    }
  };

  useEffect(() => {
    let intervalId: any;
    setShowTimer(showCodeInput && !ShowButton);

    if (showCodeInput && !ShowButton) {
      intervalId = setInterval(() => {
        setElapsedSeconds((prevSeconds) => {
          if (prevSeconds === 1) {
            clearInterval(intervalId);
            setElapsedSeconds(0);
            setShowTimer(false);
            setShowButton(true);
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [showCodeInput, ShowButton]);

  return (
    <>
      <Container1>
        <h1 className="animate__animated animate__fadeInLeftBig">BUSINESS FINANCE</h1>
        <Container>
          <Form>
            <InputBox>
              <h2>Login</h2>
              {MessageSucess && <span>{MessageSucess}</span>}
              {error && <span>{error}</span>}
              <Inputs
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </InputBox>

            {showCodeInput && (
              <InputBox>
                <Inputs
                  type="text"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
                <label>Código</label>
              </InputBox>
            )}

            <Button
              type="button"
              onClick={showCodeInput ? handleCodeSubmit : handleClick}
              className="Button"
            >
              {showCodeInput ? "Verificar Codigo" : "Enviar Email"}
            </Button>

            {ShowButton && (
              <Button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  sendEmailAgain(e);
                }}
                className="click-animation"
                style={{
                  backgroundColor: "your-desired-color",
                  cursor: "pointer",
                }}
              >
                Enviar Email
              </Button>
            )}
            {showTimer && <p className="Timer">Enviar Email: {elapsedSeconds} segundos</p>}
            {loading && <span className="Loading">Enviando...</span>}
            <p className="P-Register">
              You don't Have Account? <a href="/Register">Register</a>
            </p>
          </Form>
        </Container>
      </Container1>
    </>
  );
}
