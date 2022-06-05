import React from 'react'
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {
  return (
    <>
      <Header />
      <main className='relative'>
        <section className='mb-6'>
          <div className='flex items-center gap-2'>
            <label htmlFor="query" className='hidden'>Search</label>
            <input type="text" className='flex-1' name="query" id="query" placeholder='Zoeken...' />
            <div className={`search_btn flex items-center justify-center bg-dark rounded-lg`}>
              <Image src="/search.svg" height={18} width={18} alt={'Zoeken'} />
            </div>
          </div>
        </section>
        <section className='mb-10'>
          <div className='heading'>
            <h2>Deze week</h2>
          </div>
          <div className='week_circles'>
            <div className='nue_circle_outer'>
              <h2 className='font-extrabold text-2xl text-red'>4</h2>
              <small className='text-xxs text-lightdark'>Aantal</small>
            </div>
            <div className='nue_circle_outer'>
              <h2 className='font-extrabold text-xl text-purple'>4&rsquo;30</h2>
              <small className='text-lightdark font-medium text-xxs'>Duur</small>
            </div>
            <div className='nue_circle_outer'>
              <h2 className='font-extrabold text-xl text-deep_blue'>+30</h2>
              <small className='text-lightdark font-medium text-xxs'>Verschil</small>
            </div>
          </div>
        </section>
        <section className='mb-10'>
          <div className='heading'>
            <h2>Recent</h2>
            <span className='font-medium text-lightdark text-sm'>Bekijk meer</span>
          </div>

          <div className='cards'>
            <Link href={'/detail'}>
              <a>
                <article className='card'>
                  <div className='flex justify-between items-baseline'>
                    <div>
                      <div className='circle_text bg-pink w-8 h-8'>LR</div>
                      <span className='text-xs font-semibold text-lightdark'>Liesbeth</span>
                    </div>
                    <div className='circle_text w-5 h-5'>
                      <Image src="/activity.svg" height={15} width={15} alt={'Conditie'} />
                    </div>
                  </div>
                  <div className='mt-2'>
                    <h3 className='card_title'>Stronglifts (B) + Bur</h3>
                    <div className='flex items-end gap-2'>
                      <span className='text-xs flex items-center gap-1'>
                        <Image src="/clock.svg" height={15} width={15} alt={'Tijd'} />
                        <span className='font-semibold'>1u - 1u30</span>
                      </span>
                      <span className='text-xs text-lightdark font-medium'>
                        BB, Jabbeke
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </Link>

            <Link href={'/detail'}>
              <a>
                <article className='card'>
                  <div className='flex justify-between items-baseline'>
                    <div>
                      <div className='circle_text bg-purple w-8 h-8'>GV</div>
                      <span className='text-xs font-semibold text-lightdark'>Guido</span>
                    </div>
                    <div>
                      <Image src="/life-buoy.svg" height={15} width={15} alt={'Core'} />
                    </div>
                  </div>
                  <div className='mt-2'>
                    <h3 className='card_title'>RFT (- Core)</h3>
                    <div className='flex items-end gap-2'>
                      <span className='text-xs flex items-center gap-1'>
                        <Image src="/clock.svg" height={15} width={15} alt={'Tijd'} />
                        <span className='font-semibold'>&gt; 1u</span>
                      </span>
                      <span className='text-xs text-lightdark font-medium'>
                        BB, Jabbeke
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </Link>
          </div>
        </section>
        <section>
          <div className="heading">
            <h2>Aanvragen</h2>
            <span className='font-medium text-lightdark text-sm'>Bekijk meer</span>
          </div>
          <div className="list">
            <Link href={'/detail'}>
              <a>
                <article className="list_item">
                  <div className='flex items-center gap-3'>
                    <div>
                      <div className='circle_text bg-matt_green w-10 h-10'>MV</div>
                    </div>
                    <div>
                      <h3 className='font-semibold'>Max Vangampelaere</h3>
                      <p className='text-sm text-lightdark'>3RFT WOD, nieuw set en core</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-end'>
                    <small className='text-lightdark font-medium'>14:30</small>
                    <small className='bg-red w-5 h-5 flex justify-center items-center 
                rounded-full text-white text-xs font-medium mt-1.5'>2</small>
                  </div>
                </article>
              </a>
            </Link>
            <Link href={'/detail'}>
              <a>
                <article className="list_item">
                  <div className='flex items-center gap-3'>
                    <div>
                      <div className='circle_text bg-deep_blue w-10 h-10'>AE</div>
                    </div>
                    <div>
                      <h3 className='font-semibold'>Aziz Eryilmaz</h3>
                      <p className='text-sm text-lightdark'>Gunny, skip</p>
                    </div>
                  </div>
                  <div>
                    <small className='text-lightdark font-medium'>16:00</small>
                  </div>
                </article>
              </a>
            </Link>
            <Link href={'/detail'}>
              <a>
                <article className="list_item">
                  <div className='flex items-center gap-3'>
                    <div>
                      <div className='circle_text bg-red w-10 h-10'>MV</div>
                    </div>
                    <div>
                      <h3 className='font-semibold'>Brecht Demey</h3>
                      <p className='text-sm text-lightdark'>3RFT WOD</p>
                    </div>
                  </div>
                  <div>
                    <small className='text-lightdark font-medium'>19:30</small>
                  </div>
                </article>
              </a>
            </Link>
          </div>
        </section>

        <section className='footer'>
          <div className='footer_child'>
            <Link href={'/detail'}>
              <a className='new_btn'>
                <Image src="/plus.svg" height={18} width={18} alt={'Zoeken'} />
                <span className='text-white'>Nieuw afspraak</span>
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Index