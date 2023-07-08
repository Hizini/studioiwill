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
            number: '01',
            title: 'GRAY CITY 신사옥',
            date: '2022.09',
            location: '서울시 송파구 방이동 168 - 5',
            area: '826m² (52.84PY)',
            designer: '김희원, 한덕규',
            style: {
                height: '260px',
            }
        },
        {
            number: '02',
            title: 'Ducker2',
            date: '2022.06',
            location: '',
            area: '',
            designer: '',
            style: {
                height: '350px',
                marginLeft: '-20px'
            }
        },
        {
            number: '03',
            title: 'Ducker3',
            date: '2022.06',
            location: '',
            area: '',
            designer: '',
            style: {
                height: '320px',
            }
        },
        {

            number: '04',
            title: 'Ducker4',
            date: '2022.06',
            location: '',
            area: '',
            designer: '',
            style: {
                height: '460px',
            }
        },
        {
            number: '05',
            title: 'Ducker5',
            date: '2022.06',
            location: '',
            area: '',
            designer: '',
            style: {
                height: '345px',
            }
        },
        {
            number: '06',
            title: 'Ducker6',
            date: '2022.06',
            location: '',
            area: '',
            designer: '',
            style: {
                height: '145px',
                position: 'absolute',
                marginLeft: '60px'
            }
        },
        {
            number: '07',
            title: 'Ducker7',
            date: '2022.06',
            location: '',
            area: '',
            designer: '',
            style: {
                height: '236px',
                position: 'absolute',
                marginLeft: 'calc(20% + 30px)'
            }
        },
        {
            number: '08',
            title: 'Ducker8',
            date: '2022.06',
            location: '',
            area: '',
            designer: '',
            style: {
                height: '150px',
                position: 'absolute',
                marginLeft: 'calc(40% + 30px)'
            }
        },
        {
            number: '09',
            title: 'Ducker9',
            date: '2022.06',
            location: '',
            area: '',
            designer: '',
            style: {
                height: '222px',
                position: 'absolute',
                marginLeft: 'calc(60% + 30px)'
            }
        },
    ]
}
// const projectData = {
//     data: [
//         {
//             height: 260,
//             number: '01',
//             title: 'GRAY CITY 신사옥',
//             date: '2022.09',
//             location: '서울시 송파구 방이동 168 - 5',
//             area: '826m² (52.84PY)',
//             designer: '김희원, 한덕규',
//             marginRight: 20
//         },
//         {
//             height: 350,
//             number: '02',
//             title: 'Ducker',
//             date: '2022.06',
//             location: '',
//             area: '',
//             designer: '',
// 			marginRight: 10
//         },
//         {
//             height: 320,
//             number: '03',
//             title: 'Ducker',
//             date: '2022.06',
//             location: '',
//             area: '',
//             designer: '',
// 			marginRight: 10
//         },
//         {
//             height: 460,
//             number: '04',
//             title: 'Ducker',
//             date: '2022.06',
//             location: '',
//             area: '',
//             designer: '',
// 			marginRight: 26
//         },
//         {
//             height: 345,
//             number: '05',
//             title: 'Ducker',
//             date: '2022.06',
//             location: '',
//             area: '',
//             designer: '',
// 			marginRight: -620
//         },
//         {
//             height: 160,
//             number: '06',
//             title: 'Ducker',
//             date: '2022.06',
//             location: '',
//             area: '',
//             designer: '',
// 			marginRight: 50
//         },
//         {
//             height: 236,
//             number: '07',
//             title: 'Ducker',
//             date: '2022.06',
//             location: '',
//             area: '',
//             designer: '',
// 			marginRight: 40
//         },
//         {
//             height: 150,
//             number: '08',
//             title: 'Ducker',
//             date: '2022.06',
//             location: '',
//             area: '',
//             designer: '',
// 			marginRight: 30
//         },
//         {
//             height: 236,
//             number: '09',
//             title: 'Ducker',
//             date: '2022.06',
//             location: '',
//             area: '',
//             designer: '',
//         },
//     ]
// }

// WEB
const BACK_BUILDING_NUMBER = 5
const FRONT_BUILDING_NUMBER = 3
const backBuilding = projectData.data.slice(0, BACK_BUILDING_NUMBER)
const frontBuilding = projectData.data.slice(BACK_BUILDING_NUMBER, BACK_BUILDING_NUMBER + FRONT_BUILDING_NUMBER)

// MOBILE

export { projectData, BACK_BUILDING_NUMBER, FRONT_BUILDING_NUMBER, backBuilding, frontBuilding }
