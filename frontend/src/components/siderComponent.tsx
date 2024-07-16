import { Layout } from 'antd';

import logoWhiteRadarSaude from "../../src/images/svg/logoWhiteRadarSaude.svg"
import iconUsers from "../../src/images/svg/iconUsers.svg"
import iconLogout from "../../src/images/svg/iconLogout.svg"

import {
    siderStyle,
    logoStyle,
    ulStyle,
    liStyle,
    iconUsersStyle,
    pageNameStyle,
    mainLogoStyle,
    mainLogoutStyle,
    iconLogoutStyle
} from "../components/styles/siderStyles"

const { Sider } = Layout;

const SiderComponent = () => {
    return (
        <Sider width="12%" style={siderStyle}>
            <div style={mainLogoStyle}>
                <img style={logoStyle} src={logoWhiteRadarSaude} alt="Logo da Radar Saúde" />
            </div>

            <ul style={ulStyle}>
                <li style={liStyle}>
                    <img style={iconUsersStyle} src={iconUsers} alt="Icone Usuários" />
                    <p style={pageNameStyle}>Dashboard</p>
                </li>
            </ul>

            <div style={mainLogoutStyle}>
                <img style={iconLogoutStyle} src={iconLogout} alt="Icone Usuários" />
                <p style={pageNameStyle}>Sair</p>
            </div>
        </Sider>
    );
};

export default SiderComponent;
