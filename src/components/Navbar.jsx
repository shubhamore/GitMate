import React from "react";

export default function Navbar({deleteAll}) {
    return (
        <nav>
            <div className="left"><h2>GitMate</h2></div>
            <input type="submit" value="Delete All" onClick={deleteAll} />
        </nav>
    );
}
