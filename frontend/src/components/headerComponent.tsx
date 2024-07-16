import { Layout } from 'antd';
import iconHome from "../images/svg/iconHome.svg"
import profilePicture from "../images/jpg/profilePicture.jpg"

import {
    headerStyle,
    mainPageStyle,
    iconHomeStyle,
    pageTextStyle,
    mainDataUserStyle,
    pictureProfileStyle,
    nameTextStyle
} from "../components/styles/headerStyles"

const { Header } = Layout;

const headerComponent = () => {
    return (
        <Header style={headerStyle}>
            <div style={mainPageStyle}>
                <img style={iconHomeStyle} src={iconHome} alt="Icone Usuários" />
                <p style={pageTextStyle} className='threePoints_Text'>Home / Dashboard</p>
            </div>

            <div style={mainDataUserStyle}>
                <img style={pictureProfileStyle} src={profilePicture} alt="Icone Usuários" />
                <p style={nameTextStyle} className='threePoints_Text'>Maria Helena</p>
            </div>
        </Header>
    );
};

export default headerComponent;
