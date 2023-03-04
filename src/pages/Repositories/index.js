import React from 'react';

import * as S from './styles';
import Profile from './Profiles';
import Filter from './Filter';

const Repositories = () => (
  <S.Container>
    <S.SideBar>
      <Profile />
      <Filter />
    </S.SideBar>
    <S.Main>Main</S.Main>
  </S.Container>
);

export default Repositories;
