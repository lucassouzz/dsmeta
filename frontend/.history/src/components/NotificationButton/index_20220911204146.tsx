import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

type Props = {
    saleId: number;
}


function handleClick(id :number) {
    
}

function NotificationButton( {saleId} : Props) {
    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotificationButton;