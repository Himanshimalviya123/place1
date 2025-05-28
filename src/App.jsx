////////////////listing

// const App=()=>{
//     const name=["sohan","sanju","anju","ranju"];
//     const ans=name.map((key)=>{
//         return(
//          <>
//          <h1>{key}</h1>
//          </>
//         )
//  })
//     return(
//         <>
//         <h1>welcome</h1>
//         {ans}
//         </>
//     )
// }
// export default App;
/////////////////////////////////////////////////////////////
// const App=()=>{
//     const subject=["php","oracle","java","html"];
//     const ans=subject.map((key)=>{
//         return(
//          <>
//         <li><h1>{key}</h1></li>
//          </>
//         )
//  })
//     return(
//         <>
//         <h1>welcome</h1>
//         <ol><h1>{ans}</h1></ol>
//         </>
//     )
// }
// export default App;
/////////////////////////////////////////////////
// const App=()=>{
//     const student=[
//         {
//         "rollno":1,
//         "name":"sanjay",
//         "city":"bhopal",
//         "fees":25000,
//           } ,
//            {
//         "rollno":2,
//         "name":"shivani",
//         "city":"pune",
//         "fees":25000,
//           } ,
//            {
//         "rollno":3,
//         "name":"anmol",
//         "city":"bhopal",
//         "fees":35000,
//           }   ,
//            {
//         "rollno":4,
//         "name":"sakshi",
//         "city":"indore",
//         "fees":27000,
//           }     

//     ]
//     const ans=student.map((key)=>{
//         return(
//             <>
          
//                 <tr>
//                     <td>{key.rollno} </td>
//                     <td>{key.name} </td>
//                     <td>{key.city} </td>
//                     <td>{key.fees} </td>
//                 </tr>
         
//             </>
//         )
//     })
// return(
//     <>
//     <h1>welcome</h1>
//     <hr/>
//     <table border="1" width="500">
//         <tr>
//             <th>roll no</th>
//             <th>name</th>
//             <th>city</th>
//             <th>fees</th>
//         </tr>
//         {ans}
//     </table>
//     </>
// )
// }
// export default App;

////////////////////////////////////////////
import Emp from "./emp"
const App=()=>{
    
    const ans=Emp.map((key)=>{
        return(
            <>
          
                <tr>
                    <td>{key.empno} </td>
                    <td>{key.name} </td>
                    <td>{key.designation} </td>
                    <td>{key.salary} </td>
                </tr>
         
            </>
        )
    })
return(
    <>
    <h1>welcome</h1>
    <hr/>
    <table border="1px solid black"  width="500px">
        <tr>
            <th>empno</th>
            <th>name</th>
            <th>designation</th>
            <th>salary</th>
        </tr>
        {ans}
    </table>
    </>
)
}
export default App;
