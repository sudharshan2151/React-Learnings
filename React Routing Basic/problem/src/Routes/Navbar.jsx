import {NavLink} from 'react-router-dom'
function Navbar() {
    const navLinks = [
        { path: '/', text: 'Home' },
        { path: '/about', text: 'About' },
        { path: '/contact', text: 'Contact' },
        { path: '/products', text: 'Products' }
      ];
      
    return(
        <div className = "navbar" style={{
            
        }}>
            {navLinks.map((link, index) => (
                <NavLink key={index} to={link.path} style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      textDecoration:"none",
                      padding : "5px",
                      backgroundColor:"#F5F5F5",
                      color: isActive ? "black" : "#604F74",
                      viewTransitionName: isTransitioning ? "slide" : ""
                    };
                  }}>{link.text}</NavLink>
            ))}
        </div>
    )
}

export { Navbar }