import Content from "./Content"
import Header from "./Header"

const Course = ({courses}) =>{
    return(
        <>
        <Header title={"Web Development Curriculam"}/>
        {
            courses.map(course=><div key={course.id}>
                <h2>{course.name}</h2>
                <Content parts={course.parts}/>
                <h4>Total: {course.parts.map(part=>part.exercises).reduce((s,p)=>s+p)}</h4>
                </div>
                )
        }
        
        </>
    )
}
export default Course