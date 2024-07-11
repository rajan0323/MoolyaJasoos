import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'Search Icon' },
  { src: '/assets/icons/black-heart.svg', alt: 'Heart Icon' },
  { src: '/assets/icons/user.svg', alt: 'User Icon' },
]

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="navbar">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/icons/logo.svg"
            width={207}
            height={77}
            alt="Moolya Jasoos Logo"
          />

          <p className="navbar-logo">
            मूल्य<span className='text-primary'>जासूस</span>
          </p>
        </Link>

        <div className="navbar-icons flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={38}
              height={38}
              className="icon"
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
