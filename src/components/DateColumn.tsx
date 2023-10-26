import React from 'react'
import moment from 'moment';

 const DateColumn = ({date}:any) => { 
  return (
    <div>{ moment(date).format( "DD-MM-YYYY:hh:mm:ss")}</div>
  )
}
export default DateColumn;