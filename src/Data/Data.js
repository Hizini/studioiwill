/**
 * @param {string} height
 * @param {string} number
 * @param {string} title
 * @param {string} date
 * @param {string} location
 * @param {string} area
 * @param {string} designer
 * @returns
 */
const projectData = {
    data: [
        {
            height: 563,
            number: '01',
            title: 'GRAY CITY 신사옥',
            date: '2022.09',
            location: '서울시 송파구 방이동 168 - 5',
            area: '826m² (52.84PY)',
            designer: '김희원, 한덕규'
        },
        {
            height: 788,
            number: '01',
            title: 'Ducker',
            date: '2022.06',
            location: '',
            area: '',
            designer: ''
        },
        {
            height: 640,
            number: '01',
            title: 'Ducker',
            date: '2022.06',
            location: '',
            area: '',
            designer: ''
        },
        {
            height: 916,
            number: '01',
            title: 'Ducker',
            date: '2022.06',
            location: '',
            area: '',
            designer: ''
        },
        {
            height: 507,
            number: '01',
            title: 'Ducker',
            date: '2022.06',
            location: '',
            area: '',
            designer: ''
        },
        {
            height: 380,
            number: '01',
            title: 'Ducker',
            date: '2022.06',
            location: '',
            area: '',
            designer: ''
        },
        {
            height: 473,
            number: '01',
            title: 'Ducker',
            date: '2022.06',
            location: '',
            area: '',
            designer: ''
        },
    ]
}

// WEB
const BACK_BUILDING_NUMBER = 5
const FRONT_BUILDING_NUMBER = 3
const backBuilding = projectData.data.slice(0, BACK_BUILDING_NUMBER)
const frontBuilding = projectData.data.slice(BACK_BUILDING_NUMBER, BACK_BUILDING_NUMBER + FRONT_BUILDING_NUMBER)

// MOBILE

export { projectData, BACK_BUILDING_NUMBER, FRONT_BUILDING_NUMBER, backBuilding, frontBuilding }
