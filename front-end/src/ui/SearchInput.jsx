import { Text, devices } from '@/lib/CommonStyles';
import { styled } from 'styled-components';

export const SearchInput = styled.input`
  /* width: 26rem; */
  padding-left: 2rem;
  height: 3.5rem;
  border-radius: 9999rem;
  transition: all 0.3s ease-out;
  border: none;
  background-color: var(--color-yellow-300);
  box-shadow: var(--shadow-md);
  color:  var(--color-grey-400);

  &:focus{
    outline: 0.3rem solid var(--color-yellow-700);
  }

@media (${devices.mobileS}) {
  width: 10rem;
}

@media (${devices.tablet}) {
  width: 26rem;
  &:focus {
    width: 35rem;
    outline: 0.5rem solid var(--color-yellow-700);
  }
}

  &::placeholder {
color: var(--color-grey-400);
}


`;

