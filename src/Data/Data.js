import { PUBLIC_IMG_PATH } from "../js/util";

const data01 = {
    number: "01",
    title: "STUDIO I’ll",
    date: "2022.09",
	sub: "Office",
    location: "서울시 송파구 방이동 168 - 5",
    area: "826m² (52.84PY)",
    designer: "김희원, 한덕규",
};

const data02 = {
    number: "02",
    title: "Gray City\ncompany building",
    date: "2022.06",
	sub: "SMP, hair shop, Office",
    location: "",
    area: "",
    designer: "",
};

const data03 = {
    number: "03",
    title: "BLUE HOUSE",
    date: "2022.06",
	sub: "smp, beauty shop",
    location: "",
    area: "",
    designer: "",
};

const data04 = {
    number: "04",
    title: "WHITE HOUSE",
    date: "2022.06",
	sub: "smp, Barber Shop",
    location: "",
    area: "",
    designer: "",
};

const data05 = {
    number: "05",
    title: "BLOW HAIR",
    date: "2022.06",
	sub: "Hair salon",
    location: "",
    area: "",
    designer: "",
};

const data06 = {
    number: "06",
    title: "INNOCELLGENE",
    date: "2022.06",
	sub: "Office",
    location: "",
    area: "",
    designer: "",
};

const data07 = {
    number: "07",
    title: "INCHEON SONGDO\n- 60PY",
    date: "2022.06",
	sub: "House",
    location: "",
    area: "",
    designer: "",
};

const data08 = {
    number: "08",
    title: "GANGHWA DO\n- 60PY",
    date: "2022.06",
	sub: "House",
    location: "",
    area: "",
    designer: "",
};

const data09 = {
    number: "09",
    title: "OA CAFE",
    date: "2022.06",
	sub: "Cafe",
    location: "",
    area: "",
    designer: "",
};

const data10 = {
    number: "10",
    title: "NI. A. AM",
    date: "2022.06",
	sub: "Sake Bar",
    location: "",
    area: "",
    designer: "",
};

const data11 = {
    number: "11",
    title: "DAECHI 897-12\nBUILDING",
    date: "2022.06",
	sub: "New-built",
    location: "",
    area: "",
    designer: "",
};

const data12 = {
    number: "12",
    title: "DAECHI 996-7\nBUILDING",
    date: "2022.06",
	sub: "New-built",
    location: "",
    area: "",
    designer: "",
};

const data13 = {
    number: "13",
    title: "YEOKSAM 695-8\nBUILDING",
    date: "2022.06",
	sub: "Renovation",
    location: "",
    area: "",
    designer: "",
};

const data14 = {
    number: "14",
    title: "JAMWON 11-5\nBUILDING",
    date: "2022.06",
	sub: "Renovation",
    location: "",
    area: "",
    designer: "",
};

