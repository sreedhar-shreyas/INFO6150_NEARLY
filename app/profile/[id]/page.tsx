export default function UserProfile({params}: any) {
    return ( 
        <div className=" lex flex-col items-center justify-center min-h-screen py-2">
            <h1> Profile</h1>
            <p className="text-4xl"> Profile Page {params.id} </p>
        </div>
     );
}
 
