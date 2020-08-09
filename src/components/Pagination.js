import React from 'react'
import { Link } from 'react-router-dom';

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
                      <Link  onClick={()=>paginate(number)} className="page-link">
                          {number}
                      </Link>
                  </li>
              ))}
          </ul>
      </nav>
    )
}
export default Pagination;
