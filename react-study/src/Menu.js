/**
 * Created by jshen103 on 8/19/2017.
 */

import React, {Component} from 'react';

function Menu() {
    return (
        <row>
            <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </row>

    )
};

export default Menu;
