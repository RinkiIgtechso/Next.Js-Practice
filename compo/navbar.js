import Link from "next/link";

const Navabr = () => {
    return ( 
        <div>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <Link href='/'>Home</Link>&nbsp;
            <Link href='/about'>About</Link>&nbsp;
            <Link href='/ninjas'>Ninja Listing</Link>
        </div>
     );
}
 
export default Navabr;