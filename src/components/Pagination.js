import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({ filmsByPage, totalFilm, paginate, currentPage}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalFilm / filmsByPage); i++){
        pageNumbers.push(i);
    }
    return (
      <nav aria-label="Page navigation example">
          <ul className="pagination">
              {pageNumbers.map(number=>(
                  <li key={number} className="page-item">
                      <Link  onClick={()=>paginate(number)} 
                      className="page-link" 
                      style={{background:`${currentPage===number?'#2B3B51':'blue'}`,color:'#ffffff'}}>
                          {number}
                      </Link>
                  </li>
              ))}
          </ul>
      </nav>
    )
}
export default Pagination;
