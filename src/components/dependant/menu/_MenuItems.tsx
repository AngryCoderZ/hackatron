//@ts-nocheck
import React from 'react'
import Menu from './Menu'

const _MenuItems = () => {
    return (
        <>
            <Menu title={"Female"} link={"/"} />
            <Menu title={"Male"} link={"/Male"} />
            <Menu title={"Kids"} link={"/projects"} />
            <Menu title={"All Products"} link={"/All Products"} />
        </>
    )
}

export default _MenuItems