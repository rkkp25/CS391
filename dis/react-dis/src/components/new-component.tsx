type CourseStaffProps = {
    name: string;
    rating: number;
    title: string;
};


export default function CourseStaff({ name, rating, title }: CourseStaffProps) {
    return (
        <div style={{ backgroundColor: "lightblue", color: "black" }}>
            <h3>Name: {name}</h3>
            <p>Rating: {rating}</p>
            <p>Title: {title}</p>
        </div>
    );
}
