import { PUBLIC_IMG_PATH } from "../js/util";

const data01 = {
    number: "01",
    title: "STUDIO I’ll",
    date: "",
	sub: "Office",
    location: "서울시 송파구 방이동 168 - 5",
    area: "826m² (52.84PY)",
    designer: "김희원, 한덕규",
};

const data02 = {
    number: "02",
    title: "Gray City\ncompany building",
    date: "",
	sub: "SMP, hair shop, Office",
    location: "",
    area: "",
    designer: "",
};

const data03 = {
    number: "03",
    title: "BLUE HOUSE",
    date: "",
	sub: "smp, beauty shop",
    location: "",
    area: "",
    designer: "",
};

const data04 = {
    number: "04",
    title: "WHITE HOUSE",
    date: "",
	sub: "smp, Barber Shop",
    location: "",
    area: "",
    designer: "",
};

const data05 = {
    number: "05",
    title: "BLOW HAIR",
    date: "",
	sub: "Hair salon",
    location: "",
    area: "",
    designer: "",
};

const data06 = {
    number: "06",
    title: "INNOCELLGENE",
    date: "",
	sub: "Office",
    location: "",
    area: "",
    designer: "",
};

const data07 = {
    number: "07",
    title: "INCHEON SONGDO\n- 60PY",
    date: "",
	sub: "House",
    location: "",
    area: "",
    designer: "",
};

const data08 = {
    number: "08",
    title: "GANGHWA DO\n- 60PY",
    date: "",
	sub: "House",
    location: "",
    area: "",
    designer: "",
};

const data09 = {
    number: "09",
    title: "OA CAFE",
    date: "",
	sub: "Cafe",
    location: "",
    area: "",
    designer: "",
};

const data10 = {
    number: "10",
    title: "NI. A. AM",
    date: "",
	sub: "Sake Bar",
    location: "",
    area: "",
    designer: "",
};

const data11 = {
    number: "11",
    title: "DAECHI 897-12\nBUILDING",
    date: "",
	sub: "New-built",
    location: "",
    area: "",
    designer: "",
};

const data12 = {
    number: "12",
    title: "DAECHI 996-7\nBUILDING",
    date: "",
	sub: "New-built",
    location: "",
    area: "",
    designer: "",
};

const data13 = {
    number: "13",
    title: "YEOKSAM 695-8\nBUILDING",
    date: "",
	sub: "Renovation",
    location: "",
    area: "",
    designer: "",
};

const data14 = {
    number: "14",
    title: "JAMWON 11-5\nBUILDING",
    date: "",
	sub: "Renovation",
    location: "",
    area: "",
    designer: "",
};

const data15 = {
    number: "15",
    title: "GYESAN TOWN HOUSE",
    date: "",
	sub: "housing project",
    location: "",
    area: "",
    designer: "",
};

