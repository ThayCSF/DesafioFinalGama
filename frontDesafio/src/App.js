import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// -------------------------------- ESTILO ------------------------------------------------------

const BackgroundDiv = styled.div `
background: papayawhip no-repeat center center fixed;
background-size: cover;
border: none;
padding: none;
height: 100vh
` 

const Title = styled.h1 `
color: palevioletred;
font-size: 50px;
text-align: left;
font-family: 'Source Sans Pro', sans-serif
`
const LabelTitle = styled.label `
font-family: 'Source Sans Pro', sans-serif;
padding: 2px
`

const Button = styled.button `
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
align-items: center;
cursor: pointer
`;

const FormInput = styled.input`
border: 1px solid black;
padding: 5px 10px;
align-items: center;
text-align: center
width: 50%;
border-radius: 5px 0px 5px 0px;
font-weight: 700;
`;

const ErrorSpan = styled.span`
  color: red;
  display: ${(props) => props.isError ? 'block' : 'none'}
`;

// ----------------------------- CÓDIGO --------------------------------------------------------

const App = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, logradouro: address.data.logradouro, bairro: address.data.bairro, localidade: address.data.localidade, uf: address.data.uf  });
  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('http://localhost:3000/register', form);
      if (user.status === 200) {
        alert('Sucesso!');
      }

    } catch (error) {
      setCpfError(true);
    }
  };

  const [form, setForm] = useState({
    nome: '',
    cargo:'',
    dataNascimento: '',
    estadoCivil: '',
    genero: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    localidade: '',
    uf: '',
    telefone: '',
    email: '',
    rg: '',
    cpf: '',
    possuiVeiculo: '', 
    habilitacaoTipo: ''
  });

  useEffect (() => {
    console.log(form);
  }, [form]);

  const [cpfError, setCpfError] = useState(false);

    return (

    <BackgroundDiv>

      <Title> JobsNet </Title>

      <div>
        <LabelTitle>Nome</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, nome: e.target.value });
        }} value={form.nome}></FormInput>
      </div>

      <div>
        <LabelTitle>Cargo</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, cargo: e.target.value });
        }} value={form.cargo}></FormInput>
      </div>

      <div>
        <LabelTitle>Data de nascimento</LabelTitle>
        <FormInput placeholder="xx/xx/xx" onChange={(e) => {
          setForm({ ...form, dataNascimento: e.target.value });
        }} value={form.dataNascimento}></FormInput>
      </div>

      <div>
        <LabelTitle>Estado civil</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, estadoCivil: e.target.value });
        }} value={form.estadoCivil}></FormInput>
      </div>

      <div>
        <LabelTitle>Gênero</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, genero: e.target.value });
        }} value={form.genero}></FormInput>
      </div>

      <div>
        <LabelTitle>CEP</LabelTitle>
        <FormInput placeholder="00000000" onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep}></FormInput>
      </div>

      <div>
        <LabelTitle>Logradouro</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, logradouro: e.target.value });
        }} value={form.logradouro}></FormInput>
      </div>

      <div>
        <LabelTitle>Número</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, numero: e.target.value });
        }} value={form.numero}></FormInput>
      </div>

      <div>
        <LabelTitle>Bairro</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, bairro: e.target.value });
        }} value={form.bairro}></FormInput>
      </div>

      <div>
        <LabelTitle>Cidade</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, localidade: e.target.value });
        }} value={form.localidade}></FormInput>
      </div>

      <div>
        <LabelTitle>Estado</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, uf: e.target.value });
        }} value={form.uf}></FormInput>
      </div>

      <div>
        <LabelTitle>Telefone</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, telefone: e.target.value });
        }} value={form.telefone}></FormInput>
      </div>

      <div>
        <LabelTitle>E-mail</LabelTitle>
        <FormInput placeholder="email@email.com" onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email}></FormInput>
      </div>

      <div>
        <LabelTitle>RG</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, rg: e.target.value });
        }} value={form.rg}></FormInput>
        <ErrorSpan isError={cpfError}>Ocorreu um erro.</ErrorSpan>
      </div>

      <div>
        <LabelTitle>CPF</LabelTitle>
        <FormInput onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf}></FormInput>
        <ErrorSpan isError={cpfError}>Ocorreu um erro.</ErrorSpan>
      </div>

      <div>
        <LabelTitle>Possui veículo</LabelTitle>
        <FormInput placeholder="sim ou não" onChange={(e) => {
          setForm({ ...form, possuiVeiculo: e.target.value });
        }} value={form.possuiVeiculo}></FormInput>
      </div>

      <div>
        <LabelTitle>Tipo de habilitação</LabelTitle>
        <FormInput placeholder="Tipos: A, B, C, D ou E" onChange={(e) => {
          setForm({ ...form, habilitacaoTipo: e.target.value });
        }} value={form.habilitacaoTipo}></FormInput>
      </div>

      <Button onClick={() => createCandidate()}>Salvar</Button>
    </BackgroundDiv>

  );
};

export default App;
