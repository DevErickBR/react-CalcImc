import styles from "../App.module.css";
import React, { useState } from "react";
import { calculateImc, Level, levels } from '../helpers/imc';
import { GridItem } from './GridItem';
import LeftArrow from "../assets/leftarrow.png";

export const Main = () => {
    const [altura, setAltura] = useState<number>(0);
    const [peso, setPeso] = useState<number>(0);
    const [ToShow, setToShow] = useState<Level | null>(null);


    const handleClick = () => {
        if (altura && peso) {
            setToShow(calculateImc(altura, peso));
        } else {
            alert("Preencha os Campos de Peso e Altura para Realizar o Calculo!")
        }
    }

    const handleBackButton = () => {
        setToShow(null);
        setAltura(0);
        setPeso(0)
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.containerLeftSide}>
                <div className={styles.leftside}>
                    <div className={styles.boxText}>
                        <h1>Calcule o seu IMC</h1>
                        <span>IMC é a sigla para Índice de Massa Corpórea, parâmetro adota pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</span>
                    </div>
                    <input
                        type="number"
                        placeholder='Digite Sua altura..'
                        value={altura > 0 ? altura : ''}
                        onChange={e => setAltura(parseFloat(e.target.value))}
                        disabled={ToShow ? true : false}
                    />
                    <input
                        placeholder='Digite Seu Peso em Kg..'
                        type="number"
                        value={peso > 0 ? peso : ''}
                        onChange={e => setPeso(parseFloat(e.target.value))}
                        disabled={ToShow ? true : false}
                    />
                    <button onClick={handleClick} disabled={ToShow ? true : false}>Calcular</button>
                </div>
            </div>
            <div className={styles.containerRightSide}>
                <div className={styles.rightSide}>
                    {!ToShow &&
                        <div className={styles.grid}>
                            {levels.map((item, key) => (
                                <GridItem key={key} item={item} />
                            ))}
                        </div>
                    }
                    {ToShow &&
                        <div className={styles.rightBig}>
                            <div className={styles.backArrow} onClick={handleBackButton}>
                                <img src={LeftArrow} />
                            </div>
                            <GridItem item={ToShow} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};