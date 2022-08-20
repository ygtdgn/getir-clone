import {useState, useEffect} from 'react';
import {Collapse} from 'react-collapse';
import {useWindowWidth} from '@react-hook/window-size'
 

export default function Menu({title, items}){

    const windowWith = useWindowWidth()
    const [isOpen, setIsOpened] = useState(true);


    const toggleCollapse = () => {
        if(windowWith <= 768 ) {
            setIsOpened(!isOpen);
        }
    }

    useEffect(() => {
        if(isOpen && windowWith <= 768){
            setIsOpened(false)
        }
        if(!isOpen && windowWith > 768){
            setIsOpened(true)
        }
    }, [windowWith])


    return(
        <section>
                        <nav className="grid gap-y-2 md:gap-y-4">
                            <h6 onClick={toggleCollapse} className="text-lg text-primary-brand-color">{title}</h6>
                           <Collapse isOpened={isOpen}>
                           <nav>
                                <ul className='grid gap-y-1 md:gap-y-2'>
                                    {items.map((item, key) =>(
                                        <li key={key}>
                                            <a href='#' className='text-sm hover:text-brand-color'>{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                           </Collapse>
                        </nav>
        </section>
    )

}