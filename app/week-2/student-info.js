export default function StudentInfo(){
    let name = "Asenai Shiberim";
    let gitHubRepository = "https://github.com/AsenaiShiberim/cprg306-assignments";
    return(
        <div>
            <h1>{name}</h1>
        <ul>
            <li>
                <a href={gitHubRepository}>https://github.com</a>
            </li>
        </ul>
        </div>
        
    )
};
