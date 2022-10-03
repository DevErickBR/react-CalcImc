export type Level = {
    tittle: string;
    color: string;
    icon: "down" | "up";
    imc: number[];
    yourIMC?: number;
}

export const levels: Level[] = [
    { tittle: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { tittle: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    { tittle: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30] },
    { tittle: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] }
];

export const calculateImc = (altura: number, peso: number) => {
    const imc = peso / (altura * altura);
    for (let i in levels) {
        if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
            let levelCopy: Level = { ...levels[i] };
            levelCopy.yourIMC = parseFloat(imc.toFixed(2));
            return levelCopy
        };
    };

    return null;
}