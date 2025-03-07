import './App.css'
import CourseStaff from "./components/new-component.tsx";
// NO {} around the import file!!

export default function App() {

    return (
        <div>
            <h2>Welcome to my first React application</h2>
            <div>
                {/* <CourseStaff name = "Taymaz" title = "Professor" rating = {92} /> */}
                <CourseStaff 
                    name = {'Taymaz'} 
                    title = {'Professor'} 
                    rating = {92} />
                <CourseStaff 
                    name ={'Jeffrey'}
                    title = {'Teaching Assisant'}
                    rating = {90} />
                <CourseStaff 
                    name = {'Sadiq'} 
                    title = {'Course Assistant'}
                    rating = {90} />
                <CourseStaff 
                    name = {'Ale'}
                    title = {'Course Assisant'}
                    rating = {90} />
            </div>
        </div>
    )
}

// export default App --> put this at the top instead
