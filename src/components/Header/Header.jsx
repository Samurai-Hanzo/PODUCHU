import React from "react";
import HeaderMentor from "../../asstets/rena3.png";

const Header = () => {
    let creators = "Creators >";
    return (
        <div className="header">
            <div className="header-col-1">
                <img src={HeaderMentor} alt="" />
            </div>
            <div className="header-col-2">
                <h1 className="header-name">PODUCHU</h1>
                <div className="header-description">
                    <p className="header-desc">
                        Unlock the power of code with our educational
                        programming platform! Learn from the best with
                        interactive lessons and real-world projects. Join a
                        community of like-minded individuals and take your
                        coding skills to the next level. Sign up now for a
                        better future in tech!
                    </p>
                </div>

                <button className="header-button">{creators}</button>
            </div>
        </div>
    );
};

export default Header;
