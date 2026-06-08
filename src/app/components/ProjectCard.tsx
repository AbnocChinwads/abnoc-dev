type ProjectCardProps = {
    title: string;
    description: string;
    tech: string;
    learning: string;
};

export default function ProjectCard ({
    title,
    description,
    tech,
    learning,
}: ProjectCardProps) {
    return (
        <section>
            <h4>{title}</h4>

            <p>{description}</p>

            <p>
                <strong>Tech:</strong> {tech}
            </p>

            <p>
                <strong>Learning:</strong> {learning}
            </p>
        </section>
    );
}