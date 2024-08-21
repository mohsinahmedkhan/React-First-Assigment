
import './App.css'

function App() {
  const student = [
    {
      name: "Mohsin",
      fatherName: "Khalid",
      education : "Matric",
      school : "SMIT",
      age: 18
      
    },
    {
      name: "Ahmed",
      fatherName: "Salman",
      education : "Inter",
      school : "SMIT",
      age: 20
      
    },
    {
      name: "Noman",
      fatherName: "Faisal",
      education : "Graduate",
      school : "SMIT",
      age: 25
      
    },
    {
      name: "Uzair",
      fatherName: "Zafar",
      education : "Matric",
      school : "SMIT",
      age: 21
      
    },    {
      name: "Hasnian",
      fatherName: "Khalid",
      education : "Matric",
      school : "SMIT",
      age: 16
      
    },
    {
      name: "Hassan",
      fatherName: "Hashir",
      education : "Matric",
      school : "SMIT",
      age: 20
      
    },
    {
      name: "Junaid",
      fatherName: "Muhammad",
      education : "undergraduate",
      school : "SMIT",
      age: 23
      
    },
    {
      name: "Arman",
      fatherName: "Imran",
      education : "Inter",
      school : "SMIT",
      age: 19
      
    },
    {
      name: "Moeez",
      fatherName: "Khalid",
      education : "undergraduate",
      school : "SMIT",
      age: 18
      
    }
  ]
  return (
    <div className='container'>
      <h1 className='heading'>Students</h1>
      {
        student.map((data, ind) =>{
          return <div key={ind} className='item'>
            <h3>
              Name: <span>{data.name}</span>
            </h3>
            <h3>
            Father Name: <span>{data.fatherName}</span>
            </h3>
            <h3>
            Education: <span>{data.education}</span>
            </h3>
            <h3>
            School: <span>{data.school}</span>
            </h3>
            <h3>
            Age: <span>{data.age}</span>
            </h3>
          </div>
        })
      }
    </div>
  )
}

export default App
