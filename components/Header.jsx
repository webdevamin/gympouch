import Image from 'next/image'
import React from 'react'

const Header = ({ title }) => {
    return (
        <header>
            <div>
                <Image src="/chevron-left.svg" height={30} width={30} alt={'Back'} />
            </div>
            <h1>{title ? title : "Overzicht"}</h1>
            <div>
                <Image src="/menu.svg" height={25} width={25} alt={'Menu'} />
            </div>
        </header>
    )
}

export default Header