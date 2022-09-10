import axios from 'axios';
import notificationIcon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type props = {
  saleId: number;
}
function handleclick(id:number){
  axios(`${BASE_URL}/sales/${id}/notification`).then(response=>{
    console.log("sucesso!")
  })
}


function NotificationButton({saleId} : props) {


    return(
        <div className='dsmeta-red-btn' onClick={()=>handleclick(saleId)}>
          <img src={notificationIcon} alt='notificar' />
        </div>
    )
    }
    
export default NotificationButton;
    