import React from 'react'
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';

const Detail = () => {
    return (
        <>
            <Header title={"Liesbeth Roels"} />
            <main className='relative'>
                <section className='rounded-2xl'>
                    <Image className='rounded-2xl' src="/map.png"
                        height={370} width={370} responsive="true" alt={'Map'} />
                </section>
                <section className='mt-6 text-center flex flex-col 
                items-center justify-center'>
                    <div>
                        <h2 className='font-extrabold text-2xl'>Liesbeth Roels</h2>
                        <p className='text-gray font-medium'>Stronglifts (B) + Bur</p>
                    </div>
                    <div className='mt-2 flex gap-6 items-center justify-center'>
                        <div className='flex items-center gap-1.5'>
                            <Image src="/activity-red.svg"
                                height={18} width={18} alt={'Conditie'} />
                            <span className='text-gray'>Conditie</span>
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <Image src="/map-pin-red.svg"
                                height={18} width={18} alt={'Locatie'} />
                            <span className='text-gray'>BB, Jabbeke</span>
                        </div>
                    </div>
                </section>
                <section className='flex gap-3 mt-6'>
                    <article className='flex-1 bg-white p-6 rounded-2xl flex flex-col 
                    justify-center items-center gap-4 lighter_neu'>
                        <div className='bg-red inline-flex py-2 px-4 rounded-md w-fit'>
                            <Image src="/clock-white.svg"
                                height={20} width={20} alt={'Tijd'} />
                        </div>
                        <div className='text-center'>
                            <h3 className='font-extrabold pb-1'>10:15</h3>
                            <p className='text-gray'>1u - 1u30</p>
                        </div>
                    </article>
                    <article className='flex-1 bg-white p-6 rounded-2xl flex flex-col 
                    justify-center items-center gap-4 lighter_neu'>
                        <div className='bg-red inline-flex py-2 px-4 rounded-md w-fit'>
                            <Image src="/dollar-sign-white.svg"
                                height={20} width={20} alt={'Kost'} />
                        </div>
                        <div className='text-center'>
                            <h3 className='font-extrabold pb-1'>€ 60.00</h3>
                            <p className='text-gray'>Totaal</p>
                        </div>
                    </article>
                </section>
                <section className='flex mt-14 justify-center items-center gap-3'>
                    <Link href={'/'}>
                        <a className='font-semibold flash_dark text-base
                            text-white px-16 py-3 rounded-2xl flex-1 w-full'>Terug</a>
                    </Link>
                    <button className='px-16 py-3 flash_red rounded-2xl 
                        text-white font-semibold w-full flex-1'>Finish</button>
                </section>
            </main>
        </>
    )
}

export default Detail