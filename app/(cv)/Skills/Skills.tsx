import SkillCard from "./components/SkillsCard";
import { skills } from "./data/Skills";

const Skills = () => {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Mes Compétences
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard 
            key={skill.name}
            name={skill.name}
            level={skill.level}
            icon={skill.icon}
            color={skill.color}
            colorDot={skill.colorDot}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;