import NestedCard from './components/NestedCard';
import NavBar from '../src/components/NavBar'
import ParentCard from "./components/ParentCard";
import Ccard from './components/Ccard';
const App = ()=>{
   
    return(

             <div >
        



             <NavBar></NavBar>

             <ParentCard>
             <NestedCard title="Contact 1" content="Infrastructure" />
        <NestedCard title="Contact 2" content="Quality" />
        <NestedCard title="Contact 3" content="Certification." />
             </ParentCard>
            <Ccard></Ccard>
             </div>


    );
}
export default App;