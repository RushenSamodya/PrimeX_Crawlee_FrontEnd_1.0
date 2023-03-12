import { AiOutlineDashboard } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { SiGooglechat } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  
`;
const SidebarContainer = styled.div`
  background: white;
  color: rgba(119, 124, 136, 1);
  height: 100vh;
  width: 250px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  position: fixed;
  display: flex;
  flex-direction: column;
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 15px 60px 15px;
`;
const LogoContainer = styled.h1`
  font-size: 30px;
`;
const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`;
const Link = styled.div`
  flex: 5;
`;

const Icon = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
`;
const LinkText = styled.div`
  font-size: 22px;
  text-decoration: none;
`;
const BottomSection = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  gap: 15px;
  align-items: center;
  padding-left: 30px;
`;
const LogoutBtn = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 15px 20px;
  border-radius: 15px;
  border: #f0634c solid 2px;
  background-color: white;
  color: #f0634c;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    padding: 17px 22px;
  }
`;
const StyledLink = styled(NavLink)`
  display: flex;
  color: rgba(119, 124, 136, 1);
  padding: 5px 15px;
  padding-left: 30px;
  gap: 15px;
  transition: all 0.5s;
  height: 70px;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: rgba(240, 99, 76, 1);
    transition: all 0.5s;
  }
  &.active {
    color: rgba(240, 99, 76, 1);
  }
`;

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
