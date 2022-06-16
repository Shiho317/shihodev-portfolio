import { Skill, SkillsWrapper } from "./Skills.style";
import { GrMysql } from "react-icons/gr";
import {
  DiHtml5,
  DiCss3,
  DiJqueryLogo,
  DiSass,
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiRedux,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPython,
  SiStyledcomponents,
  SiFirebase,
  SiMongodb,
  SiFramer,
  SiFigma,
  SiInkscape,
  SiGit,
  SiGraphql,
  SiApollographql,
  SiPostgresql
} from "react-icons/si";

const Skills = () => {
  return (
    <SkillsWrapper>
      <Skill>
        <p>Html</p>
        <DiHtml5 />
      </Skill>
      <Skill>
        <p>Css</p>
        <DiCss3 />
      </Skill>
      <Skill>
        <p>jQuery</p>
        <DiJqueryLogo />
      </Skill>
      <Skill>
        <p>Sass</p>
        <DiSass />
      </Skill>
      <Skill>
        <p>JavaScript</p>
        <DiJavascript1 />
      </Skill>
      <Skill>
        <p>React</p>
        <DiReact />
      </Skill>
      <Skill>
        <p>Redux</p>
        <SiRedux />
      </Skill>
      <Skill>
        <p>Next.js</p>
        <SiNextdotjs />
      </Skill>
      <Skill>
        <p>Angular</p>
        <SiAngular />
      </Skill>
      <Skill>
        <p>TypeScript</p>
        <SiTypescript />
      </Skill>
      <Skill>
        <p>Node.js</p>
        <SiNodedotjs />
      </Skill>
      <Skill>
        <p>Express</p>
        <SiExpress />
      </Skill>
      <Skill>
        <p>graphQL</p>
        <SiGraphql />
      </Skill>
      <Skill>
        <p>MySQL</p>
        <GrMysql />
      </Skill>
      <Skill>
        <p>PostgreSQL</p>
        <SiPostgresql />
      </Skill>
      <Skill>
        <p>Apollo</p>
        <SiApollographql />
      </Skill>
      <Skill>
        <p>PHP</p>
        <SiPhp />
      </Skill>
      <Skill>
        <p>Python</p>
        <SiPython />
      </Skill>
      <Skill>
        <p>Styled-components</p>
        <SiStyledcomponents />
      </Skill>
      <Skill>
        <p>Firebase</p>
        <SiFirebase />
      </Skill>
      <Skill>
        <p>MongoDB</p>
        <SiMongodb />
      </Skill>
      <Skill>
        <p>Framer-motion</p>
        <SiFramer />
      </Skill>
      <Skill>
        <p>Figma</p>
        <SiFigma />
      </Skill>
      <Skill>
        <p>Inkscape</p>
        <SiInkscape />
      </Skill>
      <Skill>
        <p>Git/GitHub</p>
        <SiGit />
      </Skill>
    </SkillsWrapper>
  );
};

export default Skills;