const data15 = {
    number: "15",
    title: "GYESAN TOWN HOUSE",
    date: "2022.06",
	sub: "housing project",
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
                height: "94%",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data02,
            style: {
                height: "82%",
                marginLeft: "-30px",
            },
            mobile_style: {
                height: "200px",
                marginLeft: "10px",
            },
        },
        {
            ...data03,
            style: {
                height: "69%",
                marginLeft: "-40px",
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
                height: "84%",
                marginLeft: "40px",
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
                height: "79%",
                marginLeft: "-30px",
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
                height: "64%",
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
                height: "54%",
                position: "absolute",
                marginLeft: "20%",
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
                height: "59%",
                position: "absolute",
                marginLeft: "calc(50% - 30px)",
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
                height: "66%",
                position: "absolute",
                marginLeft: "calc(65% + 30px)",
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
                height: "47%",
                position: "absolute",
                marginLeft: "55%",
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
                height: "145px",
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
                height: "246px",
                position: "absolute",
                marginLeft: "calc(20% + 30px)",
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
                height: "150px",
                position: "absolute",
                marginLeft: "calc(40% - 10px)",
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
                height: "262px",
                position: "absolute",
                marginLeft: "calc(60% + 30px)",
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
                height: "190px",
                position: "absolute",
                marginLeft: "70%",
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
                height: "190%",
                marginLeft: "-95%",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data02,
            style: {
                height: "176%",
                marginLeft: "-30px",
            },
            mobile_style: {
                height: "200px",
                marginLeft: "-10px",
            },
        },
        {
            ...data03,
            style: {
                height: "180%",
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
                height: "193%",
                marginLeft: "40px",
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
                height: "160%",
                marginLeft: "-80%",
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
                height: "140%",
                position: "absolute",
                marginLeft: "20%",
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
                height: "164%",
                position: "absolute",
                marginLeft: "calc(30% + 50px)",
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
                height: "150%",
                position: "absolute",
                marginLeft: "calc(50% - 10px)",
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
                height: "165%",
                position: "absolute",
                marginLeft: "calc(60% + 30px)",
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
                height: "147%",
                position: "absolute",
                marginLeft: "70%",
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
                height: "120%",
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
                height: "114%",
                position: "absolute",
                marginLeft: "calc(20% + 30px)",
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
                height: "134%",
                position: "absolute",
                marginLeft: "calc(40% - 10px)",
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
                height: "118%",
                position: "absolute",
                marginLeft: "calc(55% - 30px)",
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
                height: "110%",
                position: "absolute",
                marginLeft: "68%",
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
                height: "280%",
                marginLeft: "-22%",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data02,
            style: {
                height: "300%",
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
                height: "288%",
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
                height: "300%",
                marginLeft: "-70px",
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
                height: "260%",
                marginLeft: "-60%",
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
                height: "250%",
                position: "absolute",
                marginLeft: "calc(40% - 30px)",
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
                height: "235%",
                position: "absolute",
                marginLeft: "calc(40% + 30px)",
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
                height: "265%",
                position: "absolute",
                marginLeft: "53%",
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
                height: "256%",
                position: "absolute",
                marginLeft: "calc(65% + 30px)",
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
                height: "236%",
                position: "absolute",
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
                height: "226%",
                position: "absolute",
                marginLeft: "12%",
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
                height: "216%",
                position: "absolute",
                marginLeft: "26%",
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
                height: "196%",
                position: "absolute",
                marginLeft: "39%",
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
                height: "216%",
                position: "absolute",
                marginLeft: "50%",
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
                height: "232%",
                position: "absolute",
                marginLeft: "63%",
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
                height: "380%",
                marginLeft: "-32%",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data02,
            style: {
                height: "410%",
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
                height: "376%",
                marginLeft: "65px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data04,
            style: {
                height: "405%",
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
                height: "368%",
                marginLeft: "-76%",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data06,
            style: {
                height: "354%",
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
                height: "346%",
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
                height: "360%",
                marginLeft: "-30px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
        {
            ...data09,
            style: {
                height: "340%",
                marginLeft: "-134px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
		{
            ...data10,
            style: {
                height: "332%",
                marginLeft: "-80%",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
		{
            ...data11,
            style: {
                height: "314%",
                marginLeft: "-134px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
		{
            ...data12,
            style: {
                height: "320%",
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
                height: "332%",
                marginLeft: "-50px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
		{
            ...data14,
            style: {
                height: "320%",
                marginLeft: "-80px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
            },
        },
		{
            ...data15,
            style: {
                height: "310%",
                marginLeft: "-114px",
            },
            mobile_style: {
                height: "100px",
                marginLeft: "10px",
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
        { src: `${PUBLIC_IMG_PATH}/project0/001.jpg` },
        { src: `${PUBLIC_IMG_PATH}/project0/002.jpg` },
        { src: `${PUBLIC_IMG_PATH}/project0/003.jpg` },
        { src: `${PUBLIC_IMG_PATH}/project0/004.jpg` },
        { src: `${PUBLIC_IMG_PATH}/project0/005.jpg` },
        { src: `${PUBLIC_IMG_PATH}/project0/006.gif` },
        { src: `${PUBLIC_IMG_PATH}/project0/007.jpg` },
        { src: `${PUBLIC_IMG_PATH}/project0/008.jpg` },
        { src: `${PUBLIC_IMG_PATH}/project0/009.jpg` },
        { src: `${PUBLIC_IMG_PATH}/project0/010.jpg` },
        { src: `${PUBLIC_IMG_PATH}/project0/011.jpg` },
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
        { src: `${PUBLIC_IMG_PATH}/project3/003.jpg` },
        { src: `${PUBLIC_IMG_PATH}/project3/004.png` },
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
};
export { projectData, detailImges };
