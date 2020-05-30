import React, {useState} from 'react';
import u from './paginations.module.css';

let Paginations = (props) => {

    let portionSize = 10;

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    } 

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={u.pagination} >

        { portionNumber > 1 &&
            <button className='btn' onClick = { () => { setPortionNumber(portionNumber - 1) }}>PREV</button> 
        }

            {pages
                .filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
                .map( (p) => {
                return (
                        <span
                            key={p} 
                            className={props.currentPage === p ? u.selectedPage + ' ' + u.page : u.page} 
                            onClick={(e) => { props.onPageChanged(p) }}>{p}
                        </span>
                )
            })}
        
        { portionCount > portionNumber &&
            <button  className='btn' onClick = { () => { setPortionNumber(portionNumber + 1) }}>NEXT</button> 
        }

        </div>
    )   
}

export default Paginations;