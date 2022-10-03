import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import UpImage from "../../assets/up.png";
import DownImage from "../../assets/down.png";
import LeftArrow from "../../assets/leftarrow.png";

type Props = {
    item: Level;
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? UpImage : DownImage} />
            </div>
            <div className={styles.gridTittle}>
                <h2>{item.tittle}</h2>
            </div>

            {item.yourIMC &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourIMC} kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está Entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
};