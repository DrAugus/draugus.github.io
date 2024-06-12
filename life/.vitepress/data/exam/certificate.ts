import { Certificate } from "../../type";

const linkPrefix = '/life/exam/certificate/';

export const CERTIFICATE_DATA: Certificate[] = [
    {
        title: "教师资格证",
        details: "高中",
        intro: "",
        pre: "无",
        cycle: "",
        link: `${linkPrefix}ntce`,
    },
    {
        title: "公务员考试",
        details: "国家级",
        intro: "",
        pre: "无",
        cycle: "",
        link: `${linkPrefix}gwy`,
    },
    {
        title: "",
        details: "",
        intro: "",
        pre: "",
        cycle: "",
        link: `${linkPrefix}`,
    },
    {
        title: "",
        details: "",
        intro: "",
        pre: "",
        cycle: "",
        link: `${linkPrefix}`,
    },
];