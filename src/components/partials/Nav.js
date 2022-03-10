export const Nav= ()=>(
    <nav className="flex justify-between items-center wrapper bg-primary text-light">
        <div className="logo">Logo</div>
        <div className="nav-items flex items-center">
            <div className="nav-item px-lg">Home</div>
            <div className="form-group">
                {/* <label>Search</label> */}
                <input type="text" placeholder="Search" />
            </div>
        </div>
    </nav>
)