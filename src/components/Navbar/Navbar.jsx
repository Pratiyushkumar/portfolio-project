import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { XIcon, MenuIcon } from 'lucide-react';
import anime from 'animejs';
import psvg from '@/assets/svg/pletter.svg';

const navItems = [
  { title: 'About', path: '/about' },
  { title: 'Experience', path: '/experience' },
  { title: 'Work', path: '/work' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.filter = 'blur(4px)';
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.filter = 'none';
      }
    } else {
      body.style.filter = 'none';
    }

    return () => {
      body.style.filter = 'none';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      // Animate menu opening
      anime({
        targets: menuRef.current,
        translateX: ['100%', '0%'],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutExpo',
      });

      // Animate icon rotation
      anime({
        targets: iconRef.current,
        rotate: 180,
        duration: 300,
        easing: 'easeInOutQuad',
      });
    } else {
      // Animate menu closing
      anime({
        targets: menuRef.current,
        translateX: ['0%', '100%'],
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInExpo',
      });

      // Animate icon rotation back
      anime({
        targets: iconRef.current,
        rotate: 0,
        duration: 300,
        easing: 'easeInOutQuad',
      });
    }
  }, [isOpen]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="w-8 h-8 text-foreground" src={psvg} alt="Logo" />
            </Link>
          </div>

          {/* nav items */}
          <div className="hidden md:block flex-1">
            <div className=" flex items-center justify-end space-x-11">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="text-white hover:text-foreground transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* hamburger icon */}
          <div ref={iconRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-background/90"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <MenuIcon /> : <XIcon />}
            </button>
          </div>

          <div
            ref={menuRef}
            className="fixed top-16 right-0 w-64 h-screen bg-[#112240] transform translate-x-full md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="text-white hover:text-foreground block px-3 py-2 rounded-md text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
