import Image from 'next/image';
function ImageContainer({
    mainImage,
    name,
}: {
    mainImage: string;
    name: string;
}) {
    return (
        <section className='h-[300px] md:h-[500px] relative mt-8 overflow-hidden'>
            <Image
                src={mainImage}
                fill
                sizes='100vw'
                alt={name}
                className='object-cover  rounded-xl scale-x-105'
            // priority
            />
        </section>
    );
}
export default ImageContainer;