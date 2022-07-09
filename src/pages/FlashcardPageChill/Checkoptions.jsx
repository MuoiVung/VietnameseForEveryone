import React from 'react'

const Checkoptions = ({ item }) => {
    return (
        <div>
            {
                item.options.map((item, i) => {
                    return <div key={i}><input type='checkbox' name='answer' /> <span>{item}</span></div>
                })
            }
        </div>
    )
}

export default Checkoptions