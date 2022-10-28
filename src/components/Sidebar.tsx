import { SidebarContainer } from '../styles/sidebar'
import { House, User, Laptop, Phone, Code } from 'phosphor-react'
import Tooltip from '@mui/material/Tooltip';
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export function Sidebar(){
    return(
        <SidebarContainer>
            <nav>
                <Router>
                    <HashLink smooth to="#home">
                        <Tooltip title="Início" placement="right" arrow>
                            <House size={22} />
                        </Tooltip>
                    </HashLink>
                    <HashLink smooth to="#about">
                        <Tooltip title="Sobre" placement="right" arrow>
                            <User size={22} />
                        </Tooltip>
                    </HashLink>
                    <HashLink smooth to="#stack">
                        <Tooltip title="Stack" placement="right" arrow>
                            <Code size={22} />
                        </Tooltip>
                    </HashLink>
                    <HashLink smooth to="#projects">
                        <Tooltip title="Projetos" placement="right" arrow>
                            <Laptop size={22} />
                        </Tooltip>
                    </HashLink>
                    <HashLink smooth to="#contact">
                        <Tooltip title="Contato" placement="right" arrow>
                            <Phone size={22} />
                        </Tooltip>
                    </HashLink>
                </Router>
            </nav>
        </SidebarContainer>
    )
}