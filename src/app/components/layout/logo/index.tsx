import Image from 'next/image';
import Link from 'next/link';

const Logo = (props: { sticky: boolean }) => {
    const { sticky } = props;
    return (
        <Link href="/">
            {/* Light Mode Logo */}
            {/* Light Mode Logo */}
            <Image
                src="/images/logo/logo-white.svg"
                alt="Crystal Shine Auto Center Logo"
                width={190}
                height={34}
                style={{ width: '100%', maxWidth: '190px', height: 'auto', filter: 'invert(1)' }}
                quality={100}
                priority={true}
                className='dark:hidden'
            />
            {/* Dark Mode Logo */}
            <Image
                src="/images/logo/logo-white.svg"
                alt="Crystal Shine Auto Center Logo"
                width={190}
                height={34}
                style={{ width: '100%', maxWidth: '190px', height: 'auto' }}
                quality={100}
                priority={true}
                className='hidden dark:block'
            />
        </Link>
    );
};

export default Logo;
