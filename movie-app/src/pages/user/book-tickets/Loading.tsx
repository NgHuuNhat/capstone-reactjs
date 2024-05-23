import React from 'react'
import { UseDispatch, useSelector } from 'react-redux'

export default function Loading() {
    // const {isLoading} = useSelector((state: any) => state.loadingReducer)

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgb(0 0 0 / 50%)',
            display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '99'
        }} onClick={(e) => e.preventDefault()}>
            <div className='spinner-border text-light' onClick={(e) => e.preventDefault()}></div>
            <div className='text-light p-2' onClick={(e) => e.preventDefault()}>loading...</div>
        </div>
    )
}