const data16 = {
    number: "16",
    title: "SHARING OF THOUGHTS #02",
    date: "",
	sub: "Exhibition",
    location: "",
    area: "",
    designer: "",
};

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
	repeat: 4,
    data: [
        // 1
        {
            ...data01,
            style: {
                height: "300px",
            },
            mobile_style: {
                height: "200px",
                marginLeft: "10px",
            },
        },
        {
            ...data02,
            style: {
                height: "420px",
                marginLeft: "-30px",
            },
            mobile_style: {
                height: "330px",
                marginLeft: "-40px",
            },
        },
        {
            ...data03,
            style: {
                height: "550px",
                marginLeft: "-40px",
            },
            mobile_style: {
                height: "530px",
                marginLeft: "-270px",
            },
        },
        {
            ...data04,
            style: {
                height: "480px",
                marginLeft: "-40px",
            },
            mobile_style: {
                height: "620px",
                marginLeft: "-100px",
            },
        },
		{
            ...data05,
            style: {
                height: "370px",
                marginLeft: "-108px",
            },
            mobile_style: {
                height: "710px",
                marginLeft: "80px",
            },
        },
        {
            ...data06,
            style: {
                height: "600px",
                position: "absolute",
                marginLeft: "40px",
            },
            mobile_style: {
                height: "700px",
                position: "absolute",
                marginLeft: "30%",
            },
        },
        {
            ...data07,
            style: {
                height: "750px",
                position: "absolute",
                marginLeft: "200px",
            },
            mobile_style: {
                height: "450px",
                position: "absolute",
                marginLeft: "25%",
            },
        },
        {
            ...data08,
            style: {
                height: "850px",
                position: "absolute",
                marginLeft: "485px",
            },
            mobile_style: {
                height: "90px",
                position: "absolute",
                marginLeft: "calc(30% + 30px)",
            },
        },
        {
            ...data09,
            style: {
                height: "700px",
                position: "absolute",
                marginLeft: "614px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
            ...data10,
            style: {
                height: "950px",
                position: "absolute",
                marginLeft: "575px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
        {
            ...data11,
            style: {
                height: "950px",
                position: "absolute",
                marginLeft: "60px",
            },
            mobile_style: {
                height: "700px",
                position: "absolute",
                marginLeft: "30%",
            },
        },
        {
            ...data12,
            style: {
                height: "1100px",
                position: "absolute",
                marginLeft: "288px",
            },
            mobile_style: {
                height: "450px",
                position: "absolute",
                marginLeft: "25%",
            },
        },
        {
            ...data13,
            style: {
                height: "1200px",
                position: "absolute",
                marginLeft: "400px",
            },
            mobile_style: {
                height: "90px",
                position: "absolute",
                marginLeft: "calc(30% + 30px)",
            },
        },
        {
            ...data14,
            style: {
                height: "1150px",
                position: "absolute",
                marginLeft: "644px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
            ...data15,
            style: {
                height: "1300px",
                position: "absolute",
                marginLeft: "584px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
			...data16,
			style: {
                height: "1400px",
                position: "absolute",
                marginLeft: "480px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
		},

        // 2
        {
            ...data01,
            style: {
                height: "1260px",
                marginLeft: "-720px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data02,
            style: {
                height: "1480px",
                marginLeft: "-80px",
            },
            mobile_style: {
                height: "200px",
                marginLeft: "-10px",
            },
        },
        {
            ...data03,
            style: {
                height: "1520px",
                marginLeft: "30px",
            },
            mobile_style: {
                height: "350px",
                position: "absolute",
                marginLeft: "60px",
            },
        },
        {
            ...data04,
            style: {
                height: "1600px",
                marginLeft: "-478px",
            },
            mobile_style: {
                height: "500px",
                position: "absolute",
                marginLeft: "40%",
            },
        },
        {
            ...data05,
            style: {
                height: "1620px",
                marginLeft: "312px",
            },
            mobile_style: {
                height: "600px",
                position: "absolute",
                marginLeft: "80px",
            },
        },
        {
            ...data06,
            style: {
                height: "1800px",
                position: "absolute",
                marginLeft: "80px",
            },
            mobile_style: {
                height: "700px",
                position: "absolute",
                marginLeft: "30%",
            },
        },
        {
            ...data07,
            style: {
                height: "1720px",
                position: "absolute",
                marginLeft: "320px",
            },
            mobile_style: {
                height: "450px",
                position: "absolute",
                marginLeft: "25%",
            },
        },
        {
            ...data08,
            style: {
                height: "1920px",
                position: "absolute",
                marginLeft: "544px",
            },
            mobile_style: {
                height: "90px",
                position: "absolute",
                marginLeft: "calc(30% + 30px)",
            },
        },
        {
            ...data09,
            style: {
                height: "2020px",
                position: "absolute",
                marginLeft: "590px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
            ...data10,
            style: {
                height: "2150px",
                position: "absolute",
                marginLeft: "638px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
        {
            ...data11,
            style: {
                height: "1950px",
                position: "absolute",
                marginLeft: "60px",
            },
            mobile_style: {
                height: "700px",
                position: "absolute",
                marginLeft: "30%",
            },
        },
        {
            ...data12,
            style: {
                height: "2060px",
                position: "absolute",
                marginLeft: "216px",
            },
            mobile_style: {
                height: "450px",
                position: "absolute",
                marginLeft: "25%",
            },
        },
        {
            ...data13,
            style: {
                height: "2180px",
                position: "absolute",
                marginLeft: "390px",
            },
            mobile_style: {
                height: "90px",
                position: "absolute",
                marginLeft: "calc(30% + 30px)",
            },
        },
        {
            ...data14,
            style: {
                height: "2320px",
                position: "absolute",
                marginLeft: "520px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
            ...data15,
            style: {
                height: "2440px",
                position: "absolute",
                marginLeft: "615px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
			...data16,
			style: {
                height: "2300px",
                position: "absolute",
                marginLeft: "30px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
		},

        // 3
        {
            ...data01,
            style: {
                height: "2500px",
                marginLeft: "-588px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data02,
            style: {
                height: "2630px",
                marginLeft: "-40px",
            },
            mobile_style: {
                height: "200px",
                marginLeft: "-10px",
            },
        },
        {
            ...data03,
            style: {
                height: "2700px",
                marginLeft: "40px",
            },
            mobile_style: {
                height: "350px",
                position: "absolute",
                marginLeft: "60px",
            },
        },
        {
            ...data04,
            style: {
                height: "2820px",
                marginLeft: "-275px",
            },
            mobile_style: {
                height: "500px",
                position: "absolute",
                marginLeft: "40%",
            },
        },
        {
            ...data05,
            style: {
                height: "2830px",
                marginLeft: "-434px",
            },
            mobile_style: {
                height: "600px",
                position: "absolute",
                marginLeft: "80px",
            },
        },
        {
            ...data06,
            style: {
                height: "2930px",
                position: "absolute",
                marginLeft: "480px",
            },
            mobile_style: {
                height: "700px",
                position: "absolute",
                marginLeft: "30%",
            },
        },
        {
            ...data07,
            style: {
                height: "2800px",
                position: "absolute",
                marginLeft: "60px",
            },
            mobile_style: {
                height: "450px",
                position: "absolute",
                marginLeft: "25%",
            },
        },
        {
            ...data08,
            style: {
                height: "3080px",
                position: "absolute",
                marginLeft: "626px",
            },
            mobile_style: {
                height: "90px",
                position: "absolute",
                marginLeft: "calc(30% + 30px)",
            },
        },
        {
            ...data09,
            style: {
                height: "3120px",
                position: "absolute",
                marginLeft: "120px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
            ...data10,
            style: {
                height: "3240px",
                position: "absolute",
				marginLeft: "32px"
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
            ...data11,
            style: {
                height: "3200px",
                position: "absolute",
                marginLeft: "550px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
            ...data12,
            style: {
                height: "3400px",
                position: "absolute",
                marginLeft: "280px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
            ...data13,
            style: {
                height: "3520px",
                position: "absolute",
                marginLeft: "78px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
            ...data14,
            style: {
                height: "3600px",
                position: "absolute",
                marginLeft: "500px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
            ...data15,
            style: {
                height: "3400px",
                position: "absolute",
                marginLeft: "590px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
        },
		{
			...data16,
			style: {
                height: "3680px",
                position: "absolute",
                marginLeft: "130px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
		},

        // 4
        {
            ...data01,
            style: {
                height: "3800px",
                marginLeft: "-480px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data02,
            style: {
                height: "3920px",
                marginLeft: "-30px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data03,
            style: {
                height: "3900px",
                marginLeft: "50px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data04,
            style: {
                height: "3780px",
                marginLeft: "-50px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data05,
            style: {
                height: "4100px",
                marginLeft: "-710px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data06,
            style: {
                height: "4260px",
                marginLeft: "-28px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data07,
            style: {
                height: "4060px",
                marginLeft: "-28px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data08,
            style: {
                height: "4220px",
                marginLeft: "-160px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data09,
            style: {
                height: "4400px",
                marginLeft: "-232px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
		{
            ...data10,
            style: {
                height: "4380px",
                marginLeft: "-445px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
		{
            ...data11,
            style: {
                height: "4500px",
                marginLeft: "-76px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
		{
            ...data12,
            style: {
                height: "4560px",
                marginLeft: "22px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data13,
            style: {
                height: "4700px",
                marginLeft: "-74px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
		{
            ...data14,
            style: {
                height: "4500px",
                marginLeft: "-760px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
		{
            ...data15,
            style: {
                height: "4700px",
                marginLeft: "-150px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
		{
			...data16,
			style: {
				height: "4720px",
                marginLeft: "120px",
            },
            mobile_style: {
                height: "250px",
                position: "absolute",
                marginLeft: "10%",
            },
		},
        // 5
        // {
        //     ...data01,
        //     style: {
        //         height: "450%",
        //         marginLeft: "-80%",
        //     },
        //     mobile_style: {
        //         height: "100px",
        //         marginLeft: "10px",
        //     },
        // },
        // {
        //     ...data02,
        //     style: {
        //         height: "480%",
        //         marginLeft: "-30px",
        //     },
        //     mobile_style: {
        //         height: "100px",
        //         marginLeft: "10px",
        //     },
        // },
        // {
        //     ...data03,
        //     style: {
        //         height: "446%",
        //         marginLeft: "65px",
        //     },
        //     mobile_style: {
        //         height: "100px",
        //         marginLeft: "10px",
        //     },
        // },
        // {
        //     ...data04,
        //     style: {
        //         height: "475%",
        //         marginLeft: "-50px",
        //     },
        //     mobile_style: {
        //         height: "100px",
        //         marginLeft: "10px",
        //     },
        // },
        // {
        //     ...data05,
        //     style: {
        //         height: "420%",
        //         marginLeft: "-76%",
        //     },
        //     mobile_style: {
        //         height: "100px",
        //         marginLeft: "10px",
        //     },
        // },
        // {
        //     ...data06,
        //     style: {
        //         height: "404%",
        //         marginLeft: "-28px",
        //     },
        //     mobile_style: {
        //         height: "100px",
        //         marginLeft: "10px",
        //     },
        // },
        // {
        //     ...data07,
        //     style: {
        //         height: "418%",
        //         marginLeft: "-28px",
        //     },
        //     mobile_style: {
        //         height: "100px",
        //         marginLeft: "10px",
        //     },
        // },
        // {
        //     ...data08,
        //     style: {
        //         height: "430%",
        //         marginLeft: "-30px",
        //     },
        //     mobile_style: {
        //         height: "100px",
        //         marginLeft: "10px",
        //     },
        // },
        // {
        //     ...data09,
        //     style: {
        //         height: "400%",
        //         marginLeft: "-134px",
        //     },
        //     mobile_style: {
        //         height: "100px",
        //         marginLeft: "10px",
        //     },
        // },
    ],
};

const detailImges = {
    '0': [
        { src: `${PUBLIC_IMG_PATH}/project0/001.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/002.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/003.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/004.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/005.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/006.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/007.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/008.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/009.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/010.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/011.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/012.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/013.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/014.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/015.png` },
        { src: `${PUBLIC_IMG_PATH}/project0/016.png` },
    ],
    '1': [
        { src: `${PUBLIC_IMG_PATH}/project1/001.png` },
        { src: `${PUBLIC_IMG_PATH}/project1/002.png` },
        { src: `${PUBLIC_IMG_PATH}/project1/003.png` },
        { src: `${PUBLIC_IMG_PATH}/project1/004.png` },
        { src: `${PUBLIC_IMG_PATH}/project1/005.png` },
        { src: `${PUBLIC_IMG_PATH}/project1/006.png` },
        { src: `${PUBLIC_IMG_PATH}/project1/007.png` },
        { src: `${PUBLIC_IMG_PATH}/project1/008.png` },
    ],
    '2': [
        { src: `${PUBLIC_IMG_PATH}/project2/001.png` },
        { src: `${PUBLIC_IMG_PATH}/project2/002.png` },
        { src: `${PUBLIC_IMG_PATH}/project2/003.png` },
        { src: `${PUBLIC_IMG_PATH}/project2/004.png` },
        { src: `${PUBLIC_IMG_PATH}/project2/005.png` },
    ],
    '3': [
        { src: `${PUBLIC_IMG_PATH}/project3/001.png` },
        { src: `${PUBLIC_IMG_PATH}/project3/002.png` },
        { src: `${PUBLIC_IMG_PATH}/project3/003.png` },
        { src: `${PUBLIC_IMG_PATH}/project3/004.png` },
        { src: `${PUBLIC_IMG_PATH}/project3/005.jpg` },
    ],
	'4': [
        { src: `${PUBLIC_IMG_PATH}/project4/001.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/002.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/003.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/004.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/005.png` },
		{ src: `${PUBLIC_IMG_PATH}/project4/006.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/007.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/008.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/009.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/010.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/011.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/012.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/013.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/014.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/015.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/016.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/017.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/018.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/019.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/020.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/021.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/022.png` },
        { src: `${PUBLIC_IMG_PATH}/project4/023.png` },
    ],
	'6': [
        { src: `${PUBLIC_IMG_PATH}/project6/001.png` },
        { src: `${PUBLIC_IMG_PATH}/project6/002.png` },
        { src: `${PUBLIC_IMG_PATH}/project6/003.png` },
        { src: `${PUBLIC_IMG_PATH}/project6/004.png` },
        { src: `${PUBLIC_IMG_PATH}/project6/005.png` },
        { src: `${PUBLIC_IMG_PATH}/project6/006.png` },
    ],
    '8': [
        { src: `${PUBLIC_IMG_PATH}/project8/001.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/002.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/003.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/004.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/005.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/006.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/007.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/008.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/009.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/010.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/011.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/012.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/013.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/014.png` },
        { src: `${PUBLIC_IMG_PATH}/project8/015.png` },
    ],
	'15': [
		{ src: `${PUBLIC_IMG_PATH}/project15/001.png` },
        { src: `${PUBLIC_IMG_PATH}/project15/002.png` },
        { src: `${PUBLIC_IMG_PATH}/project15/003.png` },
        { src: `${PUBLIC_IMG_PATH}/project15/004.png` },
        { src: `${PUBLIC_IMG_PATH}/project15/005.png` },
        { src: `${PUBLIC_IMG_PATH}/project15/006.png` },
        { src: `${PUBLIC_IMG_PATH}/project15/007.png` },
	]
};
export { projectData, detailImges };
