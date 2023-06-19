import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const ModalContainer = styled(motion.div)`
  position: absolute;
  top: 15px;
  right: 0;
  width: 120px;
  background: #ffffff;
  border: 0.714286px solid rgba(146, 151, 183, 0.24);
  box-shadow: 0px 8.57143px 11.4286px -2.85714px rgba(16, 24, 40, 0.08);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 10px 16px;
  p {
    border-radius: 8px;
    padding: 4px 8px;
    transition: all 0.4s ease;
    width: max-content;
    cursor: pointer;
    color: #5B628A;
    :hover {
      background-color: #f5f5f5;
    }
    &.delete {
      color: #e45656;
    }
  }
`;
