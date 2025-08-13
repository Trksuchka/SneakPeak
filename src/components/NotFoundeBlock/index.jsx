import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './NotFoundeBloc.module.css'

const NotFoundeBlock = () => {
    return(
        <div className={style.root}>
            <div className="not-found-container">
                <div className="not-found-content">
                    <h1 className="not-found-title">404</h1>
                    <h2 className="not-found-subtitle">Страница не найдена</h2>
                    <p className="not-found-text">
                        Извините, страница, которую вы ищете, не существует или была перемещена.
                        Пожалуйста, проверьте URL или вернитесь на главную страницу.
                    </p>
                    <a href="/" className="not-found-button">
                        <span>На главную</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFoundeBlock;