export default function Portfolio()
{
    return(
        <main className="min-h-screen">
            <h3 className="bg-sky-300 p-3 mt-3">Introduction:</h3>
            <ul className="list-disc list-inside">
                <li>Here are some of the projects I've worked on during my studies.</li>
            </ul>
            <h3 className="bg-sky-300 p-3 mt-3">Project Thumbnails:</h3>
            <ul className="list-disc list-inside">
                <li>Image Caption Generation Project: Thumbnail image, brief description, link to detailed project page.</li>
                <li>Customer Behavior Analysis Project: Thumbnail image, brief description, link to detailed project page.</li>
            </ul>
            <h3 className="bg-sky-300 p-3 mt-3">Project Details:</h3>
            <ul className="list-disc list-inside">
                <li>Project Title:  Image Caption Generation</li>
                <ul className="list-disc list-inside">
                    <li className="px-6">Project Overview: Developed an image caption generation model as a minor project.</li>
                    <li className="px-6">Role: Developer</li>
                    <li className="px-6">Skills and Tools Used: Python, Machine Learning</li>
                    <li className="px-6">Problem Statement: Automate the generation of captions for images.</li>
                    <li className="px-6">Process: Detailed approach including dataset preparation, model training, and evaluation.</li>
                    <li className="px-6">Outcome: Successfully generated captions for a test set of images.</li>
                </ul>
                <li>Project Title: Customer Behavior Analysis</li>
                <ul className="list-disc list-inside">
                    <li className="px-6">Project Overview: Analyzed customer behavior on a web-based platform as a major project.</li>
                    <li className="px-6">Role: Developer</li>
                    <li className="px-6">Skills and Tools Used: JavaScript, SQL, Django</li>
                    <li className="px-6">Problem Statement: Understand customer behavior to improve user experience.</li>
                    <li className="px-6">Process: Data collection, analysis, and visualization.</li>
                    <li className="px-6">Outcome: Provided actionable insights for improving the platform.</li>
                </ul>
            </ul>
        </main>
    );
}