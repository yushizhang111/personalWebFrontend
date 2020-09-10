import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./Component/Layout";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Yushi Zhang": "Yushi Zhang",
          "Open the website": "Open the website",
          About: "About",
          "About Me": "About Me",
          "Working Experience": "Working Experience",
          Projects: "Projects",
          Skills: "Skills",
          "JR Academy": "JR Academy",
          "Students Projects": "Students Projects",
          Loading: "Loading",
          "Back end": "Back end",
          "Front end": "Front end",
          "Project Management": "Project Management",
          "Cloud Platform": "Cloud Platform",
          "Machine Learning": "Machine Learning",
          "UI & UX Design": "UI & UX Design",
          Language: "Language",
          Others: "Others",
          "PROJECT LIST": "PROJECTS LIST",
          "SKILL LIST": "SKILLS LIST",
          "WORKING EXPERIENCE": "WORKING EXPERIENCE",
          "Front-end Developer": "Front-end Developer",
          "Full Stack Developer": "Full Stack Developer",
          "Web Developer": "Web Developer",
          "Master of Information Technology":
            "Master of Information Technology",
          "University of Queensland (AU)": "University of Queensland (AU)",
          "Master by Research in Integrative Neuroscience":
            "Master by Research in Integrative Neuroscience",
          "University of Edinburgh (UK)": "University of Edinburgh (UK)",
          "Sufficient experience in front end development":
            "Sufficient experience in front end development",
          "Solid knowledge in HTML, CSS, JS":
            "Solid knowledge in HTML, CSS, JS",
          "Sufficient experience in nodejs, reactjs, redux, mongodb":
            "Sufficient experience in nodejs, reactjs, redux, mongodb",
          "Efficient team player, Have GIT and Agile practices":
            "Efficient team player, Have GIT and Agile practices",
          "Have patience, passion and positive attitude":
            "Have patience, passion and positive attitude",
        },
      },
      zh: {
        translation: {
          "Yushi Zhang": "张雨诗",
          "Open the website": "打开网址",
          About: "关于我",
          "About Me": "关于我",
          "Working Experience": "工作经验",
          Projects: "项目",
          Skills: "技能",
          "JR Academy": "澳洲匠人学院",
          "Students Projects": "学生项目",
          Loading: "稍后",
          "Back end": "后端",
          "Front end": "前端",
          "Project Management": "项目管理",
          "Cloud Platform": "云平台",
          "Machine Learning": "机器学习",
          "UI & UX Design": "UI & UX 设计",
          Language: "语言",
          Others: "其他",
          "PROJECT LIST": "项目列表",
          "SKILL LIST": "技能列表",
          "WORKING EXPERIENCE": "工作经验",
          "Front-end Developer": "前端开发工程师",
          "Full Stack Developer": "全栈开发工程师",
          "Web Developer": "网站开发工程师",
          "Master of Information Technology": "信息技术硕士",
          "University of Queensland (AU)": "澳大利亚昆士兰大学",
          "Master by Research in Integrative Neuroscience":
            "综合神经科学研究型硕士",
          "University of Edinburgh (UK)": "英国爱丁堡大学",
          "Sufficient experience in front end development": "大量前端开发经验",
          "Solid knowledge in HTML, CSS, JS": "扎实的HTML，CSS，JS基础",
          "Sufficient experience in nodejs, reactjs, redux, mongodb":
            "大量nodejs, reactjs, redux, mongodb相关经验，参与开发多个React项目",
          "Efficient team player, Have GIT and Agile practices":
            "熟悉版本管理以及敏捷式开发",
          "Have patience, passion and positive attitude":
            "有团队精神，耐心，积极，学习能力强，对工作精益求精",
        },
      },
    },
    lng: "zh",
    fallbackLng: "zh",

    interpolation: {
      escapeValue: false,
    },
  });

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#ffd4d9",
      dark: "#ffd4d9",
      contrastText: "#000",
    },
    secondary: {
      light: "#ffffff",
      main: "#fcfcfc",
      dark: "#c9c9c9",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Baloo Bhaina 2",
  },
});

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = React.useState("zh");
  const handleAllLanguages = (lng) => {
    setLanguage(lng);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout
        content={<Home t={t} lng={language} />}
        t={t}
        i18n={i18n}
        handleAllLanguages={(lng) => handleAllLanguages(lng)}
      />
    </ThemeProvider>
  );
}

export default App;
