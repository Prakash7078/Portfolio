import Intro from "./Intro"
import Navbar from "./Navbar"

const Common=()=>{
    return(
        <div className="back-img m-0 rounded-b-md">
            <Navbar />
            <Intro />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" class=" w-full h-18 sm:h-20 lg:h-[15vh] border-0 border-red-500 "><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"></path></defs><g class="waves"><use xlink:href="#gentle-wave" x="50" y="0" fill="#f5f5f5" fill-opacity=".2"></use><use xlink:href="#gentle-wave" x="50" y="3" fill="#f5f5f5" fill-opacity=".5"></use><use xlink:href="#gentle-wave" x="50" y="6" fill="#f5f5f5" fill-opacity=".9"></use></g></svg>
        </div>
    )
   
}
export default Common;
