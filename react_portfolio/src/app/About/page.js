export default function About()
{
    return(
        <main>
            <h3 className="text-xl text-align:left p-5 w-full bg-sky-300 mt-5">About Me</h3>
            <p className="py-8">I am M.S.L.V. Saranya, currently pursuing my B. Tech in Computer Science Engineering with a specialization in AI and ML at Sri Sri University, Cuttack. I have a strong foundation in various programming languages and technologies, including frontend and backend development. I am eager to expand my skill set by tackling real-world problems.</p>
            <h3 className="bg-sky-300 ">Skills:</h3>
            <ul className="list-disc list-inside p-5">
                <li>Technical Skills:</li>
                <ul className="list-disc list-inside">
                    <li className="px-4">Python,Java,JavaScript,PHP</li>
                    <li className="px-4">HTML,CSS</li>
                    <li className="px-4">Machine Learning,Django</li>
                </ul>
                <li>Soft Skills:</li>
                <ul className="list-disc list-inside">
                    <li className="px-4">Strong interpersonal skills, multi-tasking, constructive criticism, punctuality, effective communication, adaptable nature</li>
                </ul>
                <li>Languages</li>
                <ul className="list-disc list-inside">
                    <li className="px-4">English</li>
                    <li className="px-4">Telugu</li>
                    <li className="px-4">Hindi</li>
                </ul>
            </ul>
            <h3 className="bg-sky-300">Resume/CV:</h3>
            <h3 className="p-5">Experience Summary:</h3>
            <ul className="list-disc list-inside">
                <li>Minor Project: Image Caption Generation(2023)</li>
                <li>Major Project: Customer Behavior Analysis (2024)</li>
            </ul>
            <h3 className="p-5">Education:</h3>
            <ul className="list-disc list-inside">
                <li>Higher Secondary Education: Sri Viswa Junior College, Visakhapatnam, Andhra Pradesh (2019-2021)</li>
                <li>B. Tech: Sri Sri University, Bidyadharpur, Cuttack (2021 - 2025)</li>
            </ul>
            <h3 className="p-5">Certifications:</h3>
            <ul className="list-disc list-inside">
                <li>Robotic Process Automation (Virtual Internship)</li>
                <li>Learn JavaScript (Codecademy)</li>
                <li>Machine Learning (AWS Academy)</li>
                <li>Elements of AI (SkillsBuild)</li>
            </ul>
        </main>
    );
}