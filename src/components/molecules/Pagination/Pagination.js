import React, { useState, useEffect } from "react"
import { PaginationBtn, PrevNextBtn } from "./Pagination.styles"
import { PaginationWrapper } from "./Pagination.styles"
import { Link } from "gatsby"

const Pagination = ({ currentPage, numPages }) => {
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
  let dotsInitial = '...';
  let dotsLeft = '... ';
  let dotsRight = ' ...';
  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons]
    const numPagesArray = Array.from({ length: numPages }, (v, k) => k + 1)
    if (numPagesArray.length < 6) {
      tempNumberOfPages = numPagesArray
    } else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numPagesArray.length]
    } else if (currentPage === 4) {
      const sliced = numPagesArray.slice(0, 5)
      tempNumberOfPages = [...sliced, dotsInitial, numPagesArray.length]
    } else if (currentPage > 4 && currentPage < numPagesArray.length - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = numPagesArray.slice(currentPage - 2, currentPage) // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numPagesArray.slice(currentPage, currentPage + 1) // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numPagesArray.length,
      ] // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentPage > numPagesArray.length - 3) {
      // > 7
      const sliced = numPagesArray.slice(numPagesArray.length - 4) // slice(10-4)
      tempNumberOfPages = [1, dotsLeft, ...sliced]
    }
    setArrOfCurrButtons(tempNumberOfPages)
  }, [currentPage, numPages])
  const handleNavigateLink = (item) => {
    if(item === 1) {
      return ""
    } else if(item === dotsInitial) {
      return Number(arrOfCurrButtons[arrOfCurrButtons.length - 3]) + 1
    } else if(item === dotsLeft) {
      return Number(arrOfCurrButtons[3]) - 2
    } else if(item === dotsRight) {
      return Number(arrOfCurrButtons[3]) + 2
    } else {
      return item
    }
  }
  return (
    <PaginationWrapper>
      <PrevNextBtn
        as={Link}
        to={`/${currentPage === 2 ? "" : currentPage - 1}`}
        disabled={currentPage === 1}
      >
        {`Lewo`}
      </PrevNextBtn>

      {arrOfCurrButtons.map((item, i) => (
        <PaginationBtn
          as={Link}
          to={`/${handleNavigateLink(item)}`}
          key={i}
          disabled={item === currentPage ? true : false}
          value={item}
        >
          <span>{item}</span>
        </PaginationBtn>
      ))}

      <PrevNextBtn
        as={Link}
        to={`/${currentPage + 1}`}
        disabled={currentPage === numPages}
      >{`Prawo`}</PrevNextBtn>
    </PaginationWrapper>
  )
}

export default Pagination
