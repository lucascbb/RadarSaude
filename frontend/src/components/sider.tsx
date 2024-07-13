import { Layout } from 'antd';

import logoBlackRadarSaude from "../../src/images/svg/logoBlackRadarSaude.svg"
import logoWhiteRadarSaude from "../../src/images/svg/logoWhiteRadarSaude.svg"
import iconUsers from "../../src/images/svg/iconUsers.svg"
import iconLogout from "../../src/images/svg/iconLogout.svg"



const { Sider } = Layout;

const SiderComponent = () => {
    const siderStyle: React.CSSProperties = {
        textAlign: "center",
        backgroundColor: '#000039',
        borderEndEndRadius: '20px',
        borderStartEndRadius: '20px',
        boxShadow: '1px 1px 8px #000019'
    };

    const logoStyle: React.CSSProperties = {
        display: 'inline-block',
        width: "65%",
        margin: "25px 10px 40px"
    }

    const ulStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "15px",
        padding: "10px 30px",
    }

    const liStyle: React.CSSProperties = {
        display: "flex",
        height: "50px",
        gap: "20px",
        alignItems: "center",
        justifyContent: "start",
        cursor: 'pointer',
    }

    const iconUsersStyle: React.CSSProperties = {
        maxWidth: "25px",
        maxHeight: "25px"
    }

    const pageNameStyle: React.CSSProperties = {
        fontFamily: "Comfortaa-Bold",
        fontSize: "16px",
        color: "white",
    }

    const mainLogoStyle: React.CSSProperties = {
        backgroundColor: "#4223d7", width: "100%", height: "120px"
    }

    const mainLogoutStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "10px 30px",
        position: "absolute",
        bottom: '20px',
        cursor: "pointer",
        height: "50px",
        width: "100%",
    }

    const iconLogoutStyle: React.CSSProperties = {
        maxWidth: "32px",
        maxHeight: "32px"
    }


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
