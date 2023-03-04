import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import * as S from './styles';

const Profile = () => (
  <S.Container>
    <S.Header>
      <S.Avatar src="https://avatars.githubusercontent.com/u/55540536?v=4" />
      <S.Login>devSamurai</S.Login>
      <S.Name>Dev Samurai</S.Name>
    </S.Header>
    <S.Inner>
      <S.Data>
        <MdGroup size={20} />
        30&nbsp;<i>seguidores</i>&nbsp; &middot; &nbsp;10&nbsp;<i>seguindo</i>
      </S.Data>
      <S.Data>
        <MdWork size={20} />
        Dev Samurai
      </S.Data>
      <S.Data>
        <MdLocationCity size={20} />
        São José dos Campos
      </S.Data>
      <S.Data>
        <MdLink size={20} />
        <a href="https://devsamurai.com.br">devsamurai.com.br</a>
      </S.Data>
    </S.Inner>
  </S.Container>
);

export default Profile;
