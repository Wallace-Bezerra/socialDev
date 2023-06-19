import Image from "next/image";
import dots from "../../assets/dots.svg";
import { AnimatePresence } from "framer-motion";
import { dateFormatter } from "../../../utils/dataFormatter";
import { CardContainer, Content, Heading } from "./styles";
import { ModalOptions } from "../modalOptions";
import { useState, useRef, useEffect } from "react";
import { EditPost } from "../EditPost";

export const Card = ({ name, date, content, isOwner, id }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEditPost, setEditPost] = useState(false);
  const modalOptions = useRef(null);

  useEffect(() => {
    const clickOutside = (event) => {
      if (
        modalOptions.current &&
        !modalOptions.current.contains(event.target)
      ) {
        setIsOpenModal(false);
      }
    };
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [modalOptions]);
  return (
    <CardContainer layout="position" transition={{ duration: 0.5 }}>
      <Heading>
        <div>
          <h2>@{name}</h2>
          <time>{dateFormatter(new Date(date))}</time>
        </div>

        {isOwner && (
          <div
            className="options"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpenModal((prev) => !prev);
            }}
          >
            <Image src={dots} alt="dots" />
          </div>
        )}
        <AnimatePresence>
          {isOpenModal && (
            <ModalOptions
              ref={modalOptions}
              id={id}
              setEditPost={setEditPost}
              setIsOpenModal={setIsOpenModal}
            />
          )}
        </AnimatePresence>
      </Heading>
      <Content>{content}</Content>
      {isOwner && isEditPost && (
        <EditPost setEditPost={setEditPost} content={content} id={id}></EditPost>
      )}
    </CardContainer>
  );
};
