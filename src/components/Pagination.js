import React from 'react'

const Pagination = ({ filmsByPage, totalFilm, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalFilm / filmsByPage); i++){
        pageNumbers.push(i);
    }
    return (
      <nav aria-label="Page navigation example">
          <ul className="pagination">
              {pageNumbers.map(number=>(
                  <li key={number} className="page-item">
                      <a onClick={()=>paginate(number)} href className="page-link">
                          {number}
                      </a>
                  </li>
              ))}
          </ul>
      </nav>
    )
}

export default Pagination;
