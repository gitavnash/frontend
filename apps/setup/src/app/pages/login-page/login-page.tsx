import { useNavigate } from 'react-router-dom';
import styles from './login-page.module.css';
import { Header } from '../../Components/header/header';

export function LoginPage() { 
    const navigate = useNavigate();
    
    function handleButtonClick() {
        navigate(`/dashboard`, {
            replace: true,
            state: { new: true },
          });
    }

    return (
        <div>
        <Header count={0}/>
    <div className={styles['loginPage']}>
        <div>
           <div> Welcome to login page </div>
        </div>
        <div>
            <button className={styles['loginButton'] } onClick={ () => handleButtonClick()} >Click here </button>
        </div>
    </div>
    </div>
    );
}