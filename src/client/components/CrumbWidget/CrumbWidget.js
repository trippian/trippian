import React from 'react'
import {
  Link
}
from 'react-router'

export default ({
  first, second, third
}) => {
  return (
    <div className='crumb'>
        <ol className="breadcrumb">
            <li>
                <Link to={ `/` }>
                {first}
                </Link>
            </li>
            <li>
                <Link to={ `/movies/` }>
                {second}
                </Link>
            </li>
            <li className="active">
                <Link to={ `/movie/${ third }/` }>
                   {third
}
                </Link>
            </li>
        </ol>
    </div>
  )
}
