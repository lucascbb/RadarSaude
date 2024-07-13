import { Layout } from 'antd';
import iconHome from "../images/svg/iconHome.svg"
import profilePicture from "../images/jpg/profilePicture.jpg"

const { Header } = Layout;

const headerComponent = () => {
    const headerStyle: React.CSSProperties = {
        display: "flex",
        backgroundColor: '#fffaff',
        borderBottom: '1px solid #c0c0c0',
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px"
    };

    const mainPageStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "5px",
    }

    const iconHomeStyle: React.CSSProperties = {
        maxHeight: "32px"
    }

    const pageTextStyle: React.CSSProperties = {
        fontSize: "15px",
        lineHeight: "18px"
    }

    const mainDataUserStyle: React.CSSProperties = {
        display: "flex",
        gap: "15px",
        alignItems: "center",
    }

    const pictureProfileStyle: React.CSSProperties = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        objectFit: "cover"
    }

    const nameTextStyle: React.CSSProperties = {
        fontSize: "15px",
        maxWidth: "170px",
        lineHeight: "18px"
    }


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
