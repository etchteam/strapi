/**
 *
 * StyedListRow
 *
 */

import styled from 'styled-components';

import { colors } from 'strapi-helper-plugin';

const StyedListRow = styled.tr`
  background-color: transparent;
  cursor: pointer;
  p {
    margin-bottom: 0;
  }
  img {
    width: 35px;
  }
  button {
    cursor: pointer;
  }
  td:first-of-type {
    padding-left: 3rem;
  }
  td:nth-child(2) {
    width: 25rem;
    p {
      font-weight: 500;
      text-transform: capitalize;
    }
  }
  td:last-child {
    text-align: right;
  }
  &:hover {
    background-color: ${colors.grey};
  }
`;

export default StyedListRow;