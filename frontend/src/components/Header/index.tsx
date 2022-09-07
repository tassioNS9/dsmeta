import logometa from '../../assets/img/image-logo.svg';
import './styles.css'


function Header() {
    return(
        <header className="dsmeta-logo-container">
        <img src={logometa} alt='logo-dsmeta' />
        <h1>DSMeta</h1>
        <p>Desenvolvido por <a href='https://www.instagram.com/devsuperior.ig'>@devsuperior.ig</a></p>

      </header>
    )
    }
    
export default Header;