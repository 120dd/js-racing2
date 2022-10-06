export const RESULT_SCORE = (_score) => {
    let score = ""
    for (let i = 0 ; i < _score ; i ++) {
        score += "-"
    }
    return score;
}

export const RESULT_CONTENTS = (carsInfo) => carsInfo.map(car => `
<div>
${car.name}: ${RESULT_SCORE(car.position)}
</div>
`).join("")

export const RESULT_TEMPLATE = (carsInfo) => `
<div>
${RESULT_CONTENTS(carsInfo)}
</div>
<br/>
`