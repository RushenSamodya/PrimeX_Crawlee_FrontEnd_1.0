import { AiOutlineDashboard } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { SiGooglechat } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import logo from "../assets/logo.png";
import { BottomSection, Container, Icon, Link, LinkText, Logo, LogoContainer, LogoutBtn, SidebarContainer, StyledLink, TopSection } from "../styles/componentStyles/SideBarStyles";


function Sidebar({ setQuery }) {
  const handleClick = (name) => {
    console.log(name);
    setQuery(name);
  };

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <AiOutlineDashboard />,
    },
    {
      path: "/courses",
      name: "Courses",
      icon: <ImBooks />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <SiGooglechat />,
    },
    {
      path: "/home",
      name: "Site Home",
      icon: <TbWorld />,
    },
  ];

  return (
    <Container>
      <SidebarContainer>
        <TopSection>
          <LogoContainer>
            <Logo src={logo} alt="logo" />
          </LogoContainer>
        </TopSection>
        <Link>
          {menuItem.map((item, index) => (
            <StyledLink
              to={item.path}
              key={index}
              className="linkItem"
              activeclassname="active"
              onClick={() => handleClick(item.name)}
            >
              <Icon>{item.icon}</Icon>
              <LinkText>{item.name}</LinkText>
            </StyledLink>
          ))}
        </Link>
        <BottomSection>
          <LogoutBtn>
            <Icon>
              <BiLogOut />
            </Icon>
            <LinkText>Log Out</LinkText>
          </LogoutBtn>
        </BottomSection>
      </SidebarContainer>
    </Container>
  );
}

export default Sidebar;
