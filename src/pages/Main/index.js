import React, { useState } from 'react';

import { MdSearch } from 'react-icons/md';
import * as S from './styles';

import LogoApiGitHub from '../../assets/images/github-logo.svg';

const Main = () => {
  const [login, setLogin] = useState('');
  return (
    <S.Container>
      <S.Logo src={LogoApiGitHub} alt="Logo GitHub" />
      <S.Title>API Github</S.Title>
      <S.Form>
        <S.Input
          placeholder="usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <S.Button>
          <MdSearch size={42} />
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Main;
