import { images } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

function Gallery() {
    return (
        <div className='grid grid-cols-3 gap-4 max-w-6xl mx-auto my-6'>
            {
                images.map((img, index) => (
                    <Link key={index} href={`/gallery/${index+1}`}>
                        <Image src={img?.img} alt='' className='w-full rounded-2xl' />
                    </Link>

                ))
            }
        </div>
    )
}

export default Gallery