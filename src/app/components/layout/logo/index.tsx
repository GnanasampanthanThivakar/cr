import Image from 'next/image';
import Link from 'next/link';

const Logo = (props: { sticky: boolean }) => {
    const { sticky } = props;
    return (
        <Link href="/">
            <Image
                src="https://cdn.crystal-shine.com/uploads/2019/06/cs-new-logo-black.svg"
                alt="Crystal Shine Auto Center Logo"
                width={190}
                height={34}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                priority={true}
                className='hidden xsm:block'
            />
            <Image src="https://cdn.crystal-shine.com/uploads/2019/06/cs-new-logo-black.svg" alt='Crystal Shine Auto Center Logo' width={40} height={40} className='block xsm:hidden' />
        </Link>
    );
};

export default Logo;
